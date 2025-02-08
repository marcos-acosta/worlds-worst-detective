export const combineClasses = (
  ...classes: (string | null | undefined | boolean)[]
) => classes.filter(Boolean).join(" ");
