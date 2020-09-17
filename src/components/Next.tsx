import React, { FC, useContext } from "react";
import { Button, ButtonProps } from "@chakra-ui/core";

// lib
import { PaginatorContext } from "lib/providers/PaginatorProvider";

const Next: FC<ButtonProps> = ({ children, ...buttonProps }) => {
  // react hooks
  const { actions, state } = useContext(PaginatorContext);

  // constants
  const { changePage } = actions;
  const { currentPage, pagesQuantity } = state;
  const isLast = currentPage > pagesQuantity - 1;

  // handlers
  const handleNextClick = () => {
    if (!isLast) changePage(currentPage + 1);
  };

  return (
    <Button onClick={handleNextClick} {...buttonProps} isDisabled={isLast}>
      {children}
    </Button>
  );
};

export default Next;
