import React from "react";
import { Flex, FlexProps, forwardRef } from "@chakra-ui/core";

const PageGroup = forwardRef<FlexProps, "ol">(
  ({ children, ...flexProps }, ref) => {
    console.log("flexProps", flexProps);
    return (
      <Flex ref={ref} as="ol" {...flexProps}>
        {children}
      </Flex>
    );
  }
);

export default PageGroup;
