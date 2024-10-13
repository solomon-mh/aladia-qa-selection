/* ==== Test Created with Cypress Studio ==== */
it('login-form-test', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('http://localhost:3000/login');
  /* ==== End Cypress Studio ==== */
  /* ==== Generated with Cypress Studio ==== */
  cy.get('[data-v-inspector="pages/login/index.vue:109:6"] > .h-full > .group > .flex-1').click();
  cy.get('[data-v-inspector="pages/login/index.vue:109:6"] > .h-full > .group > .flex-1').should('have.attr', 'type', 'text');
  cy.get('[data-v-inspector="pages/login/index.vue:109:6"] > .h-full > .group > .flex-1').click();
  cy.get('[data-v-inspector="pages/login/index.vue:109:6"] > .h-full > .group > .flex-1').should('have.attr', 'placeholder', 'Name');
  cy.get('[data-v-inspector="pages/login/index.vue:109:6"] > .h-full > .group > .flex > .fa-solid').click();
  cy.get('[data-v-inspector="pages/login/index.vue:109:6"] > .h-full > .group > .flex > .fa-solid').should('be.visible');
  cy.get('[data-v-inspector="pages/login/index.vue:124:6"] > .h-full > .group > .flex-1').click();
  cy.get('[data-v-inspector="pages/login/index.vue:124:6"] > .h-full > .group > .flex-1').should('be.visible');
  cy.get('[data-v-inspector="pages/login/index.vue:124:6"] > .h-full > .group > .flex-1').click();
  cy.get('[data-v-inspector="pages/login/index.vue:124:6"] > .h-full > .group > .flex-1').should('be.enabled');
  cy.get('[data-v-inspector="pages/login/index.vue:124:6"] > .h-full > .group > .flex-1').click();
  cy.get('[data-v-inspector="pages/login/index.vue:124:6"] > .h-full > .group > .flex-1').should('have.attr', 'placeholder', 'Surname');
  cy.get('[data-v-inspector="pages/login/index.vue:124:6"] > .h-full > .group > .flex > .fa-solid').click();
  cy.get('[data-v-inspector="pages/login/index.vue:124:6"] > .h-full > .group > .flex > .fa-solid').should('be.visible');
  cy.get('[readonly=""] > .group > .flex-1').click();
  cy.get('[readonly=""] > .group > .flex-1').should('have.attr', 'placeholder', 'solomon.muhye.wd@gmail.com');
  cy.get('[readonly=""] > .group > .flex > .fa-solid').click();
  cy.get('[readonly=""] > .group > .flex > .fa-solid').should('be.visible');
  cy.get('[data-v-inspector="pages/login/index.vue:154:6"] > .h-full > .group > .flex-1').click();
  cy.get('[data-v-inspector="pages/login/index.vue:154:6"] > .h-full > .group > .flex-1').should('not.be.checked');
  cy.get('[data-v-inspector="pages/login/index.vue:154:6"] > .h-full > .group > .flex > .fa-solid').should('be.visible');
  cy.get('[data-v-inspector="pages/login/index.vue:154:6"] > .h-full > .group > .flex-1').click();
  cy.get('[data-v-inspector="pages/login/index.vue:154:6"] > .h-full > .group > .flex-1').should('have.attr', 'placeholder', 'Password');
  cy.get('[data-v-inspector="pages/login/index.vue:169:6"] > .h-full > .group > .flex-1').click();
  cy.get('[data-v-inspector="pages/login/index.vue:169:6"] > .h-full > .group > .flex-1').should('be.visible');
  cy.get('[data-v-inspector="pages/login/index.vue:169:6"] > .h-full > .group > .flex > .fa-solid').click();
  cy.get('[data-v-inspector="pages/login/index.vue:169:6"] > .h-full > .group > .flex > .fa-solid').should('be.visible');
  cy.get('.gradient').should('be.visible');
  cy.get('.text-slate-100').should('have.text', 'Enter');
  /* ==== End Cypress Studio ==== */
});