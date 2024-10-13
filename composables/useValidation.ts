export const useValidation = () => {
	const validateEmail = (email: string): string | null => {
		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!email) return "Email is required.";
		if (!emailPattern.test(email)) return "Please enter a valid email address.";
		return null; // No error
	};

	const validateName = (name: string): string | null => {
		if (!name) return "Name is required.";
		if (name.length < 2) return "Name must be at least 2 characters long.";
		return null; // No error
	};

	const validateSurname = (surname: string): string | null => {
		if (!surname) return "Surname is required.";
		if (surname.length < 2)
			return "Surname must be at least 2 characters long.";
		return null; // No error
	};

	const validatePassword = (password: string): string | null => {
		if (!password) return "Password is required.";
		if (password.length < 6)
			return "Password must be at least 6 characters long.";
		return null; // No error
	};

	const validateConfirmPassword = (
		password: string,
		confirmPassword: string
	): string | null => {
		if (!confirmPassword) return "Confirm password is required.";
		if (confirmPassword !== password) return "Passwords do not match.";
		return null; // No error
	};

	return {
		validateEmail,
		validateName,
		validateSurname,
		validatePassword,
		validateConfirmPassword,
	};
};
