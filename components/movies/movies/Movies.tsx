"use client";

import { string, testIds } from "@/utils";
import { Skeleton } from "@/base";
import useMovies from "./useMovies";
import Movie from "./movie";

const Movies = () => {
  const { filteredMovies, status } = useMovies();

  if (status === "loading" || status === "idle")
    return <MoviesSkeleton />

  return (
    <div className="p-6">

      <span className="pr-2 text-xl max-sm:text-lg">{string.movies.title}</span>

      <div
        data-testid={testIds.movies.list}
        className="grid place-items-center max-sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 pt-4"
      >
        {filteredMovies.map((movie, index) => (
          <Movie
            testId={`${testIds.movies.item}-${index}`}
            movie={movie}
            key={movie.id}
          />
        ))}
      </div>

    </div>
  );
};

const MoviesSkeleton = () => (
  <div className="pt-6">
    <span className="pr-2 text-xl max-sm:text-lg ms-6">{string.movies.title}</span>

    <div className="grid grid-cols-1 max-sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 p-8 pt-6">
      {Array(12)
        .fill(undefined)
        .map((_, index) => (
          <Skeleton key={index} height={"h-[20rem]"} />
        ))}

    </div>
  </div>
);

export default Movies;
