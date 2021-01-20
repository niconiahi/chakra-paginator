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

## Demo

[Check it out in this Sandbox](https://codesandbox.io/s/suspicious-matsumoto-4n2gd)

## Usage

```js
import React, { FC, useState } from "react";
import { ButtonProps, Button, Flex } from "@chakra-ui/react";
import { Paginator, Previous, Next, PageGroup } from "chakra-paginator";

const Demo: FC = () => {
  const [isPaginatorDisabled, setIsPaginatorDisabled] =
    useState < boolean > false;

  // Calculated or obtained from Backend
  const pagesQuantity = 20;

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
```

## Components API

### Paginator

| Prop          | Description                                                                                                                                                | Type                          | Default | Required |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- | ------- | -------- |
| pagesQuantity | The total number of pages, calculated based on Backend data                                                                                                | number                        | 0       | yes      |
| onPageChange  | On change handler which returns the last selected page                                                                                                     | (currentPage: number) => void |         | yes      |
| isDisabled    | Disables all of the pagination components. You can always disable each individual component via the isDisabled prop, as the components render HTML buttons | boolean                       | false   | no       |
| activeStyles  | The styles of the active page button                                                                                                                       | ButtonProps                   | {}      | no       |
| normalStyles  | The styles of the inactive page buttons                                                                                                                    | ButtonProps                   | {}      | no       |
| outerLimit    | The amount of pages to show at the start and at the end                                                                                                    | number                        | 0       | no       |
| innerLimit    | The amount of pages to show from the _currentPage_ backwards and forward                                                                                   | number                        | 0       | no       |
