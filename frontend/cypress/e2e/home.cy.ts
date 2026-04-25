describe("Home Page", () => {
  it("Should be load the portfólio homepage", () => {
    cy.visit("http://localhost:3000");

    cy.contains("QA Engineer & AI-Augmented QA").should("be.visible");
    cy.get('[data-cy="portfolio-title"]').should("be.visible")
    cy.get('[data-cy="project-title"]').should("contain", "TechNova Lab")
  });
});












