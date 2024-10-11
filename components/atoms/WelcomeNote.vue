<template>
	<p class="font-semibold text-[14px] text-stone-400 text-left mb-5">
		{{ message }}
	</p>
</template>

<script>
export default {
	name: "WelcomeNote",
	props: {
		message: {
			type: String,
			default: "Create or access your account from here.",
		},
	},
};
</script>
