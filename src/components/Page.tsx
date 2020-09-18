import React, { useContext } from "react";
import { Button, ButtonProps, forwardRef } from "@chakra-ui/core";

// lib
import { PaginatorContext } from "lib/providers/PaginatorProvider";

type Props = {
  page: number;
  normalStyles: ButtonProps;
  activeStyles: ButtonProps;
};

// const Page: FC<Props & ButtonProps> = ({
const Page = forwardRef<Props & ButtonProps, "li">(
  ({ page, normalStyles, activeStyles, ...buttonProps }, ref) => {
    // react hooks
    const { actions, state } = useContext(PaginatorContext);

    // constants
    const { changePage } = actions;
    const { currentPage, isDisabled } = state;
    const isCurrent = currentPage === page;
    const pageLabel = page + 1;

    return (
      <>
        {isCurrent ? (
          <Button
            ref={ref}
            aria-current={true}
            aria-label={`Current page, page ${page}`}
            as="li"
            minW="auto"
            onClick={() => changePage(page)}
            pointerEvents={isDisabled ? "none" : "auto"}
            px={1}
            {...(isDisabled ? { "aria-disabled": true } : {})}
            {...buttonProps}
            {...activeStyles}
          >
            {pageLabel}
          </Button>
        ) : (
          <Button
            ref={ref}
            aria-label={`Go to page ${page}`}
            as="li"
            minW="auto"
            onClick={() => changePage(page)}
            pointerEvents={isDisabled ? "none" : "auto"}
            px={1}
            {...(isDisabled ? { "aria-disabled": true } : {})}
            {...buttonProps}
            {...normalStyles}
          >
            {pageLabel}
          </Button>
        )}
      </>
    );
  }
);

export default Page;
