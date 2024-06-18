export const testIds = {
  home: {
    container: "home-container",
    navigateToMovies: "home-navigate-to-movies",
  },
  movies: {
    backToHome: "movies-back-to-home",
    list: "movies-list",
    item: "movies-item",
    genreSelect: "movies-genre-select",
    sortSelect: "movies-sort-select",
    header: "movies-header",
    genreSelectItem: "movies-genre-select-item",
    sortSelectItem: " movies-sort-select-item",
    filterButton: (buttonName: string) => `movies-${buttonName}-button`,
    filterDropdown: (dropdownName: string) => `movies-${dropdownName}-dropdown`,
    movieGenres: (movieId: string) => `movies-genres-${movieId}`,
  },
};
