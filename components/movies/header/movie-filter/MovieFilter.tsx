"use client";

import { Suspense } from "react";

import { movieGenres, movieRates, string, testIds } from "@/utils";
import { Loading, Select } from "@/base";
import useFilterMovies from "./useFilterMovies";
import useHomePage from "@/components/home/useHomePage";

const MovieFilter = () => {
  return (
    <div className="flex flex-row justify-center space-x-8 space-x-reverse max-sm:flex-col max-sm:space-x-0">
      <Suspense fallback={<Loading />}>
        <MovieFilterContent />
      </Suspense>
    </div>
  );
};

const MovieFilterContent = () => {
  const { handleGenreFilter, handleRateFilter, newParams } = useFilterMovies();
  const { category, sort } = useHomePage();

  return (
    <>
      <Select
        testId={testIds.movies.genreSelect}
        className="max-sm:w-full mt-3 w-1/3"
        title={string.movies.genre(category)}
        items={movieGenres}
        value={newParams.get("category") ?? undefined}
        handleChange={handleGenreFilter}
        col={2}
      />

      <Select
        testId={testIds.movies.sortSelect}
        className="max-sm:w-full mt-3 w-1/3"
        title={string.movies.rateMovie(sort)}
        items={movieRates}
        col={1}
        value={newParams.get("sort") ?? undefined}
        handleChange={handleRateFilter}
      />
    </>
  );
};

export default MovieFilter;
