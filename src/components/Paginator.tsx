import React from "react";
import { ButtonProps, Flex, FlexProps, forwardRef } from "@chakra-ui/react";

// lib
import { PaginatorProvider } from "../lib/providers/PaginatorProvider";

export type PaginatorProps = {
  pagesQuantity: number;
  onPageChange: (page: number) => void;
  normalStyles: ButtonProps;
  activeStyles: ButtonProps;
  innerLimit: number;
  outerLimit: number;
  isDisabled: boolean;
};

export const Paginator = forwardRef<PaginatorProps & FlexProps, "nav">(
  (
    {
      children,
      pagesQuantity,
      normalStyles,
      activeStyles,
      isDisabled,
      innerLimit,
      outerLimit,
      onPageChange,
      ...flexProps
    },
    ref
  ) => (
    <PaginatorProvider
      activeStyles={activeStyles}
      innerLimit={innerLimit}
      isDisabled={isDisabled}
      normalStyles={normalStyles}
      onPageChange={onPageChange}
      outerLimit={outerLimit}
      pagesQuantity={pagesQuantity}
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
