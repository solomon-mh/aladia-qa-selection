/* ==== Test Created with Cypress Studio ==== */
it('otp-verfn', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('http://localhost:3000/login/verification');
  /* ==== End Cypress Studio ==== */
  /* ==== Generated with Cypress Studio ==== */
  cy.get('.gap-\\[5px\\] > .six-box > :nth-child(1)').click();
  cy.get('.min-h-screen').click();
  cy.get('.gap-\\[5px\\] > .six-box > :nth-child(1)').clear('1');
  cy.get('.gap-\\[5px\\] > .six-box > :nth-child(1)').type('3');
  cy.get('.gap-\\[5px\\] > .six-box > :nth-child(1)').click();
  cy.get('.gap-\\[5px\\] > .six-box > :nth-child(1)').should('not.be.checked');
  cy.get('.gap-\\[5px\\] > .six-box > :nth-child(1)').should('be.enabled');
  cy.get('.gap-\\[5px\\] > .six-box > :nth-child(1)').should('be.visible');
  cy.get('.text-slate-100').should('be.visible');
  /* ==== End Cypress Studio ==== */
});