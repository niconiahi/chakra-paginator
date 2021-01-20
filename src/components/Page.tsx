import React, { useContext } from "react";
import { Button, Text, Flex, ButtonProps, forwardRef } from "@chakra-ui/react";

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
    const { h, height } = buttonProps;

    const baseButtonProps: ButtonProps = {
      as: "li",
      minW: "auto",
      px: 1,
      pointerEvents: isDisabled ? "none" : "auto",
      onClick: () => changePage(page),
    };

    if (isSeparator)
      return (
        <Flex h={h ?? 10} height={height ?? 10}>
          <Text fontWeight="bold" h="full" verticalAlign="middle">
            ...
          </Text>
        </Flex>
      );

    if (isCurrent)
      return (
        <Button
          ref={ref}
          aria-current={true}
          aria-label={`Current page, page ${page}`}
          {...(isDisabled ? { "aria-disabled": true } : {})}
          {...baseButtonProps}
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
        {...(isDisabled ? { "aria-disabled": true } : {})}
        {...baseButtonProps}
        {...buttonProps}
        {...normalStyles}
      >
        {page}
      </Button>
    );
  }
);
