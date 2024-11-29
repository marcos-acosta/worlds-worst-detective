import { regex } from "regex";
import { objectsEqual, split } from "./util";
import { decompose, Matcher } from "./priority-split";

export interface ImageBody {
  alt: string;
  src: string;
}

export interface Span {
  content: string | Span[];
  bold?: boolean;
  italic?: boolean;
  code?: boolean;
  footnote?: string;
  definition?: string;
  href?: string;
}

export enum ParagraphType {
  REGULAR,
  CODE_BLOCK,
}

export interface Paragraph {
  paragraphType: ParagraphType;
  span: Span;
}

export interface Section {
  title: string;
  level: number;
  isDigression?: boolean;
  bodies: (Paragraph | ImageBody)[];
  subsections: Section[];
}

export function isImageBody(b: ImageBody | Paragraph): b is ImageBody {
  return (b as ImageBody).src !== undefined;
}

const areSpansEqualBesidesContent = (spanA: Span, spanB: Span) => {
  const spanA_: Span = { ...structuredClone(spanA), content: "" };
  const spanB_: Span = { ...structuredClone(spanB), content: "" };
  return objectsEqual(spanA_, spanB_);
};

const simplify = (span: Span): Span => {
  if (Array.isArray(span.content)) {
    if (
      span.content.length === 1 &&
      areSpansEqualBesidesContent(span, span.content[0])
    ) {
      return simplify(span.content[0]);
    } else {
      return { ...span, content: span.content.map((c) => simplify(c)) };
    }
  } else {
    return span;
  }
};

const detectFormatting = (
  text: string,
  wrapper: string,
  spanProperty: Partial<Span>
) => {
  let remainingText = text;
  let spans = [] as Span[];
  while (true) {
    const match = remainingText.match(
      regex`.*?(?<fullMatch>${wrapper}(?<internalContent>.*?)${wrapper}).*`
    );
    if (match?.groups) {
      const internalContent = match.groups["internalContent"];
      const fullMatch = match.groups["fullMatch"];
      const matchIndex = remainingText.indexOf(fullMatch);
      const [pre, post] = [
        remainingText.slice(0, matchIndex),
        remainingText.slice(matchIndex + fullMatch.length),
      ];
      spans = [
        ...spans,
        { content: pre },
        { content: internalContent, ...spanProperty },
      ].filter((s) => s.content.length > 0);
      remainingText = post;
    } else {
      spans = [...spans, { content: remainingText }];
      break;
    }
  }
  return spans;
};

const detectFormattingInSpan = (
  span: Span,
  wrapper: string,
  spanProperty: Partial<Span>
): Span => {
  if (Array.isArray(span.content)) {
    return {
      ...span,
      content: span.content.map((span_) =>
        detectFormattingInSpan(span_, wrapper, spanProperty)
      ),
    };
  } else {
    return {
      ...span,
      content: detectFormatting(span.content, wrapper, spanProperty),
    };
  }
};

const applyStylesToSpan = (span: Span, filters: ((s: Span) => Span)[]) => {
  let newSpan = span;
  for (let styleFilter of filters) {
    newSpan = styleFilter(newSpan);
  }
  return newSpan;
};

const FILTERS = [
  (s: Span) => detectFormattingInSpan(s, "**", { bold: true }),
  (s: Span) => detectFormattingInSpan(s, "_", { italic: true }),
  (s: Span) => detectFormattingInSpan(s, "`", { code: true }),
];

/**
 * TODO
 * - hierarchical
 *   - link
 *   - definition
 *   - footnote
 *   - (digressions)
 * - images
 */

const splitTextIntoSections = (lines: string[]): Section[] => {
  let sections = [] as Section[];
  const matchWithHeaderPattern = (s: string) =>
    s.match(regex`(?<headingNumber>\#+)\s(?<title>.+)`);
  const [sectionLines, headers] = split(lines, (t: string) =>
    Boolean(matchWithHeaderPattern(t))
  );
  if (headers.length === 0 || headers.length + 1 !== sectionLines.length) {
    return sections;
  }
  // We want everything to belong to a header.
  const sectionLinesAfterFirstHeader = sectionLines.slice(1);
  for (let i = 0; i < headers.length; i++) {
    const headerMatch = matchWithHeaderPattern(headers[i]);
    if (!headerMatch?.groups) {
      continue;
    }
    sections = [
      ...sections,
      {
        title: headerMatch.groups["title"],
        level: headerMatch.groups["headingNumber"].length,
        bodies: sectionLinesAfterFirstHeader[i]
          .map((line_) => processCodeBlock(line_))
          .map((paragraph) => ({
            ...paragraph,
            span: simplify(applyStylesToSpan(paragraph.span, FILTERS)),
          })),
        subsections: [],
      },
    ];
  }
  return sections;
};

const nestSections = (sections: Section[]) => {
  if (sections.length === 0) {
    return sections;
  }
  let minLevel = Infinity;
  sections.forEach((section) => {
    if (section.level < minLevel) {
      minLevel = section.level;
    }
  });
  const [lowerHeadings, topLevelHeadings] = split(
    sections,
    (s: Section) => s.level === minLevel
  );
  // Basic assumption that there is one less delimiter than splits.
  if (topLevelHeadings.length + 1 !== lowerHeadings.length) {
    return sections;
  }
  // Assume first header is top level i.e. We won't handle situations
  // like h2 > h1 with no preceding h1.
  const lowerHeadingsAfterFirstHeading = lowerHeadings.slice(1);
  for (let i = 0; i < lowerHeadingsAfterFirstHeading.length; i++) {
    topLevelHeadings[i].subsections = nestSections(
      lowerHeadingsAfterFirstHeading[i]
    );
  }
  return topLevelHeadings;
};

const processCodeBlock = (bodyText: string): Paragraph => {
  const lines = bodyText.split("\n");
  if (
    lines.length >= 2 &&
    lines[0] === "```" &&
    lines[lines.length - 1] === "```"
  ) {
    return {
      paragraphType: ParagraphType.CODE_BLOCK,
      span: { content: lines.slice(1, -1).join("\n") },
    };
  } else {
    return {
      paragraphType: ParagraphType.REGULAR,
      span: { content: bodyText },
    };
  }
};

export const convertMarcdownToJsx = (md: string) => {
  const splitByNewlines = md.split("\n\n");
  const sections = nestSections(splitTextIntoSections(splitByNewlines));
  // console.log(sections);

  const matchers: Matcher[] = [
    { name: "matcher 1", regex: regex`\*\*.+?\*\*` },
    { name: "matcher 2", regex: regex`_.+?_` },
  ];
  console.log(
    decompose(
      "something _really **fun**_ _is_ **happening _right_ _now_** _now_",
      matchers
    )
  );

  return sections;
};
