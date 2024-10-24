describe("Teste do Header", () => {
  it("deve verificar se o hedear contem os elementos principais e navegar corretamente", () => {
    cy.visit("http://localhost:5173/");
    cy.get("header").should("be.visible");

    cy.get("header").within(() => {
      cy.get(".logo").should("be.visible");
      cy.get(".logo").contains("Geracao Bet Store");
      cy.get(".logo").should("have.attr", "href", "/");
    });

    cy.get('header').within(() => {
      cy.get('.favoritos').should('be.visible');
      cy.get('.favoritos').contains('Favoritos');
      cy.get('.favoritos').should('have.attr', 'href', '/favoritos')
    })

    
  });
});
