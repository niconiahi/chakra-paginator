# Chakra paginator

## Version

[![npm version](https://badge.fury.io/js/chakra-paginator.svg)](https://badge.fury.io/js/chakra-paginator)

## Installation

### npm

```bash
npm i chakra-paginator
```

### Yarn

```bash
yarn add chakra-paginator
```

## Usage

```js
import { ButtonProps } from "@chakra-ui/react";
import {
  Paginator,
  Previous,
  Page,
  Next,
  PageGroup,
  generatePages,
} from "chakra-paginator";

const Component = () => {
  // Calculated or obtained from Backend
  const pagesQuantity = 6;

  // styles
  const normalStyles: ButtonProps = {
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
  };

  return (
    <Paginator
      isDisabled={isPaginatorDisabled}
      onPageChange={handlePageChange}
      pagesQuantity={pagesQuantity}
    >
      <Previous>
        Previous
        {/* i.e. an icon from `react-icons` */}
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
        {/* i.e. an icon from `react-icons` */}
      </Next>
    </Paginator>
  );
};
```

## Components API

### Paginator

| Prop          | Description                                                                                                                                                | Type                          | Default | Required |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- | ------- | -------- |
| pagesQuantity | The total number of pages, calculated based on Backend data                                                                                                | number                        | 0       | yes      |
| isDisabled    | Disables all of the pagination components. You can always disable each individual component via the isDisabled prop, as the components render HTML buttons | boolean                       | false   | no       |
| onPageChange  | On change handler which returns the last selected page                                                                                                     | (currentPage: number) => void | -       | yes      |

### Page

| Prop         | Description                                                                                                                                                                                                                         | Type        | Default | Required |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ------- | -------- |
| key          | This is not strictly related to the library but never forget to pass it down to the component                                                                                                                                       | string      | -       | yes      |
| activeStyles | The styles of the active page button                                                                                                                                                                                                | ButtonProps | -       | no       |
| normalStyles | The styles of the inactive page buttons                                                                                                                                                                                             | ButtonProps | -       | no       |
| page         | Number used internally which is returned on the <b>onPageChange</b> handler when selecting the page <br> <br> For now use the <b>generatePages</b> helper with which you shouldn't have any problems. This may change in the future | number      | -       | yes      |
