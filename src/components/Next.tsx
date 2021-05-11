import React, { FC, useContext } from "react";
import { Button, ButtonProps } from "@chakra-ui/react";

// lib
import { PaginatorContext } from "../lib/providers/PaginatorProvider";

export const Next: FC<ButtonProps> = ({ children, ...buttonProps }) => {
  // react hooks
  const { actions, state } = useContext(PaginatorContext);

  // constants
  const { changePage } = actions;
  const { currentPage, pagesQuantity, isDisabled } = state;
  const isLast = pagesQuantity ? currentPage > pagesQuantity - 1 : true;

  // handlers
  const handleNextClick = () => {
    if (!isLast) changePage(currentPage + 1);
  };

  return (
    <Button
      aria-label="Next page"
      isDisabled={isLast || isDisabled}
      onClick={handleNextClick}
      pointerEvents={isDisabled ? "none" : "auto"}
      {...(isLast || isDisabled ? { "aria-disabled": true } : {})}
      {...buttonProps}
    >
      {children}
    </Button>
  );
};
