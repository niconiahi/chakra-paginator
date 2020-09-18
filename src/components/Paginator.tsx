import React, { FC } from "react";
import { Flex, FlexProps, forwardRef } from "@chakra-ui/core";

// lib
import { PaginatorProvider } from "lib/providers/PaginatorProvider";

type Props = {
  pagesQuantity: number;
  onPageChange: (page: number) => void;
  isDisabled: boolean;
};

const Paginator = forwardRef<Props & FlexProps, "nav">(
  (
    { children, pagesQuantity, isDisabled, onPageChange, ...flexProps },
    ref
  ) => (
    <PaginatorProvider
      isDisabled={isDisabled}
      onPageChange={onPageChange}
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

export default Paginator;
