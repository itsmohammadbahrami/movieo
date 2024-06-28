"use client";

import Link from "next/link";

import useHomePage from "./useHomePage";
import { paths, string, testIds } from "@/utils";

const NavigateToMovies = () => {
  const query = useHomePage();

  return (
    <Link
      className="bg-yellow-500 text-3xl p-3 rounded-lg"
      href={{ pathname: paths.movies, query }}
      data-testid={testIds.home.navigateToMovies}
    >
      {string.home.moviesLink}
    </Link>
  );
};

export default NavigateToMovies;
