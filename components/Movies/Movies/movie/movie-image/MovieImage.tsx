import { useState } from "react";

import { ImageFallBack } from "@/base";
import { HoverOverlay } from "./hover-overlay";
import { IMovie } from "@/types";
import classNames from "classnames";

type Props = {
  movie: IMovie;
};

const MovieImage: React.FC<Props> = ({ movie }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <ImageFallBack
        width={300}
        height={400}
        src={movie.pic.movie_img_m}
        fallbackSrc={movie.pic.movie_img_m}
        alt={movie.movie_title}
        className={classNames('rounded-lg transition-all duration-300', {
          "brightness-100 opacity-15": hovered
        })}
      />
      {hovered && <HoverOverlay movie={movie} />}
    </div>
  );
};

export default MovieImage;
