import React, {
  FC,
  useState,
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import { ButtonProps } from "@chakra-ui/react";

export type PaginatorContextValues = {
  state: {
    currentPage: number;
    pagesQuantity: number;
    outerLimit: number;
    activeStyles: ButtonProps;
    normalStyles: ButtonProps;
    innerLimit: number;
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
    activeStyles: {},
    normalStyles: {},
    innerLimit: 0,
    outerLimit: 0,
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

type PaginatorProviderProps = {
  pagesQuantity: number;
  normalStyles?: ButtonProps;
  activeStyles?: ButtonProps;
  innerLimit?: number;
  outerLimit?: number;
  onPageChange: (page: number) => void;
  isDisabled: boolean;
};

export const PaginatorProvider: FC<PaginatorProviderProps> = ({
  children,
  pagesQuantity: pagesQuantityProp,
  innerLimit: innerLimitProp,
  outerLimit: outerLimitProp,
  normalStyles: normalStylesProp,
  activeStyles: activeStylesProp,
  onPageChange,
  isDisabled: isDisabledProp,
}) => {
  // states
  const [innerLimit, setInnerLimit] = useState<number>(0);
  const [normalStyles, setNormalStyles] = useState<ButtonProps>({});
  const [activeStyles, setActiveStyles] = useState<ButtonProps>({});
  const [outerLimit, setOuterLimit] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pagesQuantity, setPagesQuantity] = useState<number>(0);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  // effects
  useEffect(() => {
    setIsDisabled(isDisabledProp);
  }, [isDisabledProp]);

  useEffect(() => {
    setPagesQuantity(pagesQuantityProp);
  }, [pagesQuantityProp]);

  useEffect(() => {
    if (innerLimitProp) {
      setInnerLimit(innerLimitProp);
    }
  }, [innerLimitProp]);

  useEffect(() => {
    if (outerLimitProp) {
      setOuterLimit(outerLimitProp);
    }
  }, [outerLimitProp]);

  useEffect(() => {
    if (normalStylesProp) {
      setNormalStyles(normalStylesProp);
    }
  }, [normalStylesProp]);

  useEffect(() => {
    if (activeStylesProp) {
      setActiveStyles(activeStylesProp);
    }
  }, [activeStylesProp]);

  // handlers
  const changePage = (page: number) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  const state = {
    currentPage,
    pagesQuantity,
    normalStyles,
    activeStyles,
    isDisabled,
    innerLimit,
    outerLimit,
  };

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
