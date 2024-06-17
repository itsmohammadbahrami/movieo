import Link from "next/link";

import { MdArrowBackIos } from "react-icons/md";

import { paths, string, testIds } from "@/utils";
import MovieFilter from './movie-filter';

const Header = () => {
  return (
    <div
      data-testid={testIds.movies.header}
      className="relative w-screen bg-gray-850 bg-opacity-5 px-8 pt-14 pb-8"
    >
      <Link
        data-testid={testIds.movies.backLink}
        className="inline-flex items-center justify-end absolute top-5 left-16"
        href={paths.home}
      >
        {string.movies.back}
        <MdArrowBackIos />
      </Link>
      <MovieFilter />
    </div>
  );
};

export default Header;
