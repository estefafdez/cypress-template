describe('VisualTesting/GoogleExample', () => {
  it('should check the google page with visual testing', () => {
    cy.visit('https://www.google.com/');

    // snapshot name will be the test title
    //cy.matchImageSnapshot();

    // match element snapshot
    //cy.get('#login').matchImageSnapshot();
  });
});
