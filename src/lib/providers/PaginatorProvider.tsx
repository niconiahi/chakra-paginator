import React, {
  FC,
  useState,
  createContext,
  Dispatch,
  SetStateAction,
} from "react";

type PaginatorContextValues = {
  state: {
    currentPage: number;
    pagesQuantity: number;
    isDisabled: boolean;
  };
  actions: {
    setCurrentPage: Dispatch<SetStateAction<number>>;
    setPagesQuantity: Dispatch<SetStateAction<number>>;
    setIsDisabled: Dispatch<SetStateAction<boolean>>;
    changePage: (page: number) => void;
  };
};

export const PaginatorContext = createContext<PaginatorContextValues>({
  state: {
    currentPage: 0,
    pagesQuantity: 0,
    isDisabled: false,
  },
  actions: {
    setCurrentPage: () => null,
    setPagesQuantity: () => null,
    setIsDisabled: () => null,
    changePage: () => null,
  },
});

type Props = {
  pagesQuantity: number;
  onPageChange: (page: number) => void;
};

export const PaginatorProvider: FC<Props> = ({
  children,
  pagesQuantity: pagesQuantityProp,
  onPageChange,
}) => {
  // states
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [pagesQuantity, setPagesQuantity] = useState<number>(pagesQuantityProp);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  // handlers
  const changePage = (page: number) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  const state = { currentPage, pagesQuantity, isDisabled };
  const actions = {
    setCurrentPage,
    setPagesQuantity,
    setIsDisabled,
    changePage,
  };

  return (
    <PaginatorContext.Provider value={{ state, actions }}>
      {children}
    </PaginatorContext.Provider>
  );
};
