describe("HeaderComponent E2E Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("should display a loading skeleton while loading products", () => {
    cy.get(".react-loading-skeleton").should("be.visible");
  });

  it("should change header style on scroll", () => {
    cy.get("header").should("have.class", "bg-transparent");
    cy.scrollTo(0, 100);
    cy.get("header").should("have.class", "bg-white");
  });

  it("should toggle navigation menu on mobile", () => {
    cy.get("[data-testid='navigation']").should(
      "have.class",
      "translate-x-full"
    );
    cy.get("[data-testid='open-button']").click();
    cy.get("[data-testid='navigation']").should("have.class", "translate-x-0");
    cy.get("[data-testid='close-button']").click();
    cy.get("[data-testid='navigation']").should(
      "have.class",
      "translate-x-full"
    );
  });
});
