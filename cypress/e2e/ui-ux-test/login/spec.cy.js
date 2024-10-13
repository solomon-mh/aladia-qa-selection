/* ==== Test Created with Cypress Studio ==== */
it('login-page-test', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('http://localhost:3000/login');
  /* ==== End Cypress Studio ==== */
  /* ==== Generated with Cypress Studio ==== */
  cy.get('.w-30').should('be.visible');
  cy.get('[data-v-inspector="components/molecules/WelcomeMsg.vue:2:2"] > .font-semibold').click();
  cy.get('[data-v-inspector="components/molecules/WelcomeMsg.vue:2:2"] > .font-semibold').should('be.visible');
  cy.get('[data-v-inspector="components/molecules/WelcomeMsg.vue:2:2"] > .font-bold').click();
  cy.get('[data-v-inspector="components/molecules/WelcomeMsg.vue:2:2"] > .font-bold').should('have.text', 'Nice to Meet You,');
  cy.get('[data-v-inspector="components/molecules/WelcomeMsg.vue:2:2"] > .font-semibold').click();
  cy.get('[data-v-inspector="components/molecules/WelcomeMsg.vue:2:2"] > .font-semibold').should('have.text', 'Upload a profile picture and complete your presentation.');
  cy.get(':nth-child(1) > .group > .flex-1').click();
  cy.get(':nth-child(1) > .group > .flex-1').should('have.attr', 'placeholder', 'Name');
  cy.get(':nth-child(1) > .group > .flex > .fa-solid').click();
  cy.get(':nth-child(1) > .group > .flex > .fa-solid').should('be.visible');
  cy.get(':nth-child(2) > .group > .flex-1').click();
  cy.get(':nth-child(2) > .group > .flex-1').should('have.attr', 'type', 'text');
  cy.get(':nth-child(2) > .group > .flex-1').should('be.enabled');
  cy.get('[disabled=""] > .group > .flex-1').click();
  cy.get('[disabled=""] > .group > .flex-1').should('be.visible');
  cy.get(':nth-child(4) > .group > .flex-1').click();
  cy.get(':nth-child(4) > .group > .flex-1').should('be.enabled');
  cy.get(':nth-child(5) > .group > .flex-1').click();
  cy.get(':nth-child(5) > .group > .flex-1').should('be.enabled');
  cy.get('.text-slate-100').should('be.visible');
  cy.get('.gradient').should('be.visible');
  cy.get('.text-slate-100').should('have.text', 'Enter');
  cy.get('[data-v-inspector="components/atoms/Logo.vue:2:2"]').click();
  cy.get('[data-v-inspector="components/atoms/Logo.vue:2:2"]').should('be.visible');
  cy.get('.w-30').click();
  cy.get('.w-30').should('be.visible');
  cy.get('.gap-2 > .font-semibold').click();
  cy.get('.gap-2 > .font-semibold').click();
  cy.get('.gap-2 > .font-semibold').should('have.text', 'Enter your details');
  /* ==== End Cypress Studio ==== */
});