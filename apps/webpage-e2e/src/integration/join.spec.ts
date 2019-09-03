describe('Join', () => {
  before(() => cy.visit('/join'));

  it('should have correct title', () => {
    cy.get('h1').contains('Join');
  });

  it('should have correct first paragraph', () => {
    cy.get('[data-test="first-paragraph"]').contains(
      'If you would like to join our community, feel free to send us an email:'
    );
  });

  it('should have correct second paragraph', () => {
    cy.get('[data-test="second-paragraph"]').contains(
      "We're happy to meet you on our next meetup!"
    );
  });

  it('should have button', () => {
    cy.get('[data-test="join-button"]').contains('Join our next meetup');
  });
});
