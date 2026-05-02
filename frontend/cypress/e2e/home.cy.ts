describe("Portfolio homepage", () => {
  context("Given the visitor accesses the homepage", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000");
    });

    it("Then the homepage should load successfully", () => {

      cy.contains("QA Engineer & AI-Augmented QA").should("be.visible");
      cy.get('[data-cy="portfolio-title"]').should("be.visible");
    });

    it("Then the featured project should be TechNova Lab", () => {
      cy.get('[data-cy="project-card-technova-lab"]')
        .should("be.visible")
        .within(() => {
          cy.contains("TechNova Lab").should("be.visible");
          cy.contains("Projeto Principal").should("be.visible");
        });
    });

    it("Then the Everest project should have action buttons", () => {
      cy.get('[data-cy="project-card-everest-balnea"]')
        .within(() => {
          cy.contains("Ver projeto").should("be.visible");
          cy.contains("Código").should("be.visible");
        });
    });
  });
});














