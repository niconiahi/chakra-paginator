import union from "lodash.union";

type Arguments = {
  pagesQuantity: number;
  innerLimit: number;
  outerLimit: number;
  currentPage: number;
};

export const getFirstItem = <T>(array: T[]): T => array[0];
export const getLastItem = <T>(array: T[]): T => array.slice(-1)[0];

export const generatePages = ({
  pagesQuantity,
  currentPage,
  innerLimit,
  outerLimit,
}: Arguments): number[] => {
  const allPages = [...Array(pagesQuantity).keys()].map((page) => page + 1);

  if (!innerLimit || !outerLimit) return allPages;

  const outerLeftPages = allPages.slice(0, outerLimit);
  const outerRightPages = allPages.slice(1).slice(-outerLimit);

  const lastPageOfOuterLeftPages = getLastItem(outerLeftPages);
  const firstPageOfOuterRightPages = getFirstItem(outerRightPages);

  const generateRightInnerPages = () => {
    const rightInnerLastIndex = currentPage + innerLimit;
    const isAfterFirstOuterRightPage =
      rightInnerLastIndex > firstPageOfOuterRightPages;

    return isAfterFirstOuterRightPage
      ? allPages.slice(currentPage + 1, firstPageOfOuterRightPages)
      : allPages.slice(currentPage, rightInnerLastIndex);
  };

  const generateLeftInnerPages = () => {
    const leftInnerFirstIndex = currentPage - innerLimit;
    const isBeforeLastOuterLeftPage =
      leftInnerFirstIndex < lastPageOfOuterLeftPages;

    return isBeforeLastOuterLeftPage
      ? allPages.slice(lastPageOfOuterLeftPages, currentPage - 1)
      : allPages.slice(leftInnerFirstIndex - 1, currentPage - 1);
  };

  const leftInnerPages = generateLeftInnerPages();
  const leftPages = union([...outerLeftPages], [...leftInnerPages]);
  const shouldHaveLeftSeparator =
    getFirstItem(leftInnerPages) > lastPageOfOuterLeftPages + 1;

  const rightInnerPages = generateRightInnerPages();
  const rightPages = union([...rightInnerPages], [...outerRightPages]);
  const shouldHaveRightSeparator =
    getLastItem(rightInnerPages) < firstPageOfOuterRightPages - 1;

  const unduplicatedPages = union(
    [...leftPages],
    [currentPage],
    [...rightPages]
  );

  const addSeparators = (pages: number[]) =>
    pages.reduce((acc: number[], page: number) => {
      const checkPageForSeparator = () => {
        if (page === lastPageOfOuterLeftPages && shouldHaveLeftSeparator) {
          return [lastPageOfOuterLeftPages, 0];
        }
        if (page === firstPageOfOuterRightPages && shouldHaveRightSeparator) {
          return [0, firstPageOfOuterRightPages];
        }

        return [page];
      };

      return [...acc, ...checkPageForSeparator()];
    }, [] as number[]);

  const pages = addSeparators(unduplicatedPages);

  return pages;
};
