import { paths, string, testIds } from "../utils";

describe("Check elements", () => {

  beforeEach(() => {
    cy.visit(paths.home);
  });

  it("Check NavigateToMovies button", () => {
    cy.findByTestId(testIds.home.navigateToMovies);
  });

  it("NavigateToMovies button should have correct href", () => {
    cy.findByTestId(testIds.home.navigateToMovies)
      .should("have.attr", "href")
      .and("include", paths.movies);
  });

});

describe("Functionality", () => {

  beforeEach(() => {
    cy.visit(paths.home);
  });

  it("Should navigate to movies page on click on NavigateToMovies button", () => {
    cy.findByTestId(testIds.home.navigateToMovies).click();
    cy.url().should("include", paths.movies);
  });

});
