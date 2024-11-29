import { v4 as uuidv4 } from "uuid";

export interface Matcher {
  name: string;
  regex: RegExp;
}

export interface Match {
  matcherName?: string;
  startInclusive: number;
  endExclusive: number;
  matchedText: string;
  id: string;
  matchAfter: string[];
  children: Match[];
}

const findMatchStartAndEnd = (
  s: string,
  matcher: Matcher,
  offset: number
): Match | undefined => {
  const match = s.match(matcher.regex);
  if (match?.index && match.index > 0) {
    return {
      matcherName: matcher.name,
      startInclusive: offset + match.index,
      endExclusive: offset + match.index + match[0].length,
      matchedText: match[0],
      id: uuidv4(),
      matchAfter: [],
      children: [],
    };
  } else {
    return undefined;
  }
};

const getAllMatches = (s: string, matcher: Matcher) => {
  let matches = [] as Match[];
  let sTemp = s;
  let offset = 0;
  while (true) {
    const match = findMatchStartAndEnd(sTemp, matcher, offset);
    if (!match) {
      break;
    }
    matches = [...matches, match];
    sTemp = sTemp.slice(match.endExclusive - offset);
    offset = match.endExclusive;
  }
  return matches;
};

const isFirstMatchSubsetOfSecond = (matchA: Match, matchB: Match) =>
  matchA.startInclusive >= matchB.startInclusive &&
  matchA.startInclusive < matchB.endExclusive &&
  matchB.endExclusive > matchB.startInclusive &&
  matchB.endExclusive <= matchB.endExclusive;

const updateDependents = (match: Match, allMatches: Match[]) => {
  let newMatch = { ...match };
  allMatches.forEach((match_) => {
    if (
      match_.id !== newMatch.id &&
      isFirstMatchSubsetOfSecond(newMatch, match_)
    ) {
      newMatch.matchAfter = [...newMatch.matchAfter, match_.id];
    }
  });
  return newMatch;
};

const cleanUpDependencies = (matches: {
  [k: string]: Match;
}): { [k: string]: Match } => {
  return Object.fromEntries(
    Object.entries(matches).map(([id, match]) => [
      id,
      {
        ...match,
        matchAfter:
          match.matchAfter.length === 0
            ? []
            : [
                match.matchAfter.reduce(
                  (matchWithMostDependencies, currentMatch) =>
                    matches[currentMatch].matchAfter.length >
                    matches[matchWithMostDependencies].matchAfter.length
                      ? currentMatch
                      : matchWithMostDependencies
                ),
              ],
      },
    ])
  );
};

const findMatchInNestedStructure = (
  idToFind: string,
  matches: Match[]
): Match | undefined => {
  for (let i = 0; i < matches.length; i++) {
    if (matches[i].id === idToFind) {
      return matches[i];
    }
    const recursiveResult = findMatchInNestedStructure(
      idToFind,
      matches[i].children
    );
    if (recursiveResult) {
      return recursiveResult;
    }
  }
  return undefined;
};

const recursivelyClean = (matches: Match[]): Match[] => {
  if (matches.length === 0) {
    return [];
  }
  return matches
    .map((match) => ({
      ...match,
      children: recursivelyClean(match.children).map((child) =>
        makeMatchRelativeToDependency(child, match)
      ),
    }))
    .sort((matchA, matchB) => matchA.startInclusive - matchB.startInclusive);
};

const makeMatchRelativeToDependency = (
  match: Match,
  dependency: Match
): Match => ({
  ...match,
  startInclusive: match.startInclusive - dependency.startInclusive,
  endExclusive: match.endExclusive - dependency.startInclusive,
});

const fillUnmatched = (matches: Match[]): Match[] => {
  return matches.map((match) => {
    let newChildren = [] as Match[];
    let lastCoveredIndexExclusive = 0;
    const children = fillUnmatched(match.children);
    for (let i = 0; i < children.length; ++i) {
      const child = children[i];
      if (child.startInclusive > lastCoveredIndexExclusive) {
        newChildren = [
          ...newChildren,
          {
            startInclusive: lastCoveredIndexExclusive,
            endExclusive: child.startInclusive,
            id: uuidv4(),
            matchedText: match.matchedText.slice(
              lastCoveredIndexExclusive,
              child.startInclusive
            ),
            matchAfter: [match.id],
            children: [],
          },
          child,
        ];
      }
      lastCoveredIndexExclusive = child.endExclusive;
    }
    if (children.length > 0) {
      const lastChild = children[children.length - 1];
      if (lastChild.endExclusive < match.matchedText.length) {
        newChildren = [
          ...newChildren,
          {
            startInclusive: lastChild.endExclusive,
            endExclusive: match.matchedText.length,
            id: uuidv4(),
            matchedText: match.matchedText.slice(
              lastChild.endExclusive,
              match.matchedText.length
            ),
            matchAfter: [match.id],
            children: [],
          },
        ];
      }
    }
    return { ...match, children: newChildren };
  });
};

export const decompose = (
  s: string,
  matchers: Matcher[],
  wrapInMatch?: boolean,
  fillUnmatchedText?: boolean
) => {
  let allMatches = (
    wrapInMatch
      ? [
          {
            startInclusive: 0,
            endExclusive: s.length,
            matchedText: s,
            id: uuidv4(),
            matchAfter: [],
            children: [],
          },
        ]
      : []
  ) as Match[];
  matchers.forEach((matcher) => {
    allMatches = [...allMatches, ...getAllMatches(s, matcher)];
  });
  const matchesWithDependencies = Object.fromEntries(
    allMatches.map((match) => [match.id, updateDependents(match, allMatches)])
  );
  // This array will be modified (add nested Matches and remove dependents from top level)
  let finalMatches = Object.values(
    cleanUpDependencies(matchesWithDependencies)
  );
  for (let i = 0; i < finalMatches.length; i++) {
    const match = finalMatches[i];
    const dependency = findMatchInNestedStructure(
      match.matchAfter[0],
      finalMatches
    );
    if (dependency) {
      dependency.children = [...dependency.children, match];
    }
  }
  const topLevelMatches = recursivelyClean(
    finalMatches.filter((match) => match.matchAfter.length === 0)
  );
  return fillUnmatchedText ? fillUnmatched(topLevelMatches) : topLevelMatches;
};
