import React from "react";
import { Stack, StackProps, forwardRef } from "@chakra-ui/react";

// lib
import { useGeneratePages } from "../lib/hooks/useGeneratePages";

// components
import { Page } from "./Page";

export const PageGroup = forwardRef<StackProps, "ol">(
  ({ ...stackProps }, ref) => {
    // custom hooks
    const { pages } = useGeneratePages();

    return (
      <Stack ref={ref} isInline as="ol" spacing={1} {...stackProps}>
        {pages.map((page, index) => (
          <Page
            key={`paginator_page_${page}_${index}_${page + index}`}
            page={page}
          />
        ))}
      </Stack>
    );
  }
);
