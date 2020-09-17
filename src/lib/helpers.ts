export const generatePages = (pagesQuantity: number): number[] => [
  ...Array(pagesQuantity).keys(),
];
