import React from "react";
import { Flex, FlexProps, forwardRef } from "@chakra-ui/react";

// lib
import { useGeneratePages } from "../lib/hooks/useGeneratePages";

// components
import { Page } from "./Page";

export const PageGroup = forwardRef<FlexProps, "ol">(
  ({ ...flexProps }, ref) => {
    // custom hooks
    const { pages } = useGeneratePages();

    return (
      <Flex ref={ref} as="ol" {...flexProps}>
        {pages.map((page) => (
          <Page key={`paginator_page_${page}`} page={page} />
        ))}
      </Flex>
    );
  }
);
