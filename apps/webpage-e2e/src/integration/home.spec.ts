import { getSideTile } from '../support/app.po';

describe('Home', () => {
  before(() => cy.visit('/'));

  it('should have correct title', () => {
    cy.get('h1').contains('ngStuttgart');
  });

  it('should have correct subtitle', () => {
    cy.get('[data-test="subtitle"]').contains(
      'The meetup for the Angular community in Stuttgart'
    );
  });

  it('should have sidetile with correct texts', () => {
    getSideTile().contains('Next Meetup');
    // TODO when data is mocked out, test for data
    getSideTile().contains(/ @ /);
    getSideTile()
      .find('a')
      .should('text', 'More Info');
  });
});
