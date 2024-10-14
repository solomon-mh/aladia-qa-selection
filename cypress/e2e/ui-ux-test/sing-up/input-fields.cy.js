/* ==== Test Created with Cypress Studio ==== */
it('input-fields-test', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('http://localhost:3000');
  /* ==== End Cypress Studio ==== */
  /* ==== Generated with Cypress Studio ==== */
  cy.get('.group > .flex-1').click();
  cy.get('.group > .flex-1').should('be.visible');
  cy.get('.fa-solid').should('be.visible');
  cy.get('.text-slate-100').should('be.visible');
  cy.get('.text-slate-100').should('be.enabled');
  cy.get('.text-slate-100').should('have.text', 'Enter');
  cy.get('.group > .flex-1').click();
  cy.get('.group > .flex-1').should('have.attr', 'placeholder', 'Enter Your Address');
  cy.get('.group > .flex-1').click();
  cy.get('.group > .flex-1').should('be.enabled');
  cy.get('.fa-solid').should('be.visible');
  /* ==== End Cypress Studio ==== */
});