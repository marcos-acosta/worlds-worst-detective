import { v4 as uuidv4 } from "uuid";

export interface Matcher {
  name: string;
  regex: RegExp;
}

export interface Match {
  matcherName: string;
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
                match.matchAfter.reduce((maxDependents, currentMatch) =>
                  maxDependents.length === 0 ||
                  matches[currentMatch].matchAfter.length >
                    matches[maxDependents].matchAfter.length
                    ? currentMatch
                    : maxDependents
                ),
              ],
      },
    ])
  );
};

const findMatchInNestedStructure = (idToFind: string, matches: Match[]) => {
  for (let match of matches) {
    if (match.id === idToFind) {
      return match;
    }
    if (findMatchInNestedStructure(idToFind, match.children)) {
      return match;
    }
  }
  return undefined;
};

export const decompose = (s: string, matchers: Matcher[]) => {
  let allMatches = [] as Match[];
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
  // Make a copy to iterate over.
  structuredClone(finalMatches).forEach((match) => {
    const dependency = findMatchInNestedStructure(
      match.matchAfter[0],
      finalMatches
    );
    if (dependency) {
      dependency.children = [...dependency.children, match];
      finalMatches = finalMatches.filter((m) => m.id !== match.id);
    }
  });
  return finalMatches;
};
