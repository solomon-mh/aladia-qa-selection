/* ==== Test Created with Cypress Studio ==== */
it("Signup Page Tests", function () {
	/* ==== Generated with Cypress Studio ==== */
	cy.visit("http://localhost:3000");
	/* ==== End Cypress Studio ==== */
	/* ==== Generated with Cypress Studio ==== */
	cy.get(".group > .flex-1").click();
	cy.get(".group > .flex-1").should(
		"have.attr",
		"placeholder",
		"Enter Your Address"
	);
	cy.get(".group > .flex-1").click();
	cy.get(".fa-solid").click();
	cy.get(".fa-solid").should("be.visible");
	cy.get(".mb-8 > :nth-child(1)").click();
	// cy.get('.cursor-pointer').click();
	cy.get(".text-slate-100").should("be.enabled");
	cy.get(".text-slate-100").should("be.visible");
	cy.get(".mb-8 > :nth-child(1) > .w-40").should(
		"have.text",
		"Continue with Google"
	);
	cy.get(":nth-child(1) > .h-6").should(
		"have.attr",
		"src",
		"/_ipx/_/brand/google.svg"
	);
	cy.get(".w-30").click();
	cy.get(".w-30").should("be.visible");
	cy.get(".font-bold").click();
	cy.get(".font-bold").click();
	cy.get(".font-bold").should("have.text", "Welcome to Aladia,");
	cy.get(".login-header-bg > :nth-child(2) > .font-semibold").click();
	cy.get(".login-header-bg > :nth-child(2) > .font-semibold").click();
	cy.get(".login-header-bg > :nth-child(2) > .font-semibold").should(
		"be.visible"
	);
	cy.get(".font-bold").click();
	cy.get(".font-bold").should("be.visible");
	cy.get(".w-30").click();
	cy.get(".w-30").should("be.visible");
	cy.get(".singing-opt > .relative").click();
	cy.get(".singing-opt > .relative").should("be.visible");
	cy.get(".singing-opt > .relative").click();
	cy.get(".min-h-screen").click();
	cy.get(".singing-opt > .relative").should("be.visible");
	cy.get(".singing-opt > .relative").should(
		"have.text",
		" Terms & Conditions "
	);
	/* ==== End Cypress Studio ==== */
});
