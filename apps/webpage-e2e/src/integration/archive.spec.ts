describe('Archive', () => {
  before(() => cy.visit('/archive'));

  it('should have at least 10 buttons', () => {
    cy.get('aside button').should('have.length.gte', 10);
  });

  // TODO when data is mocked out, test for data
});
