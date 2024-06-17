import { IFilterItem } from "@/types";

export const paths = {
    home: "/",
    movies: "movies",
};

export const movieGenres: IFilterItem[] = [
    { label: "درام", value: "drama" },
    { label: "کمدی", value: "comedy" },
    { label: "علمی تخیلی", value: "sci-fi" },
    { label: "اکشن", value: "action" },
]

export const movieRates: IFilterItem[] = [
    { label: "بالاترین امتیاز", value: "highest" },
    { label: "پایین ترین امتیاز", value: "lowest" },
];