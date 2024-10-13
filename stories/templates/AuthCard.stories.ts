import AuthCard from "../../components/templates/AuthCard.vue";

export default {
	title: "Components/Templates/AuthCard",
	component: AuthCard,
	tags: ["autodocs"],
	argTypes: {
		customClass: {
			control: "text",
			description: "Custom CSS classes to apply to the AuthCard.",
		},
	},
	args: {
		customClass: "",
	},
};

// Primary story
export const Default = {
	render: () => ({
		components: { AuthCard },
		template: `
      <AuthCard>
        <h2 class="text-xl font-bold">Welcome Back!</h2>
        <p class="text-gray-600">Please sign in to continue.</p>
      </AuthCard>
    `,
	}),
};

// Story with custom class
export const WithCustomClass = {
	render: () => ({
		components: { AuthCard },
		template: `
      <AuthCard customClass="bg-gray-100 border border-gray-300 shadow-md">
        <h2 class="text-xl font-bold">Welcome Back!</h2>
        <p class="text-gray-600">Please sign in to continue.</p>
      </AuthCard>
    `,
	}),
};

// Story with different slot content
export const DifferentContent = {
	render: () => ({
		components: { AuthCard },
		template: `
      <AuthCard>
        <h2 class="text-xl font-bold">Create Account</h2>
        <p class="text-gray-600">Join us today and enjoy learning with Aladia E-learning.</p>
      </AuthCard>
    `,
	}),
};
