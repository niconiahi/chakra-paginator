import React, { FC, useState } from "react";
import { ButtonProps, Button, Flex } from "@chakra-ui/react";

// components
import { Paginator } from "../src/components/Paginator";
import { Previous } from "../src/components/Previous";
import { Page } from "../src/components/Page";
import { Next } from "../src/components/Next";
import { PageGroup } from "../src/components/PageGroup";
import { generatePages } from "../src/lib/helpers";

const Demo: FC = () => {
  const [isPaginatorDisabled, setIsPaginatorDisabled] = useState<boolean>(
    false
  );

  // Calculated or obtained from Backend
  const pagesQuantity = 6;

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
  const handlePageChange = (page: number) => {
    // Request new data using the page number
    console.log(page);
  };

  const handleDisableClick = () =>
    setIsPaginatorDisabled((oldState) => !oldState);

  return (
    <Flex p={4}>
      <Paginator
        isDisabled={isPaginatorDisabled}
        onPageChange={handlePageChange}
        pagesQuantity={5}
      >
        <Previous>
          Previous
          {/* Or an icon from `react-icons` */}
        </Previous>
        <PageGroup>
          {generatePages(pagesQuantity)?.map((page: number) => (
            <Page
              key={`paginator_page_${page}`}
              activeStyles={activeStyles}
              normalStyles={normalStyles}
              page={page}
            />
          ))}
        </PageGroup>
        <Next>
          Next
          {/* Or an icon from `react-icons` */}
        </Next>
      </Paginator>
      <Button ml={4} onClick={handleDisableClick}>
        Disable ON / OFF
      </Button>
    </Flex>
  );
};

export default Demo;
