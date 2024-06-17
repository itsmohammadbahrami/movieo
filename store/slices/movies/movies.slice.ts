import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { fetchMovies } from "@/store";
import { MoviesState, Movie as MoviesType } from "@/types";

const initialState: MoviesState = {
  movies: [],
  filter: "",
  sort: "",
  status: "idle",
  error: null,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setFilter(state, action: PayloadAction<string>) {
      state.filter = action.payload;
    },
    setSort(state, action: PayloadAction<string>) {
      state.sort = action.payload;
    },
    clearFilter(state) {
      state.filter = "";
    },
    clearSort(state) {
      state.sort = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchMovies.fulfilled,
        (state, action: PayloadAction<MoviesType[]>) => {
          state.status = "succeeded";
          state.movies = action.payload;
        }
      )
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch movies";
      });
  },
});

export const { setFilter, setSort, clearFilter, clearSort } =
  moviesSlice.actions;

export default moviesSlice.reducer;
