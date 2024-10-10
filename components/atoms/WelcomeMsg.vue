<template>
	<div class="flex-1">
		<h1 class="font-bold text-[19px] text-slate-200 text-left mb-2">
			{{ title }}
		</h1>
		<p class="font-semibold text-[14px] text-stone-400 text-left mb-5">
			{{ message }}
		</p>
	</div>
</template>

<script>
export default {
	name: "WelcomeMsg",
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
