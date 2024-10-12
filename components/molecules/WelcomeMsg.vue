<template>
	<div class="flex-1">
		<AtomsWelcomeHeader :title="title" />
		<AtomsWelcomeNote :message="message" />
	</div>
</template>

<script>
import WelcomeHeader from "../atoms/WelcomeHeader.vue";
import WelcomeNote from "../atoms/WelcomeNote.vue";

export default {
	name: "WelcomeMsg",
	components: {
		WelcomeHeader,
		WelcomeNote,
	},
	props: {
		title: {
			type: String,
			default: "Welcome to Aladia,",
		},
		message: {
			type: String,
			default: "Create or access your account from here.",
		},
	},
};
</script>
