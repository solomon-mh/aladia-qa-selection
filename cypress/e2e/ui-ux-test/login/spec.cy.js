describe("template spec", () => {
	/* ==== Test Created with Cypress Studio ==== */
	it("login-page-test", function () {
		/* ==== Generated with Cypress Studio ==== */
		cy.visit("http://localhost:3000/login");
		/* ==== End Cypress Studio ==== */
		/* ==== Generated with Cypress Studio ==== */
		cy.get(".w-30").click();
		cy.get(".w-30").should("be.visible");
		cy.get(
			'[data-v-inspector="components/molecules/WelcomeMsg.vue:2:2"] > .font-bold'
		).click();
		cy.get(
			'[data-v-inspector="components/molecules/WelcomeMsg.vue:2:2"] > .font-bold'
		).should("be.visible");
		cy.get(
			'[data-v-inspector="components/molecules/WelcomeMsg.vue:2:2"] > .font-semibold'
		).click();
		cy.get(
			'[data-v-inspector="components/molecules/WelcomeMsg.vue:2:2"] > .font-semibold'
		).should("be.visible");
		cy.get(
			'[data-v-inspector="components/molecules/WelcomeMsg.vue:2:2"] > .font-semibold'
		).click();
		cy.get(
			'[data-v-inspector="components/molecules/WelcomeMsg.vue:2:2"] > .font-semibold'
		).should(
			"have.text",
			"Upload a profile picture and complete your presentation."
		);
		cy.get('[data-v-inspector="components/atoms/Logo.vue:2:2"]').click();
		cy.get('[data-v-inspector="components/atoms/Logo.vue:2:2"]').should(
			"be.visible"
		);
		cy.get('[data-v-inspector="components/atoms/Logo.vue:2:2"]').click();
		cy.get('[data-v-inspector="pages/login/index.vue:25:3"]').click();
		cy.get('[data-v-inspector="components/atoms/Logo.vue:2:2"]').click();
		cy.get('[data-v-inspector="components/atoms/Logo.vue:2:2"]').should(
			"be.visible"
		);
		cy.get('[data-v-inspector="components/atoms/Logo.vue:2:2"]').click();
		cy.get('[data-v-inspector="pages/login/index.vue:25:3"]').click();
		cy.get(":nth-child(1) > .group > .flex-1").click();
		cy.get(":nth-child(1) > .group > .flex-1").should("be.visible");
		cy.get(":nth-child(1) > .group > .flex-1").click();
		cy.get(":nth-child(1) > .group > .flex-1").should("be.enabled");
		cy.get(":nth-child(1) > .group > .flex-1").click();
		cy.get(":nth-child(1) > .group > .flex > .fa-solid").click();
		cy.get(":nth-child(1) > .group > .flex > .fa-solid").should("be.visible");
		cy.get(":nth-child(2) > .group > .flex-1").click();
		cy.get(":nth-child(2) > .group > .flex-1").should(
			"have.attr",
			"placeholder",
			"Surname"
		);
		cy.get('[value="solomo@gmail.com"] > .group > .flex-1').click();
		cy.get('[value="solomo@gmail.com"] > .group > .flex-1').should(
			"be.visible"
		);
		cy.get(":nth-child(4) > .group > .flex-1").click();
		cy.get(":nth-child(4) > .group > .flex-1").should("be.enabled");
		cy.get(":nth-child(5) > .group > .flex-1").click();
		cy.get(":nth-child(5) > .group > .flex-1").should("be.visible");
		cy.get(":nth-child(4) > .group > .flex-1").click();
		cy.get(":nth-child(4) > .group > .flex-1").should(
			"have.attr",
			"placeholder",
			"Password"
		);
		cy.get(":nth-child(5) > .group > .flex-1").click();
		cy.get(":nth-child(5) > .group > .flex-1").should(
			"have.attr",
			"placeholder",
			"Confirm Password"
		);
		cy.get('[value="solomo@gmail.com"] > .group > .flex-1').click();
		cy.get('[value="solomo@gmail.com"] > .group > .flex-1').should(
			"have.attr",
			"type",
			"text"
		);
		cy.get(".gradient").should("be.visible");
		/* ==== End Cypress Studio ==== */
	});
});
