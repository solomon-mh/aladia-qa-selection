describe("SubmitButton Component", () => {
	// Before each test, visit the page where the SubmitButton is located

	it("should navigate to /login/verification when the button is clicked", () => {
		// Ensure the button contains the correct text (optional)
		cy.get("button").contains("Enter").should("exist");

		// Click the SubmitButton
		cy.get("button").contains("Enter").click();

		// Verify that the URL changes to /login/verification
		cy.url().should("include", "/login/verification");

		// Optionally, check that the new page has the expected content
		cy.get("h1").should("contain", "Verification"); // Assuming wthe verification page has an <h1> with 'Verification'
	});
});
