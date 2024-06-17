import { FC } from "react";

import { IMovie } from "@/types";
import { HoverableImage } from "./HoverableImage";
import { MovieDetails } from "./MovieDetails";

type Props = {
  movie: IMovie;
  testId?: string;
};

const MovieItem: FC<Props> = ({ movie, testId }) => {
  return (
    <div
      className="p-2 flex flex-col w-full max-w-[18.75rem]"
      data-testid={testId}
    >
      <HoverableImage movie={movie} />
      <MovieDetails movie={movie} />
    </div>
  );
};

export default MovieItem;
