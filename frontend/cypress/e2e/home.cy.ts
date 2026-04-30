describe("Home Page", () => {
  it("Should be load the portfólio homepage", () => {
    cy.visit("http://localhost:3000");

    cy.contains("QA Engineer & AI-Augmented QA").should("be.visible");
    cy.get('[data-cy="portfolio-title"]').should("be.visible")
    cy.get('[data-cy="project-title"]').should("have.length.at.least", 2)

    cy.contains("TechNova Lab").should("be.visible")
    cy.contains("Everest Balnea").should("be.visible")

    cy.contains("Everest Balnea")
      .parent()
      .within(() => {
        cy.contains("Ver projeto").should("be.visible")
        cy.contains("Código").should("be.visible")
      })
  });
});












