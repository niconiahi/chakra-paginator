import React from "react";
import { ButtonProps, Flex, FlexProps, forwardRef } from "@chakra-ui/react";

// lib
import { PaginatorProvider } from "../lib/providers/PaginatorProvider";
import { IconType } from "../lib/types";
import { INITIAL_VALUES } from "../lib/constants";

export type PaginatorProps = {
  pagesQuantity: number;
  onPageChange: (page: number) => void;
  normalStyles?: ButtonProps;
  activeStyles?: ButtonProps;
  separatorStyles?: FlexProps;
  innerLimit?: number;
  outerLimit?: number;
  separatorIcon?: IconType;
  hoverIconRight?: IconType;
  hoverIconLeft?: IconType;
  isDisabled?: boolean;
};

export const Paginator = forwardRef<PaginatorProps & FlexProps, "nav">(
  (
    {
      children,
      pagesQuantity = INITIAL_VALUES.pagesQuantity,
      normalStyles = INITIAL_VALUES.normalStyles,
      activeStyles = INITIAL_VALUES.activeStyles,
      separatorStyles = INITIAL_VALUES.separatorStyles,
      isDisabled = INITIAL_VALUES.isDisabled,
      innerLimit = INITIAL_VALUES.innerLimit,
      separatorIcon = INITIAL_VALUES.separatorIcon,
      outerLimit = INITIAL_VALUES.outerLimit,
      hoverIconLeft = INITIAL_VALUES.hoverIconLeft,
      hoverIconRight = INITIAL_VALUES.hoverIconRight,
      onPageChange,
      ...flexProps
    },
    ref
  ) => (
    <PaginatorProvider
      activeStyles={activeStyles}
      hoverIconLeft={hoverIconLeft}
      hoverIconRight={hoverIconRight}
      innerLimit={innerLimit}
      isDisabled={isDisabled}
      normalStyles={normalStyles}
      onPageChange={onPageChange}
      outerLimit={outerLimit}
      pagesQuantity={pagesQuantity}
      separatorIcon={separatorIcon}
      separatorStyles={separatorStyles}
    >
      <Flex
        ref={ref}
        aria-label="pagination navigation"
        as="nav"
        {...flexProps}
      >
        {children}
      </Flex>
    </PaginatorProvider>
  )
);
