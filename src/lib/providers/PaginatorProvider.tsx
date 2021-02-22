import React, {
  FC,
  useState,
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
} from "react";
import { ButtonProps } from "@chakra-ui/react";

// lib
import { IconType } from "../types";
import { INITIAL_VALUES } from "../constants";
import { isDecimalNumber } from "../helpers";

export type PaginatorContextValues = {
  state: {
    currentPage: number;
    pagesQuantity: number;
    outerLimit: number;
    activeStyles: ButtonProps;
    hoverIconRight?: IconType;
    hoverIconLeft?: IconType;
    separatorStyles: ButtonProps;
    normalStyles: ButtonProps;
    innerLimit: number;
    separatorIcon?: IconType;
    isDisabled: boolean;
  };
  actions: {
    setCurrentPage: Dispatch<SetStateAction<number>>;
    setIsDisabled: Dispatch<SetStateAction<boolean>>;
    changePage: (page: number) => void;
  };
};

export const PaginatorContext = createContext<PaginatorContextValues>({
  state: {
    currentPage: INITIAL_VALUES.currentPage,
    activeStyles: INITIAL_VALUES.activeStyles,
    normalStyles: INITIAL_VALUES.normalStyles,
    separatorStyles: INITIAL_VALUES.separatorStyles,
    hoverIconRight: INITIAL_VALUES.hoverIconRight,
    hoverIconLeft: INITIAL_VALUES.hoverIconLeft,
    innerLimit: INITIAL_VALUES.innerLimit,
    outerLimit: INITIAL_VALUES.outerLimit,
    pagesQuantity: INITIAL_VALUES.pagesQuantity,
    separatorIcon: INITIAL_VALUES.separatorIcon,
    isDisabled: INITIAL_VALUES.isDisabled,
  },
  actions: {
    setCurrentPage: () => null,
    setIsDisabled: () => null,
    changePage: () => null,
  },
});

type PaginatorProviderProps = {
  pagesQuantity: number;
  normalStyles: ButtonProps;
  activeStyles: ButtonProps;
  hoverIconRight?: IconType;
  separatorStyles: ButtonProps;
  hoverIconLeft?: IconType;
  innerLimit: number;
  currentPage: number;
  outerLimit: number;
  separatorIcon?: IconType;
  onPageChange: (page: number) => void;
  isDisabled: boolean;
};

export const PaginatorProvider: FC<PaginatorProviderProps> = ({
  children,
  pagesQuantity: pagesQuantityProp,
  currentPage: currentPageProp,
  innerLimit: innerLimitProp,
  outerLimit: outerLimitProp,
  separatorStyles: separatorStylesProp,
  normalStyles: normalStylesProp,
  activeStyles: activeStylesProp,
  separatorIcon: separatorIconProp,
  hoverIconRight: hoverIconRightProp,
  hoverIconLeft: hoverIconLeftProp,
  onPageChange,
  isDisabled: isDisabledProp,
}) => {
  // react hooks
  const [currentPage, setCurrentPage] = useState<number>(
    INITIAL_VALUES.currentPage
  );
  const [isDisabled, setIsDisabled] = useState<boolean>(
    INITIAL_VALUES.isDisabled
  );

  const activeStyles = useMemo(() => activeStylesProp, [activeStylesProp]);
  const separatorStyles = useMemo(() => separatorStylesProp, [
    separatorStylesProp,
  ]);
  const innerLimit = useMemo(() => innerLimitProp, [innerLimitProp]);
  const pagesQuantity = useMemo(() => pagesQuantityProp, [pagesQuantityProp]);
  const outerLimit = useMemo(() => outerLimitProp, [outerLimitProp]);
  const normalStyles = useMemo(() => normalStylesProp, [normalStylesProp]);
  const separatorIcon = useMemo(() => separatorIconProp, [separatorIconProp]);
  const hoverIconLeft = useMemo(() => hoverIconLeftProp, [hoverIconLeftProp]);
  const hoverIconRight = useMemo(() => hoverIconRightProp, [
    hoverIconRightProp,
  ]);

  // effects
  useEffect(() => {
    setIsDisabled(isDisabledProp);
  }, [isDisabledProp]);

  useEffect(() => {
    if (isDecimalNumber(currentPageProp)) {
      console.error(
        `Chakra paginator -> passed down currentPage has to be a whole number`
      );

      return;
    }

    if (currentPageProp > pagesQuantity) {
      console.error(
        `Chakra paginator -> passed down currentPage can't be higher than pagesQuantity`
      );

      return;
    }

    if (currentPageProp < 1) {
      console.error(
        `Chakra paginator -> passed down currentPage can't be lower than 1`
      );

      return;
    }

    if (currentPageProp && currentPageProp !== currentPage) {
      setCurrentPage(currentPageProp);
    }
  }, [currentPageProp]);

  // handlers
  const changePage = (page: number) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  const state = {
    hoverIconLeft,
    hoverIconRight,
    currentPage,
    pagesQuantity,
    separatorIcon,
    normalStyles,
    activeStyles,
    isDisabled,
    innerLimit,
    separatorStyles,
    outerLimit,
  };

  const actions = {
    setCurrentPage,
    setIsDisabled,
    changePage,
  };

  return (
    <PaginatorContext.Provider value={{ state, actions }}>
      {children}
    </PaginatorContext.Provider>
  );
};
