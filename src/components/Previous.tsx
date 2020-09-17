import React, { FC, useContext } from "react";
import { Button, ButtonProps } from "@chakra-ui/core";

// lib
import { PaginatorContext } from "lib/providers/PaginatorProvider";

const Previous: FC<ButtonProps> = ({ children, ...buttonProps }) => {
  // react hooks
  const { actions, state } = useContext(PaginatorContext);

  // constants
  const { changePage } = actions;
  const { currentPage } = state;
  const isFirst = currentPage === 0;

  // handlers
  const handlePreviousClick = () => {
    if (!isFirst) changePage(currentPage - 1);
  };

  return (
    <Button onClick={handlePreviousClick} {...buttonProps} isDisabled={isFirst}>
      {children}
    </Button>
  );
};

export default Previous;
