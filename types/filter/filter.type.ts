export type ICategory = "action" | "drama" | "sci-fi" | "comedy";
export type IRatingSort = "lowest" | "highest";

export interface IFilterType {
  category?: string;
  ratingSort?: string;
}

export interface IFilterItem {
  label: string;
  value: ICategory | IRatingSort;
}
