/* ==== Test Created with Cypress Studio ==== */
it('form-field-test', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('http://localhost:3000/login');
  /* ==== End Cypress Studio ==== */
  /* ==== Generated with Cypress Studio ==== */
  cy.get(':nth-child(1) > .group > .flex > .fa-solid').click();
  cy.get(':nth-child(1) > .group > .flex > .fa-solid').should('be.visible');
  cy.get(':nth-child(1) > .group > .flex-1').click();
  cy.get(':nth-child(1) > .group > .flex-1').should('have.attr', 'placeholder', 'Name');
  cy.get(':nth-child(2) > .group > .flex-1').click();
  cy.get(':nth-child(2) > .group > .flex-1').should('be.visible');
  cy.get(':nth-child(4) > .group > .flex-1').click();
  cy.get(':nth-child(4) > .group > .flex-1').should('be.enabled');
  cy.get(':nth-child(5) > .group > .flex-1').click();
  cy.get(':nth-child(5) > .group > .flex-1').should('be.enabled');
  cy.get(':nth-child(4) > .group > .flex-1').click();
  cy.get(':nth-child(4) > .group > .flex-1').should('not.be.checked');
  cy.get('.text-slate-100').should('be.visible');
  cy.get('.text-slate-100').should('have.text', 'Enter');
  cy.get('.gradient').should('be.visible');
  /* ==== End Cypress Studio ==== */
});