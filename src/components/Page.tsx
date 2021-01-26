import React, { useMemo, useContext, FC } from "react";
import { Button, ButtonProps } from "@chakra-ui/react";

// lib
import { SEPARATORS } from "../lib/constants";
import { PaginatorContext } from "../lib/providers/PaginatorProvider";

// components
import FiChevronLeft from "./FiChevronLeft";
import FiChevronRight from "./FiChevronRight";
import { Separator } from "./Separator";

export type PageProps = {
  page: number;
};

export const Page: FC<PageProps & ButtonProps> = ({ page, ...buttonProps }) => {
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
  const pageLabel = isCurrent
    ? `Current page, page ${page}`
    : `Go to page ${page}`;

  const baseButtonProps: ButtonProps = useMemo(
    () => ({
      as: "li",
      minW: "auto",
      px: 1,
      pointerEvents: isDisabled ? "none" : "auto",
      cursor: isDisabled ? "not-allowed" : "pointer",
      onClick: () => changePage(page),
    }),
    [isDisabled]
  );

  if (isLeftSeparator)
    return (
      <Separator
        hoverIcon={hoverIconLeft ?? FiChevronLeft}
        isDisabled={isDisabled}
        separatorIcon={separatorIcon}
        separatorPosition="left"
        separatorStyles={separatorStyles}
      />
    );

  if (isRightSeparator)
    return (
      <Separator
        hoverIcon={hoverIconRight ?? FiChevronRight}
        isDisabled={isDisabled}
        separatorIcon={separatorIcon}
        separatorPosition="right"
        separatorStyles={separatorStyles}
      />
    );

  return (
    <Button
      aria-label={pageLabel}
      {...(isDisabled ? { "aria-disabled": true } : {})}
      {...(isCurrent ? { "aria-current": true } : {})}
      {...baseButtonProps}
      {...buttonProps}
      {...activeStyles}
    >
      {page}
    </Button>
  );
};
