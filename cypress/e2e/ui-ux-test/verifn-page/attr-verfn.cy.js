/* ==== Test Created with Cypress Studio ==== */
it('verfn-page-test', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('http://localhost:3000/login/verification');
  /* ==== End Cypress Studio ==== */
  /* ==== Generated with Cypress Studio ==== */
  cy.get('.w-30').click();
  cy.get('.w-30').should('be.visible');
  cy.get('.font-semibold').click();
  cy.get('.font-semibold').should('be.visible');
  cy.get('.font-semibold').click();
  cy.get('.font-semibold').should('have.text', 'Thanks For Joining Us');
  cy.get('.verify-msg').click();
  cy.get('.verify-msg').should('be.visible');
  cy.get('.gap-\\[5px\\] > .six-box > :nth-child(1)').click();
  cy.get('.gap-\\[5px\\] > .six-box > :nth-child(1)').should('be.enabled');
  cy.get('.gap-\\[5px\\] > .six-box > :nth-child(1)').should('be.visible');
  cy.get('.text-slate-100').should('be.enabled');
  cy.get('.text-slate-100').should('be.visible');
  cy.get('.gradient').should('be.visible');
  /* ==== End Cypress Studio ==== */
});