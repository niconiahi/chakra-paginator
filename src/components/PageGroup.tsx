import React, { FC } from "react";
import { Flex, FlexProps } from "@chakra-ui/core";

const PageGroup: FC<FlexProps> = ({ children, ...flexProps }) => (
  <Flex {...flexProps} as="ol">
    {children}
  </Flex>
);

export default PageGroup;
