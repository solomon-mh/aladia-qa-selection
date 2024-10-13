/* ==== Test Created with Cypress Studio ==== */
it('login-page-test', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('http://localhost:3000/login');
  /* ==== End Cypress Studio ==== */
  /* ==== Generated with Cypress Studio ==== */
  cy.get('.w-30').should('be.visible');
  cy.get('[data-v-inspector="components/molecules/WelcomeMsg.vue:2:2"] > .font-bold').click();
  cy.get('[data-v-inspector="components/molecules/WelcomeMsg.vue:2:2"] > .font-bold').should('be.visible');
  cy.get('[data-v-inspector="components/molecules/WelcomeMsg.vue:2:2"] > .font-bold').click();
  cy.get('[data-v-inspector="components/molecules/WelcomeMsg.vue:2:2"] > .font-bold').should('have.text', 'Nice to Meet You,');
  cy.get('[data-v-inspector="components/molecules/WelcomeMsg.vue:2:2"] > .font-semibold').click();
  cy.get('[data-v-inspector="components/molecules/WelcomeMsg.vue:2:2"] > .font-semibold').should('be.visible');
  cy.get('[data-v-inspector="components/molecules/WelcomeMsg.vue:2:2"] > .font-semibold').click();
  cy.get('[data-v-inspector="components/molecules/WelcomeMsg.vue:2:2"] > .font-semibold').should('have.text', 'Upload a profile picture and complete your presentation.');
  cy.get('#terms').check();
  cy.get('#terms').should('be.visible');
  cy.get('#terms').should('be.enabled');
  cy.get('[data-v-inspector="pages/login/index.vue:93:6"]').click();
  cy.get('[data-v-inspector="pages/login/index.vue:93:6"]').should('have.attr', 'href', '#');
  cy.get('[data-v-inspector="pages/login/index.vue:93:6"]').should('be.visible');
  cy.get('[data-v-inspector="pages/login/index.vue:95:6"]').should('have.attr', 'href', '#');
  cy.get('[data-v-inspector="pages/login/index.vue:95:6"]').should('be.visible');
  /* ==== End Cypress Studio ==== */
});