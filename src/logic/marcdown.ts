import { parseXml, XmlElement } from "@rgrove/parse-xml";
import { v4 as uuidv4 } from "uuid";

// Headers
const HEADER_1_PATTERN =
  /\n*^#\s(?<title>.+)\n(?<body>(?:(?!(^#\s|<\/?h1))(.|\n))+)/m;
const HEADER_2_PATTERN =
  /\n*^##\s(?<title>.+)\n(?<body>(?:(?!(^#{1,2}\s|<\/?h[1-2]))(.|\n))+)/m;
const HEADER_3_PATTERN =
  /\n*^###\s(?<title>.+)\n(?<body>(?:(?!(^#{1,3}\s|<\/h|<h[1-3]))(.|\n))+)/m;
const HEADER_4_PATTERN =
  /\n*^####\s(?<title>.+)\n(?<body>(?:(?!(^#{1,4}\s|<\/?h[1-4]))(.|\n))+)/m;
const HEADER_5_PATTERN =
  /\n*^####\s(?<title>.+)\n(?<body>(?:(?!(^#{1,5}\s|<\/?h[1-5]))(.|\n))+)/m;
const HEADER_6_PATTERN =
  /\n*^####\s(?<title>.+)\n(?<body>(?:(?!(^#{1,6}\s|<\/?h[1-6]))(.|\n))+)/m;
// Block types
const CODE_BLOCK_PATTERN = /\n*^```\n(?<body>(.|\n)+?)^```\n*/m;
const QUOTATION_PATTERN = /\n*^"""\n(?<body>(.|\n)+?)^"""\n*/m;
// Font
const BOLD_PATTERN = /(?<!\w)\*\*(?<body>.+?)\*\*(?!\w)/m;
const ITALIC_PATTERN = /(?<!\w)_(?<body>.+?)_(?!\w)/m;
const MONO_PATTERN = /(?<!\w)`(?<body>.+?)`(?!\w)/m;
// Link-like
const LINK_PATTERN = /(?<![\w!])\[(?<body>.+?)\]\((?<href>.+?)\)(?!\w)/m;
const IMAGE_PATTERN = /(?<!\w)!\[(?<alt>.+?)\]\((?<src>.+?)\)(?!\w)/m;
// Subgrouped
const DEFINITION_PATTERN =
  /(?<!\w)%(?<body>.+?)%\(\((?<definition>.+?)\)\)(?!\w)/m;
const COMMENT_PATTERN = /(?<!\w){(?<body>.+?)}\(\((?<comment>.+?)\)\)(?!\w)/m;
// Breaks
const PARAGRAPH_BREAK = /\n\n/m;
const LINE_BREAK = /\n/m;

const BODY = "body";
const DOCUMENT = "document";

export interface Matcher {
  pattern: RegExp;
  tag: string;
  subgroups?: string[];
}

export interface XmlNode {
  id: string;
  type?: string;
  text?: string;
  attributes: { [key: string]: string };
  children?: XmlNode[];
}

const getParameterString = (match: RegExpMatchArray, matcher: Matcher) =>
  match.groups
    ? Object.entries(match.groups)
        .map(([key, value]) =>
          key === BODY || (matcher.subgroups && matcher.subgroups.includes(key))
            ? ""
            : // TODO: Escape quotation marks
              `${key}="${value.trim()}"`
        )
        .filter((x) => x.length > 0)
        .join(" ")
    : "";

const getSubgroupString = (match: RegExpMatchArray, matcher: Matcher) =>
  match.groups
    ? Object.entries(match.groups)
        .map(([key, value]) =>
          key !== BODY && matcher.subgroups && matcher.subgroups.includes(key)
            ? `<${key}>${value.trim()}</${key}>`
            : ""
        )
        .filter((x) => x.length > 0)
        .join("")
    : "";

const getXmlFromMatch = (match: RegExpMatchArray, matcher: Matcher) => {
  const parameters = getParameterString(match, matcher);
  const subgroups = getSubgroupString(match, matcher);
  const body =
    match.groups && match.groups[BODY] ? match.groups[BODY].trim() : "";
  const openingTagStart = parameters
    ? `<${matcher.tag} ${parameters}`
    : `<${matcher.tag}`;
  return !subgroups && !body
    ? `${openingTagStart} />`
    : `${openingTagStart}>${body}${subgroups}</${matcher.tag}>`;
};

const replaceAllWithGroups = (text: string, matcher: Matcher) => {
  let remainderText = text;
  let replacedString = "";
  while (true) {
    const match = remainderText.match(matcher.pattern);
    if (match && match.index !== undefined) {
      const matchEndIndexExclusive = match.index + match[0].length;
      const upToEndOfMatch = remainderText.slice(0, matchEndIndexExclusive);
      const afterMatch = remainderText.slice(matchEndIndexExclusive);
      const xmled = upToEndOfMatch.replace(
        matcher.pattern,
        getXmlFromMatch(match, matcher)
      );
      replacedString += xmled;
      remainderText = afterMatch;
    } else {
      break;
    }
  }
  return replacedString + remainderText;
};

export const DEFAULT_MATCHERS: Matcher[] = [
  {
    pattern: HEADER_1_PATTERN,
    tag: "h1",
  },
  {
    pattern: HEADER_2_PATTERN,
    tag: "h2",
  },
  {
    pattern: HEADER_3_PATTERN,
    tag: "h3",
  },
  {
    pattern: HEADER_4_PATTERN,
    tag: "h4",
  },
  {
    pattern: HEADER_5_PATTERN,
    tag: "h5",
  },
  {
    pattern: HEADER_6_PATTERN,
    tag: "h6",
  },
  {
    pattern: CODE_BLOCK_PATTERN,
    tag: "code",
  },
  {
    pattern: QUOTATION_PATTERN,
    tag: "quot",
  },
  {
    pattern: BOLD_PATTERN,
    tag: "b",
  },
  {
    pattern: ITALIC_PATTERN,
    tag: "i",
  },
  {
    pattern: MONO_PATTERN,
    tag: "mono",
  },
  {
    pattern: LINK_PATTERN,
    tag: "a",
  },
  {
    pattern: IMAGE_PATTERN,
    tag: "img",
  },
  {
    pattern: DEFINITION_PATTERN,
    tag: "def",
    subgroups: ["definition"],
  },
  {
    pattern: COMMENT_PATTERN,
    tag: "com",
    subgroups: ["comment"],
  },
  {
    pattern: PARAGRAPH_BREAK,
    tag: "pb",
  },
  {
    pattern: LINE_BREAK,
    tag: "br",
  },
];

function isXmlElement(x: any): x is XmlElement {
  return "start" in x;
}

const convertToXmlNode = (element: XmlElement): XmlNode => ({
  id: uuidv4(),
  attributes: element.attributes,
  type: element.name,
  text: element.text,
  children:
    element.children &&
    element.children
      .filter(isXmlElement)
      .map((element_) => convertToXmlNode(element_)),
});

const wrapDocument = (xml: string) => `<${DOCUMENT}>${xml}</${DOCUMENT}>`;

export const parseMarcdownToXml = (
  text: string,
  matchers: Matcher[]
): XmlNode => {
  let replacedString = text;
  for (let matcher of matchers) {
    replacedString = replaceAllWithGroups(replacedString, matcher);
  }
  const finalXml = wrapDocument(replacedString);
  const parsedXml = parseXml(finalXml);
  const xmlNode = convertToXmlNode(parsedXml.children[0] as XmlElement);
  return xmlNode;
};
