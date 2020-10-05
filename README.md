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
const Component = () => {
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

## API

| Prop          | Description                                                                                                                                                  | Type    | Default |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- | ------- |
| currentPage   | The current active page                                                                                                                                      | number  | 0       |
| pagesQuantity | The total number of pages, calculated based on Backend data                                                                                                  | number  | 0       |
| isDisabled    | Disables all of the pagination components. You can always disable each individual component via the _isDisabled_ prop, as the components render HTML buttons | boolean | false   |
