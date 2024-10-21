export const years = Array.from(
  { length: new Date().getFullYear() - 2015 + 1 },
  (_, index) => ({
    value: (new Date().getFullYear() - index).toString(),
    label: (new Date().getFullYear() - index).toString(),
  })
);
