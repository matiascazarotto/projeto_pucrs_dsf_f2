describe('Cadastro de Carros', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/CarDetail'); 
  });

  it('Deve cadastrar um carro com sucesso', () => {
    cy.get('input[name="name"]').type('Corolla');
    cy.get('input[name="brand"]').type('Toyota');
    cy.get('input[name="color"]').type('Prata');
    cy.get('input[name="year"]').type('2024');
    cy.wait(1000)
    cy.get('button').contains('Salvar').click();

    cy.url().should('include', '/CarsList'); 
  });

  it('Deve cadastrar outro carro com sucesso', () => {
    cy.get('input[name="name"]').type('Civic');
    cy.get('input[name="brand"]').type('Honda');
    cy.get('input[name="color"]').type('Preto');
    cy.get('input[name="year"]').type('2024');
    cy.wait(1000)
    cy.get('button').contains('Salvar').click();

    cy.url().should('include', '/CarsList');
  });
});
