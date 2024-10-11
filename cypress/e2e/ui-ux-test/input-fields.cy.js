describe("Signup Page Tests", () => {
    beforeEach(() => {
		cy.visit("http://localhost:3000/");
	});

    it("should render all components correctly", () => {
        cy.get("header").should("be.visible");
        cy.get('input[placeholder="Enter Your Address"]').should("exist");
        cy.contains("Enter").should("be.visible");
        cy.contains("Or").should("be.visible");
        cy.get(".singing-opt").should("contain", "Google");
        cy.contains("Terms & Conditions").should("exist");
        /* ==== Generated with Cypress Studio ==== */
        cy.get('.text-slate-100').click();
        cy.get(':nth-child(1) > .group > .h-full').click();
        /* ==== End Cypress Studio ==== */
        /* ==== Generated with Cypress Studio ==== */
        cy.get('.text-slate-100').click();
        /* ==== End Cypress Studio ==== */
        /* ==== Generated with Cypress Studio ==== */
        cy.get('.group > .h-full').clear('s');
        cy.get('.group > .h-full').type('email');
        cy.get('.text-slate-100').click();
        /* ==== End Cypress Studio ==== */
        /* ==== Generated with Cypress Studio ==== */
        cy.get('.group > .h-full').click();
        cy.get('.group > .h-full').should('be.visible');
        cy.get('.group > .h-full').click();
        cy.get('.gap-2 > .font-semibold').click();
        cy.get('.text-slate-100').should('be.enabled');
        /* ==== End Cypress Studio ==== */
    });

    it("should prevent form submission with empty input", () => {
        cy.get("form").submit();
        /* ==== Generated with Cypress Studio ==== */
        cy.get('.gradient').should('be.visible');
        /* ==== End Cypress Studio ==== */
    });

    it("should allow user to enter an email", () => {
		const email = "test@example.com";
		cy.get('input[placeholder="Enter Your Address"]').type(email);
		cy.get('input[placeholder="Enter Your Address"]').should(
			"have.value",
			email
		);
	});

    it("should submit the form when a valid email is entered", () => {
		const email = "test@example.com";
		// Enter email and submit the form
		cy.get('input[placeholder="Enter Your Address"]').type(email);
		cy.get("form").submit();
	});

    /* ==== Test Created with Cypress Studio ==== */
    it('attr-value-testing', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.get('.text-slate-100').should('be.enabled');
        cy.get('.text-slate-100').should('be.visible');
        cy.get('.mb-8 > :nth-child(1) > .w-40').should('have.text', 'Continue with Google');
        cy.get(':nth-child(2) > .w-40').should('have.text', 'Continue with Facebook');
        cy.get('.min-h-screen').click();
        cy.get('.min-h-screen').click();
        cy.get('.singing-opt > .relative').should('have.text', ' Terms & Conditions ');
        /* ==== End Cypress Studio ==== */
    });
});
