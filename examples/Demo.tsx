import React, { FC, useState } from "react";
import { ButtonProps, Button, Flex } from "@chakra-ui/react";

// components
import { Paginator } from "../src/components/Paginator";
import { Previous } from "../src/components/Previous";
import { Next } from "../src/components/Next";
import { PageGroup } from "../src/components/PageGroup";

const Demo: FC = () => {
  const [isPaginatorDisabled, setIsPaginatorDisabled] = useState<boolean>(
    false
  );

  // Calculated or obtained from Backend
  const pagesQuantity = 20;

  // styles
  const normalStyles = {
    color: "green.300",
    bg: "red.300",
  };

  const activeStyles: ButtonProps = {
    color: "red.300",
    bg: "green.300",
  };

  // handlers
  const handlePageChange = (currentPage: number) => {
    // Request new data using the page number
    console.log(currentPage);
  };

  const handleDisableClick = () =>
    setIsPaginatorDisabled((oldState) => !oldState);

  return (
    <Flex p={4}>
      <Paginator
        activeStyles={activeStyles}
        innerLimit={2}
        isDisabled={isPaginatorDisabled}
        normalStyles={normalStyles}
        onPageChange={handlePageChange}
        outerLimit={2}
        pagesQuantity={pagesQuantity}
      >
        <Previous>
          Previous
          {/* Or an icon from `react-icons` library */}
        </Previous>
        <PageGroup />
        <Next>
          Next
          {/* Or an icon from `react-icons` library */}
        </Next>
      </Paginator>
      <Button ml={4} onClick={handleDisableClick}>
        Disable ON / OFF
      </Button>
    </Flex>
  );
};

export default Demo;
