export function split<T>(
  array: T[],
  splitPredicate: (t: T) => boolean
): [T[][], T[]] {
  let rest = [] as T[][];
  let delimiters = [] as T[];
  let currentList = [] as T[];
  for (const t of array) {
    if (splitPredicate(t)) {
      rest = [...rest, currentList];
      delimiters = [...delimiters, t];
      currentList = [];
    } else {
      currentList = [...currentList, t];
    }
  }
  rest = [...rest, currentList];
  return [rest, delimiters];
}

export const combineClassnames = (
  ...classnames: (string | boolean | undefined | null)[]
) => classnames.filter(Boolean).join(" ");

export const objectsEqual = (obj1: object, obj2: object) =>
  Object.keys(obj1).length === Object.keys(obj2).length &&
  Object.keys(obj1).every(
    (key) => obj1[key as keyof typeof obj1] === obj2[key as keyof typeof obj2]
  );
