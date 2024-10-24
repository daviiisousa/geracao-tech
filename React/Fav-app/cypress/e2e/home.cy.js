
describe('testar a pagina home', () => {
    it('Deve carregar e exibir os produtos corretamente', () => {
        cy.visit('http://localhost:5173');
        cy.get('.lista-products').should('be.visible');
        cy.get('.lista-products').children().should('have.length', 15)

        cy.get('.lista-products').children().each((product) => {
            cy.wrap(product).within(() => {
                cy.get('img').should('be.visible')
                cy.get('h3').should('be.visible')
                cy.get('span').should('be.visible')
                cy.get('a').contains('Acessar').should('be.visible')

            })
        })
    })
})