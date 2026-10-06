import 'cypress-axe';

describe('Accessibility Tests', function () {
  beforeEach(function () {
    cy.visitHomePage();
    cy.injectAxe();
  });

  it('[WEB] should not have critical accessibility violations on the home page', function () {
    // Only critical violations fail the test. Add more impacts, e.g. 'serious', to be stricter.
    cy.checkA11y(undefined, { includedImpacts: ['critical'] });
  });
});
