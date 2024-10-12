/* ==== Test Created with Cypress Studio ==== */
it('attributes-check', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('http://localhost:3000/login/verification');
  cy.get('.w-30').click();
  cy.get('.w-30').should('be.visible');
  cy.get('.font-bold').click();
  cy.get('.font-bold').should('have.attr', 'data-v-inspector', 'components/atoms/WelcomeHeader.vue:2:2');
  cy.get('.font-semibold').click();
  cy.get('.font-semibold').click();
  cy.get('.font-semibold').should('be.visible');
  cy.get('.verify-msg').click();
  cy.get('.verify-msg').should('be.visible');
  cy.get('.verify-msg').click();
  cy.get('.verify-msg').should('have.text', 'Please enter below the 6-digit code we sent you through your\r\n\t\t\t\tregistration e-mail:');
  cy.get('.gap-\\[5px\\] > .six-box > :nth-child(1)').click();
  cy.get('.gap-\\[5px\\] > .six-box > :nth-child(1)').should('be.enabled');
  cy.get('.six-box > :nth-child(2)').click();
  cy.get('.six-box > :nth-child(2)').should('have.attr', 'type', 'text');
  cy.get('.gap-\\[5px\\] > .six-box > :nth-child(1)').click();
  cy.get('.min-h-screen').click();
  cy.get('.gradient').should('be.visible');
  cy.get('.text-slate-100').should('have.text', 'Enter');
  cy.get('.text-slate-100').should('have.attr', 'data-v-inspector', 'components/atoms/SubmitButton.vue:12:3');
  /* ==== End Cypress Studio ==== */
});