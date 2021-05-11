import { Dispatch, useState, useMemo, SetStateAction } from "react";

type InitialState = {
  pageSize: number;
  currentPage: number;
  isDisabled: boolean;
};

type UsePaginator = {
  total?: number;
  initialState: InitialState;
};

export const usePaginator = ({
  total,
  initialState,
}: UsePaginator): {
  offset: number;
  pagesQuantity: number;
  currentPage: number;
  pageSize: number;
  isDisabled: boolean;
  setPageSize: Dispatch<SetStateAction<number>>;
  setIsDisabled: Dispatch<SetStateAction<boolean>>;
  setCurrentPage: Dispatch<SetStateAction<number>>;
} => {
  // states
  const [pageSize, setPageSize] = useState<number>(initialState.pageSize);
  const [currentPage, setCurrentPage] = useState<number>(
    initialState.currentPage
  );
  const [isDisabled, setIsDisabled] = useState<boolean>(
    initialState.isDisabled
  );

  // memos
  const offset = useMemo(() => {
    if (!pageSize) {
      return 0;
    }

    return currentPage * pageSize - pageSize;
  }, [currentPage, pageSize]);

  const pagesQuantity = useMemo(() => {
    if (!total || !pageSize) {
      return 0;
    }

    return Math.ceil(total / pageSize);
  }, [total, pageSize]);

  return {
    offset,
    currentPage,
    pagesQuantity,
    setCurrentPage,
    pageSize,
    setPageSize,
    isDisabled,
    setIsDisabled,
  };
};
