import { useEffect } from "react";

import { useAppDispatch, useAppSelector, RootState, fetchMovies, selectFilteredAndSortedMovies } from "@/store";

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
