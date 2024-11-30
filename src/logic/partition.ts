import { v4 as uuidv4 } from "uuid";

export enum PartitionType {
  REGULAR,
  BOLD,
  ITALIC,
  CODE,
  LINK,
  FOOTNOTE,
  DEFINITION,
  IMAGE,
}

export interface Partition {
  mainText: string | PartitionInternal[];
  auxText?: string | PartitionInternal[];
  auxPlainText?: string;
  partitionType: PartitionType;
}

interface PartitionInternal extends Partition {
  mainText: string | PartitionInternal[];
  auxText?: string | PartitionInternal[];
  auxPlainText?: string;
  partitionType: PartitionType;
  start: number;
  end: number;
  id: string;
}

export interface Matcher {
  for: PartitionType;
  regex: RegExp;
}

const requiresAuxText = (pt: PartitionType) =>
  [PartitionType.FOOTNOTE, PartitionType.DEFINITION].includes(pt);
const requiresAuxPlainText = (pt: PartitionType) =>
  [PartitionType.LINK, PartitionType.IMAGE].includes(pt);

const MATCHERS: Matcher[] = [
  { for: PartitionType.BOLD, regex: /\*\*(?<mainText>.+?)\*\*/ },
  { for: PartitionType.ITALIC, regex: /_(?<mainText>.+?)_/ },
  { for: PartitionType.CODE, regex: /`(?<mainText>.+?)`/ },
  {
    for: PartitionType.FOOTNOTE,
    regex: /\{(?<mainText>.+?)\}\((?<auxText>.+?)\)/,
  },
  {
    for: PartitionType.LINK,
    regex: /\[(?<mainText>.+?)\]\((?<auxPlainText>.+?)\)/,
  },
  {
    for: PartitionType.DEFINITION,
    regex: /%(?<mainText>.+?)%\((?<auxText>.+?)\)/,
  },
  {
    for: PartitionType.IMAGE,
    regex: /\<(?<mainText>.+?)\>\((?<auxPlainText>.+?)\)/,
  },
];

const findFirstPartition = (
  s: string,
  matcher: Matcher,
  offset: number
): PartitionInternal | undefined => {
  const match = s.match(matcher.regex);
  if (match?.groups && match?.index !== undefined && match.groups["mainText"]) {
    const mainText = match.groups["mainText"];
    let partition: PartitionInternal = {
      start: offset + match.index,
      end: offset + match.index + match[0].length,
      mainText: mainText,
      partitionType: matcher.for,
      id: uuidv4(),
    };
    if (requiresAuxPlainText(matcher.for)) {
      if (match.groups["auxPlainText"]) {
        partition.auxPlainText = match.groups["auxPlainText"];
      } else {
        return undefined;
      }
    }
    if (requiresAuxText(matcher.for)) {
      if (match.groups["auxText"]) {
        partition.auxText = match.groups["auxText"];
      } else {
        return undefined;
      }
    }
    return partition;
  } else {
    return undefined;
  }
};

const findAllPartitionsForMatcher = (s: string, matcher: Matcher) => {
  let partitions = [] as PartitionInternal[];
  let sTemp = s;
  let offset = 0;
  while (true) {
    const p = findFirstPartition(sTemp, matcher, offset);
    if (!p) {
      break;
    }
    partitions = [...partitions, p];
    sTemp = sTemp.slice(p.end - offset);
    offset = p.end;
  }
  return partitions;
};

const getAllPartitions = (s: string, matchers: Matcher[]) => {
  let allPartitions = [] as PartitionInternal[];
  matchers.forEach((matcher) => {
    allPartitions = [
      ...allPartitions,
      ...findAllPartitionsForMatcher(s, matcher),
    ];
  });
  return allPartitions;
};

const isFirstPartitionSubsetOfSecond = (
  partitionA: PartitionInternal,
  partitionB: PartitionInternal
) => partitionA.start >= partitionB.start && partitionA.end <= partitionB.end;

const onlyKeepTopLevelPartitions = (partitions: PartitionInternal[]) =>
  partitions.filter(
    (partition) =>
      !partitions.some(
        (p) =>
          partition.id != p.id && isFirstPartitionSubsetOfSecond(partition, p)
      )
  );

const fillInRemainingPartitions = (
  s: string,
  partitions: PartitionInternal[]
) => {
  let fullPartitions = [] as PartitionInternal[];
  let converageEndIndex = 0;
  partitions.forEach((partition) => {
    if (partition.start > converageEndIndex) {
      fullPartitions = [
        ...fullPartitions,
        {
          id: uuidv4(),
          start: converageEndIndex,
          end: partition.start,
          mainText: s.slice(converageEndIndex, partition.start),
          partitionType: PartitionType.REGULAR,
        },
      ];
    }
    fullPartitions = [...fullPartitions, partition];
    converageEndIndex = partition.end;
  });
  const lastPartition =
    partitions.length > 0 && partitions[partitions.length - 1];
  if (lastPartition && lastPartition.end < s.length) {
    fullPartitions = [
      ...fullPartitions,
      {
        id: uuidv4(),
        start: lastPartition.end,
        end: s.length,
        mainText: s.slice(lastPartition.end),
        partitionType: PartitionType.REGULAR,
      },
    ];
  }
  return fullPartitions;
};

const sortPartitions = (partitions: PartitionInternal[]) =>
  partitions.sort((p1, p2) => p1.start - p2.start);

const getSortedTopLevelPartitions = (s: string, matchers: Matcher[]) =>
  fillInRemainingPartitions(
    s,
    sortPartitions(onlyKeepTopLevelPartitions(getAllPartitions(s, matchers)))
  );

const enrichPartition = (
  partition: PartitionInternal,
  matchers: Matcher[]
): PartitionInternal => {
  const mainText = partition.mainText;
  let newPartition = structuredClone(partition);
  // Given recursion order, we expect this to be a string.
  if (Array.isArray(mainText)) {
    return newPartition;
  }
  const subPartitions = getSortedTopLevelPartitions(mainText, matchers);
  if (subPartitions.length === 0) {
    return newPartition;
  }
  const enrichedSubPartitions = subPartitions.map((subPartition) =>
    enrichPartition(subPartition, matchers)
  );
  newPartition.mainText = enrichedSubPartitions;
  if (partition.auxText && !Array.isArray(partition.auxText)) {
    const auxSubPartitions = getSortedTopLevelPartitions(
      partition.auxText,
      matchers
    );
    if (auxSubPartitions.length !== 0) {
      newPartition.auxText = auxSubPartitions.map((subPartition) =>
        enrichPartition(subPartition, matchers)
      );
    }
  }
  return newPartition;
};

export const partitionStringWithMatchers = (
  s: string,
  matchers?: Matcher[]
): Partition => {
  const matchers_ = matchers || MATCHERS;
  const res = enrichPartition(
    {
      mainText: s,
      partitionType: PartitionType.REGULAR,
      start: 0,
      end: 0,
      id: uuidv4(),
    },
    matchers_
  );
  return res;
};

export const test = () => {
  const initialPartition: PartitionInternal = {
    mainText:
      "content **stuff [link to _things_](https://link)** among **many _other_** things. Also adding an {**epic** footnote}(With a _description_).",
    partitionType: PartitionType.REGULAR,
    start: 0,
    end: 0,
    id: uuidv4(),
  };
  console.log(enrichPartition(initialPartition, MATCHERS));
};
