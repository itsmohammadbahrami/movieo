import { RootState, selectFilteredAndSortedMovies } from "@/store";
import { useAppSelector } from "@/store";

const useHomePage = () => {
  const { filter, sort } = useAppSelector((state: RootState) =>
    selectFilteredAndSortedMovies(state)
  );

  const query: { category?: string; sort?: string } = {};
  if (sort) query.sort = sort;
  if (filter) query.category = filter;

  return query;
};

export default useHomePage;
