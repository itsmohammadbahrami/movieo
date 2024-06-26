"use client";

import { useCallback, useEffect, useRef } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import {
  useAppDispatch,
  useAppSelector,
  RootState,
  clearFilter,
  clearSort,
  selectFilteredAndSortedMovies,
  setFilter,
  setSort,
} from "@/store";

const useFilterMovies = () => {
  const firstRender = useRef(true);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const newParams = new URLSearchParams(searchParams.toString());

  const dispatch = useAppDispatch();
  const movies = useAppSelector((state: RootState) =>
    selectFilteredAndSortedMovies(state)
  );

  const handleGenreFilter = useCallback(
    (selectedItems: string) => {
      const currentCategory = newParams.get("category");
      if (currentCategory === selectedItems) {
        newParams.delete("category");
        dispatch(clearFilter());
      } else {
        newParams.set("category", selectedItems);
        dispatch(setFilter(selectedItems));
      }
      router.push(`${pathname}?${newParams.toString()}`);
    },
    [router, newParams] //eslint-disable-line
  );

  const handleRateFilter = useCallback(
    (selectedItems: string) => {
      const currentSort = newParams.get("sort");
      if (currentSort === selectedItems) {
        newParams.delete("sort");
        dispatch(clearSort());
      } else {
        newParams.set("sort", selectedItems);
        dispatch(setSort(selectedItems));
      }
      router.push(`${pathname}?${newParams.toString()}`);
    },
    [router, newParams] //eslint-disable-line
  );

  useEffect(() => {
    if (!firstRender.current || !movies) return;
    if (newParams.has("category")) {
      dispatch(setFilter(newParams.get("category") ?? ""));
    }
    if (newParams.has("sort")) {
      dispatch(setSort(newParams.get("sort") ?? ""));
    }
    firstRender.current = false;
  }, [movies, dispatch]); // eslint-disable-line

  return {
    handleGenreFilter,
    handleRateFilter,
    newParams,
    movies,
  };
};

export default useFilterMovies;
