import { movieGenres, movieRates } from "./constants";

export const string = {
  home: {
    moviesLink: "تماشای فیلم ها",
  },
  movies: {
    back: "بازگشت",
    genre: (category: string) => `ژانر${category ? ': ' + getCategoryLabel(category) : ''}`,
    rateMovie: (sort: string) => `امتیاز فیلم${sort ? ': ' + getRateLabel(sort) : ''}`,
    rate: "امتیاز:",
    title: "لیست تمامی فیلم و سریال ها",
  },
};

const getCategoryLabel = (category: string) =>
  movieGenres.find(genre => genre.value === category)?.label

const getRateLabel = (sort: string) =>
  movieRates.find(rate => rate.value === sort)?.label
