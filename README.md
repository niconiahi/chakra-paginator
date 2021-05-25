# Chakra paginator

## Table of Contents

- [Version](#version)
- [Installation](#installation)
- [Demo with all options applied](#demo-with-all-options-applied)
- [Components API](#components-api)
  - [Paginator](#paginator)
  - [usePaginator](#usepaginator)
  - [Container](#container)
  - [PageGroup](#pagegroup)
  - [Previous](#previous)
  - [Next](#next)
- [Usage](#usage)
  - [Minimal](#minimal)
  - [Styling](#styling)
  - [Disabling](#disabling)
  - [Page size](#page-size)
  - [Limits](#limits)
  - [Offset](#offset)
  - [Pages quantity](#pages-quantity)
  - [Full usage example](#full-usage-example)

## Version

## [![npm version](https://badge.fury.io/js/chakra-paginator.svg)](https://badge.fury.io/js/chakra-paginator)

<br />

## Installation

### npm

```bash
npm i chakra-paginator
```

### Yarn

```bash
yarn add chakra-paginator
```

<br />

## Demo with all options applied

## [Check it out in this Sandbox](https://codesandbox.io/s/chakra-paginator-demo-4n2gd)

<br />

## Components API

<br />

### Paginator

| Prop            | Description                                                                                                                                                | Type                       | Default | Required |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ------- | -------- |
| pagesQuantity   | The total number of pages, calculated based on Backend data                                                                                                | number                     | 0       | yes      |
| onPageChange    | On change handler which returns the last selected page                                                                                                     | (nextPage: number) => void |         | yes      |
| isDisabled      | Disables all of the pagination components. You can always disable each individual component via the isDisabled prop, as the components render HTML buttons | boolean                    | false   | no       |
| activeStyles    | The styles of the active page button                                                                                                                       | ButtonProps                | {}      | no       |
| normalStyles    | The styles of the inactive page buttons                                                                                                                    | ButtonProps                | {}      | no       |
| separatorStyles | The styles of the separator wrapper                                                                                                                        | ButtonProps                | {}      | no       |
| outerLimit      | The amount of pages to show at the start and at the end                                                                                                    | number                     | 0       | no       |
| innerLimit      | The amount of pages to show from the _currentPage_ backwards and forward                                                                                   | number                     | 0       | no       |
| currentPage     | Manually set the _currentPage_ of the pagination                                                                                                           | number                     | 1       | no       |

<br />

### usePaginator

<br />

#### Options
| Prop         | Description                                            | Type         | Default | Required |
|--------------|--------------------------------------------------------|--------------|---------|----------|
| total        | The total amount of items obtained from a Backend call | number       | 0       | no       |
| initialState | Initial states for pagination values                   | InitialState |         | yes      |

<br />

#### Returned values
| Prop           | Description                                                                                                                                                  | Type                                | Default | Required |
|----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------|---------|----------|
| offset         | Generic offset value generated if pageSize is provided                                                                                                       | number                              | 0       | no       |
| pagesQuantity  | Automatically calculated based on total and pageSize.  Keep in mind that you can pass this directly to Paginator.  This is a commodity if you know the total | number                              | 0       | no       |
| currentPage    | The current page number                                                                                                                                      | number                              |         | yes      |
| pageSize       | The amount of items per page                                                                                                                                 | number                              | 10      | no       |
| isDisabled     | Disabled or enables all the pagination components                                                                                                            | boolean                             | false   | no       |
| setPageSize    | A setter for the pageSize value                                                                                                                              | Dispatch<SetStateAction <number> >  |         | no       |
| setIsDisabled  | A setter for the isDisabled value                                                                                                                            | Dispatch<SetStateAction <boolean> > |         | no       |
| setCurrentPage | A setter for the currentPage value                                                                                                                           | Dispatch<SetStateAction <number> >  |         | yes      |

<br />

### Container

```
Container is a _Flex_ component, so any _FlexProps_ are accepted
```

<br />

### PageGroup

```
PageGroup is a _Stack_ component, so any _StackProps_ are accepted
```

<br />

### Previous

```
Previous is a _Button_ component, so any _ButtonProps_ are accepted
```

<br />

### Next

```
Next is a _Button_ component, so any _ButtonProps_ are accepted
```

<br />

## Usage

<br />

### Minimal

```
This is the bare minimum set up you need to get it up and working
```

```tsx
import React, { FC, ChangeEvent, useEffect, useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import {
  Paginator,
  Container,
  Previous,
  Next,
  PageGroup,
  usePaginator
} from "chakra-paginator";

const Demo: FC = () => {
  const pagesQuantity = 12;
  const { currentPage, setCurrentPage } = usePaginator({
    initialState: { currentPage: 1 }
  });

  return (
    <ChakraProvider>
      <Paginator
        pagesQuantity={pagesQuantity}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      >
        <Container align="center" justify="space-between" w="full" p={4}>
          <Previous>
            Previous
            {/* Or an icon from `react-icons` */}
          </Previous>
          <PageGroup isInline align="center" />
          <Next>
            Next
            {/* Or an icon from `react-icons` */}
          </Next>
        </Container>
      </Paginator>
    </ChakraProvider>
  );
};

export default Demo;
```

<br />

```diff
+ From here on, the examples are only partial. You can think of them as modules you can add to the previous component
+ Merge them togheter and you would be adding the given functionality
```

<br />

### Styling

```
Add styles to the possible components inside PageGroup

First: the styles for the unselected and selected page buttons
Second: the styles for the separator button
```

```tsx
const normalStyles: ButtonProps = {
  w: 7,
  bg: "red.300"
  fontSize: "sm"
  _hover: {
    bg: "green.300"
  },
};

const activeStyles: ButtonProps = {
  w: 7,
  bg: "green.300"
  fontSize: "sm"
  _hover: {
    bg: "blue.300"
  },
};

const separatorStyles: ButtonProps = {
  w: 7,
  bg: "green.200"
};

<Paginator
  activeStyles={activeStyles}
  normalStyles={normalStyles}
  separatorStyles={separatorStyles}
>
```

<br />

### Disabling

```
It's provided a commodity disable prop to disable/enable all your pagination components at once
```

```tsx
const { isDisabled, setIsDisabled } = usePaginator({
  initialState: { isDisabled: false }
});

const handleDisableClick = () => {
  return setIsDisabled((oldState) => !oldState);
};

<Paginator
  isDisabled={isDisabled}
>
```

<br />

### Page size

```
It's provided a commodity page size setter and getter
```

```tsx
const { pageSize, setPageSize } = usePaginator({
  initialState: { pageSize: 5 }
});

const handlePageSizeChange = (event: ChangeEvent<HTMLSelectElement>) => {
  const pageSize = Number(event.target.value);

  setPageSize(pageSize);
};

<Paginator
  pageSize={pageSize}
>
```

<br />

### Limits

```
You can trim the ammount of pages you show by passing both limits at the same time
You need to pass them both, otherwise no limits will be applied
```

```tsx
const outerLimit = 2;
const innerLimit = 2;

<Paginator
  outerLimit={outerLimit}
  innerLimit={innerLimit}
>
```

<br />

### Offset

```
It's possible that the API for the pagination you are consuming works with a generic offset

```

```
This is calculated with the next formula:

[currentPage * pageSize - pageSize]

currentPage === 1 && pageSize === 5 // offset = 0;
currentPage === 2 && pageSize === 5 // offset = 5;
currentPage === 3 && pageSize === 5 // offset = 10;
```

```tsx
const outerLimit = 2;
const innerLimit = 2;

<Paginator
  outerLimit={outerLimit}
  innerLimit={innerLimit}
>
```

<br />

### Pages quantity

```
Keep in mind that if you know the total amount of items of the requested endpoint, which is not
a strange thing to be returned, you can use that to generate the pages quantity value for you
```

```tsx
const { pagesQuantity } = usePaginator({
  total: 4021,
});

<Paginator
  pagesQuantity={pagesQuantity}
>
```

<br />

### Full usage example

```
In this example you can see all the possible features provided by the library being applied
to show 10 pokemons names, with the ability to play with the page size and disable state
```

```tsx
import React, { FC, ChangeEvent, useEffect, useState } from "react";
import {
  Grid,
  Center,
  Select,
  ButtonProps,
  Text,
  Button,
  ChakraProvider
} from "@chakra-ui/react";
import {
  Paginator,
  Container,
  Previous,
  usePaginator,
  Next,
  PageGroup
} from "chakra-paginator";

const fetchPokemons = (pageSize: number, offset: number) => {
  return fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${pageSize}&offset=${offset}`
  ).then((res) => res.json());
};

const Demo: FC = () => {
  // states
  const [pokemonsTotal, setPokemonsTotal] = useState<number | undefined>(
    undefined
  );
  const [pokemons, setPokemons] = useState<any[]>([]);

  // constants
  const outerLimit = 2;
  const innerLimit = 2;

  const {
    pagesQuantity,
    offset, 
    currentPage,
    setCurrentPage,
    setIsDisabled,
    isDisabled,
    pageSize,
    setPageSize
  } = usePaginator({
    total: pokemonsTotal,
    initialState: {
      pageSize: 5,
      isDisabled: false,
      currentPage: 1
    }
  });

  // effects
  useEffect(() => {
    fetchPokemons(pageSize, offset).then((pokemons) => {
      setPokemonsTotal(pokemons.count);
      setPokemons(pokemons.results);
    });
  }, [currentPage, pageSize, offset]);

  // styles
  const baseStyles: ButtonProps = {
    w: 7,
    fontSize: "sm"
  };

  const normalStyles: ButtonProps = {
    ...baseStyles,
    _hover: {
      bg: "green.300"
    },
    bg: "red.300"
  };

  const activeStyles: ButtonProps = {
    ...baseStyles,
    _hover: {
      bg: "blue.300"
    },
    bg: "green.300"
  };

  const separatorStyles: ButtonProps = {
    w: 7,
    bg: "green.200"
  };

  // handlers
  const handlePageChange = (nextPage: number) => {
    // -> request new data using the page number
    setCurrentPage(nextPage);
    console.log("request new data with ->", nextPage);
  };

  const handlePageSizeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const pageSize = Number(event.target.value);

    setPageSize(pageSize);
  };

  const handleDisableClick = () => {
    return setIsDisabled((oldState) => !oldState);
  };

  return (
    <ChakraProvider>
      <Paginator
        isDisabled={isDisabled}
        activeStyles={activeStyles}
        innerLimit={innerLimit}
        currentPage={currentPage}
        outerLimit={outerLimit}
        normalStyles={normalStyles}
        separatorStyles={separatorStyles}
        pagesQuantity={pagesQuantity}
        onPageChange={handlePageChange}
      >
        <Container align="center" justify="space-between" w="full" p={4}>
          <Previous>
            Previous
            {/* Or an icon from `react-icons` */}
          </Previous>
          <PageGroup isInline align="center" />
          <Next>
            Next
            {/* Or an icon from `react-icons` */}
          </Next>
        </Container>
      </Paginator>
      <Center w="full">
        <Button onClick={handleDisableClick}>Disable ON / OFF</Button>
        <Select w={40} ml={3} onChange={handlePageSizeChange}>
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
        </Select>
      </Center>
      <Grid
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={3}
        px={20}
        mt={20}
      >
        {pokemons?.map(({ name }) => (
          <Center p={4} bg="green.100" key={name}>
            <Text>{name}</Text>
          </Center>
        ))}
      </Grid>
    </ChakraProvider>
  );
};

export default Demo;
```