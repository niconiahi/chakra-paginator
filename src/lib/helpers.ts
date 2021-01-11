type Arguments = {
  pagesQuantity: number;
  innerLimit: number;
  outerLimit: number;
  currentPage: number;
};

export const generatePages = ({
  pagesQuantity,
  currentPage,
  innerLimit,
  outerLimit,
}: Arguments): number[] => {
  const allPages = [...Array(pagesQuantity).keys()].map((page) => page + 1);

  const innerPages = allPages.slice(
    currentPage - 1 - innerLimit,
    currentPage + innerLimit
  );
  const startingPages = allPages.slice(0, outerLimit).concat(0);
  const endingPages = allPages
    .slice(1)
    .slice(-outerLimit)
    .reverse()
    .concat(0)
    .reverse();

  const pages = [...startingPages, ...innerPages, ...endingPages];

  return pages;
};
