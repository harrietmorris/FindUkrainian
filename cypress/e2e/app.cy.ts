describe("Opening the application", () => {
  it("should visit the FindUkranian application", () => {
    cy.visit("http://localhost:5173/");
  });
});

describe("E2E interacting with map", () => {
  it("should select the marker and display the related business detail popup", () => {
    cy.visit("http://localhost:5173/");
    cy.get(
      '[style="margin-left: -12px; margin-top: -41px; width: 25px; height: 41px; transform: translate3d(297px, 230px, 0px); z-index: 230;"]'
    ).click();
    cy.get(".leaflet-popup-content > div").contains("Kyiv Beauty Salon");
  });
});

describe("E2E interacting with category filter", () => {
  it("Pressing the category button should render category title in business list", () => {
    cy.visit("http://localhost:5173/");
    cy.get(".categories > :nth-child(2)").click();
    cy.get(".cat__title").contains("Restaurants");
  });

  it("Pressing the category button should render render business list of related length", () => {
    cy.visit("http://localhost:5173/");
    cy.get(".categories > :nth-child(4)").click();
    cy.get("ul li").should("have.length", 2);
  });
});

describe("E2E interacting with Business Details page", () => {
  it("user returning to Home Page from Details Page", () => {
    cy.visit("http://localhost:5173/");

    cy.get(":nth-child(1) > :nth-child(2) > .cat__item > .cat__text").click();
    cy.get('[data-testid="ArrowOutwardIcon"]').click();
    cy.url().should("include", "id/");

    cy.get(".MuiButton-root").click();
    cy.url().should("not.include", "id/");
  });
});

describe("E2E interacting with search bar", () => {
  it("should search and check the length of the results", () => {
    cy.visit("http://localhost:5173/");
    cy.get("#outlined-adornment-search").type("ky");
    cy.get(".search-list li").should("have.length", 3);
  });

  it("should redirect to details page business result", () => {
    cy.visit("http://localhost:5173/");
    cy.get("#outlined-adornment-search").type("s");
    cy.get(".search-list ").contains("Silpo").click();
    cy.url().should("include", "id/");
    cy.get(".business-detail__title").contains("Silpo");
  });
});
