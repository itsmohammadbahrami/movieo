import { IMovie } from "@/types";
import { MovieImage } from "./movie-image";
import { MovieDetails } from "./movie-details";

type Props = {
  movie: IMovie;
  testId?: string;
};

const Movie: React.FC<Props> = ({ movie, testId }) => {
  return (
    <div
      className="p-2 flex flex-col w-full max-w-[18.75rem]"
      data-testid={testId}
    >
      <MovieImage movie={movie} />
      <MovieDetails movie={movie} />
    </div>
  );
};

export default Movie;
