import { useEffect } from "react";

import { RootState, fetchMovies, selectFilteredAndSortedMovies } from "@/redux";
import { useAppDispatch, useAppSelector } from "@/redux";

const useMovies = () => {
  const dispatch = useAppDispatch();
  const { filteredMovies } = useAppSelector((state: RootState) =>
    selectFilteredAndSortedMovies(state)
  );

  const { status } = useAppSelector((state: RootState) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, []); // eslint-disable-line

  return { filteredMovies, status };
};

export default useMovies;
