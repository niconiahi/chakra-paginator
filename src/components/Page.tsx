import React, { useContext } from "react";
import { Button, Flex, Text, ButtonProps, forwardRef } from "@chakra-ui/react";

// lib
import { PaginatorContext } from "../lib/providers/PaginatorProvider";

export type PageProps = {
  page: number;
};

export const Page = forwardRef<PageProps & ButtonProps, "li">(
  ({ page, ...buttonProps }, ref) => {
    // react hooks
    const { actions, state } = useContext(PaginatorContext);

    // constants
    const { changePage } = actions;
    const { currentPage, isDisabled, activeStyles, normalStyles } = state;
    const isCurrent = currentPage === page;
    const isSeparator = page === 0;

    if (isSeparator)
      return (
        <Flex>
          <Text>...</Text>
        </Flex>
      );

    if (isCurrent)
      return (
        <Button
          ref={ref}
          aria-current={true}
          aria-label={`Current page, page ${page}`}
          as="li"
          minW="auto"
          onClick={() => changePage(page)}
          pointerEvents={isDisabled ? "none" : "auto"}
          px={1}
          {...(isDisabled ? { "aria-disabled": true } : {})}
          {...buttonProps}
          {...activeStyles}
        >
          {page}
        </Button>
      );

    return (
      <Button
        ref={ref}
        aria-label={`Go to page ${page}`}
        as="li"
        minW="auto"
        onClick={() => changePage(page)}
        pointerEvents={isDisabled ? "none" : "auto"}
        px={1}
        {...(isDisabled ? { "aria-disabled": true } : {})}
        {...buttonProps}
        {...normalStyles}
      >
        {page}
      </Button>
    );
  }
);
