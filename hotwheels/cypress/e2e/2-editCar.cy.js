describe('Edição de Carros', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/CarsList');
  });

  it('Deve editar o primeiro carro cadastrado com o nome Corolla', () => {
    cy.contains('Corolla').click();
    cy.get('input[name="name"]').clear().type('Corolla [EDITADO]');
    cy.get('button').contains('Salvar').click();
    cy.url().should('include', '/CarsList');
    cy.wait(1000);
  });

  it('Deve editar o primeiro carro cadastrado com o nome Civic', () => {
    cy.contains('Civic').click();
    cy.get('input[name="name"]').clear().type('Civic [EDITADO]');
    cy.get('button').contains('Salvar').click();
    cy.url().should('include', '/CarsList'); 
  });
});
