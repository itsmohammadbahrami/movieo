import { IMovie } from "@/types";
import { string } from "@/utils";

type MovieDetailsProps = {
  movie: IMovie;
};

const MovieDetails: React.FC<MovieDetailsProps> = ({ movie }) => (
  <div className="flex flex-row justify-between items-center mt-1">
    <div className="text-xs w-1/2 text-gray-200 truncate">
      {movie.movie_title}
    </div>
    <div className="text-xs font-normal bg-[#303030] rounded-2xl px-1">
      {string.movies.rate} {movie.rate_avrage}
    </div>
  </div>
);

export default MovieDetails;
