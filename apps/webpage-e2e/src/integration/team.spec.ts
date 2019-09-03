import {
  badgeCompany,
  badgeName,
  badgeTwitter,
  getBadge
} from '../support/app.po';

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
