import React, { FC, useState } from "react";
import { ButtonProps, Button, Flex, ChakraProvider } from "@chakra-ui/react";
import { Paginator } from "../src/components/Paginator";
import { Previous } from "../src/components/Previous";
import { Next } from "../src/components/Next";
import { PageGroup } from "../src/components/PageGroup";
import { Container } from "../src/components/Container";

const Demo: FC = () => {
  // react hooks
  const [currentPage, setCurrentPage] = useState<number>(3);
  const [isPaginatorDisabled, setIsPaginatorDisabled] = useState<boolean>(
    false
  );

  // constants
  const pagesQuantity = 20; // -> calculated or obtained from Backend
  const outerLimit = 2;
  const innerLimit = 2;

  // styles
  const baseStyles: ButtonProps = {
    w: 7,
    fontSize: "sm",
  };

  const normalStyles: ButtonProps = {
    ...baseStyles,
    bg: "red.300",
  };

  const activeStyles: ButtonProps = {
    ...baseStyles,
    bg: "green.300",
  };

  const separatorStyles: ButtonProps = {
    w: 7,
    bg: "green.200",
  };

  // handlers
  const handlePageChange = (nextPage: number) => {
    // -> request new data using the page number
    setCurrentPage(nextPage);
    console.log("request new data with ->", nextPage);
  };

  const handleDisableClick = () =>
    setIsPaginatorDisabled((oldState) => !oldState);

  return (
    <ChakraProvider>
      <Paginator
        activeStyles={activeStyles}
        currentPage={currentPage}
        innerLimit={innerLimit}
        isDisabled={isPaginatorDisabled}
        normalStyles={normalStyles}
        onPageChange={handlePageChange}
        outerLimit={outerLimit}
        pagesQuantity={pagesQuantity}
        separatorStyles={separatorStyles}
      >
        <Container align="center" justify="space-between" p={4} w="full">
          <Previous bg="green.300">
            Previous
            {/* Or an icon from `react-icons` */}
          </Previous>
          <PageGroup isInline align="center" />
          <Next bg="green.300">
            Next
            {/* Or an icon from `react-icons` */}
          </Next>
        </Container>
      </Paginator>
      <Flex align="center" justify="center" w="full">
        <Button ml={4} onClick={handleDisableClick}>
          Disable ON / OFF
        </Button>
      </Flex>
    </ChakraProvider>
  );
};

export default Demo;
