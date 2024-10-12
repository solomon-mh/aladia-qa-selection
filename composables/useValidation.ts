export const useValidation = () => {
	const validateEmail = (email: string): string | null => {
		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!email) return "Email is required.";
		if (!emailPattern.test(email)) return "Please enter a valid email address.";
		return null; // No error
	};
	return { validateEmail };
};
