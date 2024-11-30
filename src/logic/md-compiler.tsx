import { regex } from "regex";
import { split } from "./util";
import { Partition, partitionStringWithMatchers } from "./partition";

export interface ImageBody {
  alt: string;
  src: string;
}

export enum ParagraphType {
  REGULAR,
  CODE_BLOCK,
}

export interface Paragraph {
  paragraphType: ParagraphType;
  partitions: Partition[];
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
  // We want everything to belong to a header, so no leading content.
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
        bodies: sectionLinesAfterFirstHeader[i].map((line_) =>
          processCodeBlock(line_)
        ),
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
  let paragraphLines = bodyText.split("\n");
  let paragraphType = ParagraphType.REGULAR;
  if (
    paragraphLines.length >= 2 &&
    paragraphLines[0] === "```" &&
    paragraphLines[paragraphLines.length - 1] === "```"
  ) {
    paragraphLines = paragraphLines.slice(1, -1);
    paragraphType = ParagraphType.CODE_BLOCK;
  }
  return {
    partitions: paragraphLines.map((line) => partitionStringWithMatchers(line)),
    paragraphType: paragraphType,
  };
};

export const convertMarcdownToJsx = (md: string) => {
  const splitByNewlines = md.split("\n\n");
  const sections = nestSections(splitTextIntoSections(splitByNewlines));
  return sections;
};
