import 'cypress-axe';

// Skipped like the other web specs: the demo site (demo.seleniumeasy.com) no longer resolves.
// Point `webURL` to a live site and remove `.skip` to run it.
describe.skip('Accessibility Tests', function () {
  beforeEach(function () {
    cy.visitHomePage();
    cy.injectAxe();
  });

  it('[WEB] should not have critical accessibility violations on the home page', function () {
    // Only critical violations fail the test. Add more impacts, e.g. 'serious', to be stricter.
    cy.checkA11y(undefined, { includedImpacts: ['critical'] });
  });
});
