export const combineClasses = (
  ...classes: (string | null | undefined | boolean)[]
) => classes.filter(Boolean).join(" ");

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
