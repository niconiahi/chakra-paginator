import React, { FC, useContext } from "react";
import { Button, ButtonProps } from "@chakra-ui/core";

// lib
import { PaginatorContext } from "lib/providers/PaginatorProvider";

const Previous: FC<ButtonProps> = ({ children, ...buttonProps }) => {
  // react hooks
  const { actions, state } = useContext(PaginatorContext);

  // constants
  const { changePage } = actions;
  const { currentPage, isDisabled } = state;
  const isFirst = currentPage === 0;

  // handlers
  const handlePreviousClick = () => {
    if (!isFirst) changePage(currentPage - 1);
  };

  return (
    <Button
      onClick={handlePreviousClick}
      {...buttonProps}
      aria-label="Previous page"
      isDisabled={isFirst || isDisabled}
      {...(isFirst || isDisabled ? { "aria-disabled": true } : {})}
    >
      {children}
    </Button>
  );
};

export default Previous;
