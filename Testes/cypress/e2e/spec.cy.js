describe('dar paly em um video no youtube', () => {
  it('Buscar e acessar video relacionado a tecnologia cypress', () => {
    cy.visit('http://www.youtube.com');
    cy.get('input#search').type('cypress');
    cy.get('button#search-icon-legacy').click();
    cy.get('#video-title').first().click();
  })
})