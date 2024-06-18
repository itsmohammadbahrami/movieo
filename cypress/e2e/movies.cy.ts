import { paths, string, testIds } from "../utils";

describe("Check elements", () => {

  beforeEach(() => {
    cy.visit(paths.movies);
  });

  it("Check back to home link", () => {
    cy.findByTestId(testIds.movies.backToHome).should("exist");
  });

  it("Back to home link should have correct href", () => {
    cy.findByTestId(testIds.movies.backToHome)
      .should("have.attr", "href")
      .and("include", paths.home);
  });

  it("Check movie genres", () => {
    cy.findByTestId(
      testIds.movies.filterButton(testIds.movies.genreSelect)
    );
  });

  it("Check movie sorts", () => {
    cy.findByTestId(
      testIds.movies.filterButton(testIds.movies.sortSelect)
    );
  });

  it("Check movie list", () => {
    cy.findByTestId(testIds.movies.list).should("be.visible");
    cy.findByTestId(testIds.movies.list)
      .children()
      .should("have.length.greaterThan", 0);
  });

});

describe("Functionality", () => {

  beforeEach(() => {
    cy.visit(paths.movies);
  });


  it("Should filter movies by genre", () => {
    cy.findByTestId(
      testIds.movies.filterButton(testIds.movies.genreSelect)
    ).click();

    cy.findByTestId(`${testIds.movies.genreSelect}-item-comedy`).click();

    cy.url().should("include", "category=comedy");

    cy.findByTestId(`${testIds.movies.item}-0`)
      .trigger("mouseover")
      .contains("کمدی");
  });

  it("Should sort movies by highest rating", () => {
    cy.findByTestId(
      testIds.movies.filterButton(testIds.movies.sortSelect)
    ).click();

    cy.findByTestId(`${testIds.movies.sortSelect}-item-highest`).click();

    cy.url().should("include", "sort=highest");
  });

  it("Should display correct query when sort & category combined", () => {
    cy.findByTestId(
      testIds.movies.filterButton(testIds.movies.genreSelect)
    ).click();

    cy.findByTestId(`${testIds.movies.genreSelect}-item-comedy`).click();

    cy.url().should("include", "category=comedy");

    cy.findByTestId(
      testIds.movies.filterButton(testIds.movies.sortSelect)
    ).click();

    cy.findByTestId(`${testIds.movies.sortSelect}-item-lowest`).click();

    cy.url().should("include", "category=comedy&sort=lowest");
  });

  it("Should navigate to home page on click on back to home link", () => {
    cy.findByTestId(testIds.movies.backToHome).click();
    cy.url().should("include", paths.home);
  });

});
