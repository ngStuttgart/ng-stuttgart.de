import {
  badgeCompany,
  badgeName,
  badgeTwitter,
  getBadge,
  getSideTile
} from '../support/app.po';

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

describe('Team', () => {
  before(() => cy.visit('/team'));

  it('should have five badges', () => {
    getBadge().should('have.length', 5);
  });

  const organisatoren = [
    {
      name: 'Florian Tischler',
      company: 'NemoContra GmbH',
      twitter: '@floriantischler'
    },
    {
      name: 'Marco Hämmerle',
      company: 'NemoContra GmbH',
      twitter: '@marcohaemmerle'
    },
    {
      name: 'Pascal Brewing',
      company: 'Mercedes-Benz.io',
      twitter: '@DocMaboos'
    },
    {
      name: 'Pascal Bayer',
      twitter: '@PascalBayer'
    },
    {
      name: 'Alexander Schuster',
      company: 'Allianz',
      twitter: '@heyitsalex86'
    }
  ];

  organisatoren.forEach((organisator, index) =>
    it(
      'should have correct name, company and twitterhandle for badge ' + index,
      () => {
        getBadge()
          .eq(index)
          .find(badgeName)
          .contains(organisator.name);

        if (organisator.company) {
          getBadge()
            .eq(index)
            .find(badgeCompany)
            .contains(organisator.company);
        }

        if (organisator.twitter) {
          getBadge()
            .eq(index)
            .find(badgeTwitter)
            .contains(organisator.twitter);
        }
      }
    )
  );
});

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

describe('Archive', () => {
  before(() => cy.visit('/archive'));

  it('should have at least 10 buttons', () => {
    cy.get('aside button').should('have.length.gte', 10);
  });

  // TODO when data is mocked out, test for data
});
