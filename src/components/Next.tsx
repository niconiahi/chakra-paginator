import React, { FC, useContext } from "react";
import { Button, ButtonProps } from "@chakra-ui/core";

// lib
import { PaginatorContext } from "lib/providers/PaginatorProvider";

const Next: FC<ButtonProps> = ({ children, ...buttonProps }) => {
  // react hooks
  const { actions, state } = useContext(PaginatorContext);

  // constants
  const { changePage } = actions;
  const { currentPage, pagesQuantity, isDisabled } = state;
  const isLast = currentPage > pagesQuantity - 1;

  // handlers
  const handleNextClick = () => {
    if (!isLast) changePage(currentPage + 1);
  };

  return (
    <Button
      onClick={handleNextClick}
      {...buttonProps}
      aria-label="Next page"
      isDisabled={isLast || isDisabled}
      {...(isLast || isDisabled ? { "aria-disabled": true } : {})}
    >
      {children}
    </Button>
  );
};

export default Next;
