import React, { useContext } from "react";
import { Button, ButtonProps, forwardRef } from "@chakra-ui/react";

// lib
import { PaginatorContext } from "../lib/providers/PaginatorProvider";

export const Next = forwardRef<ButtonProps, "button">(
  ({ children, ...buttonProps }, ref) => {
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
        ref={ref}
        aria-label="Next page"
        isDisabled={isLast || isDisabled}
        onClick={handleNextClick}
        {...(isLast || isDisabled ? { "aria-disabled": true } : {})}
        {...buttonProps}
      >
        {children}
      </Button>
    );
  }
);
