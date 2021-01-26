import React, { useContext, FC } from "react";
import { Button, ButtonProps } from "@chakra-ui/react";

// lib
import { PaginatorContext } from "../lib/providers/PaginatorProvider";

export const Previous: FC<ButtonProps> = ({ children, ...buttonProps }) => {
  // react hooks
  const { actions, state } = useContext(PaginatorContext);

  // constants
  const { changePage } = actions;
  const { currentPage, isDisabled } = state;
  const isFirst = currentPage === 1;

  // handlers
  const handlePreviousClick = () => {
    if (!isFirst) changePage(currentPage - 1);
  };

  return (
    <Button
      aria-label="Previous page"
      isDisabled={isFirst || isDisabled}
      onClick={handlePreviousClick}
      pointerEvents={isDisabled ? "none" : "auto"}
      {...(isFirst || isDisabled ? { "aria-disabled": true } : {})}
      {...buttonProps}
    >
      {children}
    </Button>
  );
};
