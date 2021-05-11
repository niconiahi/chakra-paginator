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
    offset, // you may not need this one, of course, but it's available for you
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

---

## Components API

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

---

### Container

- Container is a _Flex_ component, so any _FlexProps_ are accepted

---

### PageGroup

- PageGroup is a _Stack_ component, so any _StackProps_ are accepted

---

### Previous

- Previous is a _Button_ component, so any _ButtonProps_ are accepted

---

### Next

- Next is a _Button_ component, so any _ButtonProps_ are accepted
