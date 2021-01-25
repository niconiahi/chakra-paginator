import React, { useContext } from "react";
import { Button, ButtonProps, forwardRef } from "@chakra-ui/react";

// lib
import { SEPARATORS } from "../lib/constants";
import { PaginatorContext } from "../lib/providers/PaginatorProvider";

// components
import FiChevronLeft from "./FiChevronLeft";
import FiChevronRight from "./FiChevronRight";
import Separator from "./Separator";

export type PageProps = {
  page: number;
};

export const Page = forwardRef<PageProps & ButtonProps, "li">(
  ({ page, ...buttonProps }, ref) => {
    // react hooks
    const { actions, state } = useContext(PaginatorContext);

    // constants
    const { changePage } = actions;
    const {
      currentPage,
      isDisabled,
      activeStyles,
      hoverIconLeft,
      hoverIconRight,
      separatorStyles,
      normalStyles,
      separatorIcon,
    } = state;
    const isCurrent = currentPage === page;
    const isLeftSeparator = page === SEPARATORS.left;
    const isRightSeparator = page === SEPARATORS.right;

    const baseButtonProps: ButtonProps = {
      as: "li",
      minW: "auto",
      px: 1,
      pointerEvents: isDisabled ? "none" : "auto",
      onClick: () => changePage(page),
    };

    if (isLeftSeparator)
      return (
        <Separator
          hoverIcon={hoverIconLeft ?? FiChevronLeft}
          separatorIcon={separatorIcon}
          separatorStyles={separatorStyles}
        />
      );

    if (isRightSeparator)
      return (
        <Separator
          hoverIcon={hoverIconRight ?? FiChevronRight}
          separatorIcon={separatorIcon}
          separatorStyles={separatorStyles}
        />
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
