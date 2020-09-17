import React, { FC } from "react";
import { ButtonProps } from "@chakra-ui/core";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// components
import Paginator from "components/Paginator";
import Previous from "components/Previous";
import Page from "components/Page";
import Next from "components/Next";
import PageGroup from "components/PageGroup";
import { generatePages } from "lib/helpers";

const Demo: FC = () => {
  // styles
  const normalStyles = {
    color: "green.300",
    bg: "red.300",
  };

  const activeStyles: ButtonProps = {
    color: "red.300",
    bg: "green.300",
  };

  // Calculated or obtained from Backend
  const pagesQuantity = 6;

  // handler
  const handlePageChange = (page: number) => {
    console.log(page);
  };

  return (
    <Paginator onPageChange={handlePageChange} pagesQuantity={5}>
      <Previous>
        <FiChevronLeft />
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
        <FiChevronRight />
      </Next>
    </Paginator>
  );
};

export default Demo;
