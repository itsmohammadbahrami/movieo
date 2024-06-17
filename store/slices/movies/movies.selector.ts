import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "@/store";


const selectMovies = (state: RootState) => state.movies.movies;
const selectFilter = (state: RootState) => state.movies.filter;
const selectSort = (state: RootState) => state.movies.sort;

export const selectFilteredAndSortedMovies = createSelector(
    [selectMovies, selectFilter, selectSort],
    (movies, filter, sort) => {

        let filteredMovies = [...movies];

        if (filter)
            filteredMovies = movies.filter((movie) =>
                movie.categories.some((category) => filter === category.title_en)
            )

        if (sort) {
            filteredMovies = filteredMovies
                .slice()
                .sort((a, b) =>
                    sort === "highest"
                        ? parseFloat(b.rate_avrage) - parseFloat(a.rate_avrage)
                        : parseFloat(a.rate_avrage) - parseFloat(b.rate_avrage)
                );
        }

        return { filteredMovies, sort, filter };
    }
);