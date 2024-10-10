describe("SignupPage", () => {
	it("should load the singup-page", () => {
		cy.visit("/");
		cy.get("h1").should("contain", "Enter Your Email");
	});

	it("should navigate to the verification page", () => {
		// Find and click the button that navigates to /verification
		cy.get("button").contains("Enter").click();

		// Assert that the URL has changed to /login
		cy.url().should("include", "/login");
		// Verify that the login page has loaded
		cy.get("h1").should("contain", "ድ");
	});
});
