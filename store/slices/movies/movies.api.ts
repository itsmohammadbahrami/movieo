import { createAsyncThunk } from "@reduxjs/toolkit";

import { Movie as MoviesType } from "@/types";

export const fetchMovies = createAsyncThunk<MoviesType[]>(
  "movies/fetchMovies",
  async () => {
    const response = await fetch("data.json");

    const data: { movies: MoviesType[] } = await response?.json();

    return data?.movies;
  }
);
