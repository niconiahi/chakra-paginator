import React, { FC } from "react";
import { Stack, StackProps } from "@chakra-ui/react";

// lib
import { useGeneratePages } from "../lib/hooks/useGeneratePages";

// components
import { Page } from "./Page";

type PageGroupProps = StackProps;

export const PageGroup: FC<PageGroupProps> = ({ ...stackProps }) => {
  // custom hooks
  const { pages } = useGeneratePages();

  return (
    <Stack isInline as="ol" spacing={1} {...stackProps}>
      {pages.map((page, index) => (
        <Page key={`paginator_page_${page}_${index}`} page={page} />
      ))}
    </Stack>
  );
};
