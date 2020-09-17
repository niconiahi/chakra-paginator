import React, { FC } from "react";
import { Flex, FlexProps, Box } from "@chakra-ui/core";

const PageGroup: FC<FlexProps> = ({ children, ...flexProps }) => (
  <Box aria-label="pagination navigation" as="nav">
    <Flex {...flexProps} as="ul">
      {children}
    </Flex>
  </Box>
);

export default PageGroup;
