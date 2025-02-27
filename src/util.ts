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
  const date = new Date();
  date.setFullYear(year);
  date.setMonth(month - 1);
  date.setDate(day);
  date.setHours(12);
  return date;
};

export const textToSlug = (text: string) => {
  return text
    .replaceAll(/[^a-zA-Z0-9\s\-]/g, "")
    .toLowerCase()
    .replaceAll(/\s/g, "-");
};

export const SITE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000/"
    : "https://worldsworstdetective.com/";
