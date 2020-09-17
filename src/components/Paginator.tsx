import React, { FC } from "react";
import { Flex, FlexProps } from "@chakra-ui/core";

// lib
import { PaginatorProvider } from "lib/providers/PaginatorProvider";

type Props = {
  pagesQuantity: number;
  onPageChange: (page: number) => void;
};

const Paginator: FC<Props & FlexProps> = ({
  children,
  pagesQuantity,
  onPageChange,
  ...flexProps
}) => (
  <PaginatorProvider onPageChange={onPageChange} pagesQuantity={pagesQuantity}>
    <Flex {...flexProps}>{children}</Flex>
  </PaginatorProvider>
);

export default Paginator;
