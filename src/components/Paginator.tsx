import React, { FC } from "react";
import { Flex, FlexProps } from "@chakra-ui/core";

// lib
import { PaginatorProvider } from "lib/providers/PaginatorProvider";

type Props = {
  pagesQuantity: number;
  onPageChange: (page: number) => void;
  isDisabled: boolean;
};

const Paginator: FC<Props & FlexProps> = ({
  children,
  pagesQuantity,
  isDisabled,
  onPageChange,
  ...flexProps
}) => (
  <PaginatorProvider
    isDisabled={isDisabled}
    onPageChange={onPageChange}
    pagesQuantity={pagesQuantity}
  >
    <Flex {...flexProps} aria-label="pagination navigation" as="nav">
      {children}
    </Flex>
  </PaginatorProvider>
);

export default Paginator;
