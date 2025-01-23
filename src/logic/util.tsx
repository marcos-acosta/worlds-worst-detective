import { Fragment, ReactNode } from "react";

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

export const joinNodes = (sections: ReactNode[], delimiter: ReactNode) => {
  return (
    <>
      {sections.map((section, index) => (
        <Fragment key={index}>
          {!!index && delimiter}
          {section}
        </Fragment>
      ))}
    </>
  );
};

const padWithZeroes = (n: number, digits: number) =>
  `${n}`.padStart(digits, "0");

export const formatDate = (date: Date) =>
  `${date.getFullYear()}-${padWithZeroes(
    date.getMonth() + 1,
    2
  )}-${padWithZeroes(date.getDate(), 2)}`;

export const makeDateLocalTime = (year: number, month: number, day: number) => {
  let date = new Date();
  date.setFullYear(year);
  date.setMonth(month - 1);
  date.setDate(day);
  date.setHours(12);
  return date;
};
