import { useContext, useMemo } from "react";
import { generatePages } from "../helpers";

// lib
import { PaginatorContext } from "../providers/PaginatorProvider";

type Values = {
  pages: number[];
};

export const useGeneratePages = (): Values => {
  // react hooks
  const { actions, state } = useContext(PaginatorContext);

  // constants
  const { currentPage, innerLimit, outerLimit, pagesQuantity } = state;
  const { setCurrentPage, setCanJumpBack, setCanJumpForward } = actions;

  const pages = useMemo(
    () =>
      generatePages({
        currentPage,
        innerLimit,
        outerLimit,
        pagesQuantity,
        setCanJumpBack,
        setCanJumpForward,
        setCurrentPage,
      }),
    [currentPage, innerLimit, outerLimit, pagesQuantity]
  );

  return {
    pages,
  };
};
