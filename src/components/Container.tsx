import React, { FC } from "react";
import { FlexProps, Flex } from "@chakra-ui/react";

type ContainerProps = FlexProps;

const Container: FC<ContainerProps> = ({ children, ...flexProps }) => (
  <Flex aria-label="pagination navigation" as="nav" {...flexProps}>
    {children}
  </Flex>
);

export default Container;
