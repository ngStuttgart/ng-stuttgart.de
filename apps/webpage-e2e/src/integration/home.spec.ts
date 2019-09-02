import { getGreeting } from '../support/app.po';

describe('Home', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    cy.get('h1').contains('ngStuttgart');
    // getGreeting().contains('Welcome to webpage!');
  });
});
