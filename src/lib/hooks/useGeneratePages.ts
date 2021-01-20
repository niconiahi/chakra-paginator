import { useContext, useMemo } from "react";
import { generatePages } from "../helpers";

// lib
import { PaginatorContext } from "../providers/PaginatorProvider";

type Values = {
  pages: number[];
};

export const useGeneratePages = (): Values => {
  // react hooks
  const { state } = useContext(PaginatorContext);

  // constants
  const { currentPage, innerLimit, outerLimit, pagesQuantity } = state;

  const pages = useMemo(
    () =>
      generatePages({
        currentPage,
        innerLimit,
        outerLimit,
        pagesQuantity,
      }),
    [currentPage, innerLimit, outerLimit, pagesQuantity]
  );

  return {
    pages,
  };
};
