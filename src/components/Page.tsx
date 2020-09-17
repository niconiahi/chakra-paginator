import React, { FC, useContext } from "react";
import { Button, ButtonProps } from "@chakra-ui/core";

// lib
import { PaginatorContext } from "lib/providers/PaginatorProvider";

type Props = {
  page: number;
  normalStyles: ButtonProps;
  activeStyles: ButtonProps;
};

const Page: FC<Props & ButtonProps> = ({
  page,
  normalStyles,
  activeStyles,
  ...buttonProps
}) => {
  // react hooks
  const { actions, state } = useContext(PaginatorContext);

  // constants
  const { changePage } = actions;
  const { currentPage } = state;
  const isCurrent = currentPage === page;

  return (
    <>
      {isCurrent ? (
        <Button
          aria-current={true}
          aria-label={`Current page, page ${page}`}
          as="li"
          minW="auto"
          onClick={() => changePage(page)}
          px={1}
          {...buttonProps}
          {...activeStyles}
        >
          {page}
        </Button>
      ) : (
        <Button
          aria-label={`Go to page ${page}`}
          as="li"
          minW="auto"
          onClick={() => changePage(page)}
          px={1}
          {...buttonProps}
          {...normalStyles}
        >
          {page}
        </Button>
      )}
    </>
  );
};

export default Page;
