# Chakra paginator

## Version

## [![npm version](https://badge.fury.io/js/chakra-paginator.svg)](https://badge.fury.io/js/chakra-paginator)

---

## Installation

### npm

```bash
npm i chakra-paginator
```

### Yarn

```bash
yarn add chakra-paginator
```

---

## Demo

## [Check it out in this Sandbox](https://codesandbox.io/s/chakra-paginator-demo-4n2gd)

---

## Usage

```tsx
import React, { FC, useState } from "react";
import { ButtonProps, Button, Flex, ChakraProvider } from "@chakra-ui/react";
import { Paginator, Previous, Next, PageGroup } from "chakra-paginator";

const Demo: FC = () => {
  // react hooks
  const [isPaginatorDisabled, setIsPaginatorDisabled] = useState<boolean>(
    false
  );

  // constants
  const pagesQuantity: Number = 20; // -> calculated or obtained from Backend
  const outerLimit: Number = 2;
  const innerLimit: Number = 2;

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
  const handlePageChange = (currentPage: number) => {
    // -> request new data using the page number
    console.log(currentPage);
  };

  const handleDisableClick = () =>
    setIsPaginatorDisabled((oldState) => !oldState);

  return (
    <ChakraProvider>
      <Paginator
        isDisabled={isPaginatorDisabled}
        activeStyles={activeStyles}
        innerLimit={innerLimit}
        outerLimit={outerLimit}
        normalStyles={normalStyles}
        separatorStyles={separatorStyles}
        pagesQuantity={pagesQuantity}
        onPageChange={handlePageChange}
      >
        <Flex align="center" justify="space-between" w="full" p={4}>
          <Previous bg="green.300">
            Previous
            {/* Or an icon from `react-icons` */}
          </Previous>
          <PageGroup isInline align="center" />
          <Next bg="green.300">
            Next
            {/* Or an icon from `react-icons` */}
          </Next>
        </Flex>
      </Paginator>
      <Flex w="full" justify="center" align="center">
        <Button ml={4} onClick={handleDisableClick}>
          Disable ON / OFF
        </Button>
      </Flex>
    </ChakraProvider>
  );
};

export default Demo;
```

---

## Components API

### Paginator

| Prop            | Description                                                                                                                                                | Type                          | Default | Required |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- | ------- | -------- |
| pagesQuantity   | The total number of pages, calculated based on Backend data                                                                                                | number                        | 0       | yes      |
| onPageChange    | On change handler which returns the last selected page                                                                                                     | (currentPage: number) => void |         | yes      |
| isDisabled      | Disables all of the pagination components. You can always disable each individual component via the isDisabled prop, as the components render HTML buttons | boolean                       | false   | no       |
| activeStyles    | The styles of the active page button                                                                                                                       | ButtonProps                   | {}      | no       |
| normalStyles    | The styles of the inactive page buttons                                                                                                                    | ButtonProps                   | {}      | no       |
| separatorStyles | The styles of the separator wrapper                                                                                                                        | ButtonProps                   | {}      | no       |
| outerLimit      | The amount of pages to show at the start and at the end                                                                                                    | number                        | 0       | no       |
| innerLimit      | The amount of pages to show from the _currentPage_ backwards and forward                                                                                   | number                        | 0       | no       |

---

### Container

- Container is a _Flex_ component, so any _FlexProps_ are accpeted

---

### PageGroup

- PageGroup is a _Stack_ component, so any _StackProps_ are accepted

---

### Previous

- Previous is a _Button_ component, so any _ButtonProps_ are accepted

---

### Next

- Next is a _Button_ component, so any _ButtonProps_ are accepted
