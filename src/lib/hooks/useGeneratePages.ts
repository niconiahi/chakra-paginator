import { useContext } from "react";
import { generatePages } from "../helpers";

// lib
import { PaginatorContext } from "../providers/PaginatorProvider";

type Values = {
  pages: number[];
};

type Props = {
  pagesQuantity: number;
  innerLimit: number;
  outerLimit: number;
};

export const useGeneratePages = (): Values => {
  // react hooks
  const { state } = useContext(PaginatorContext);

  // constants
  const { currentPage, innerLimit, outerLimit, pagesQuantity } = state;

  const pages = generatePages({
    currentPage,
    innerLimit,
    outerLimit,
    pagesQuantity,
  });

  return {
    pages,
  };
};
