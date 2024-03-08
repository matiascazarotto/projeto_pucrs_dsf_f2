describe('Exclusão de Carros Editados', () => {
  it('Deve excluir todos os carros editados', () => {
    cy.visit('http://localhost:3000/CarsList');
    cy.get('[data-testid="car"]').each(($car) => {
      const carTitle = $car.find('h6').text();
      if (carTitle.includes('[EDITADO]')) {
        $car.find('button').click();
      }
    });
    cy.wait(1000);
    cy.log('Verificando se os carros editados foram excluídos...');
    cy.get('[data-testid="car"]')
      .each(($car) => {
        const carTitle = $car.find('h6').text();
        expect(carTitle.includes('[EDITADO]')).to.be.false;
      });
  });
});
