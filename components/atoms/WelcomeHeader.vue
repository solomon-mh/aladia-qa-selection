<template>
	<h1 class="font-bold text-[19px] text-slate-200 text-left mb-2">
		{{ title }}
	</h1>
</template>
<script>
export default {
	name: "WelcomeHeader",
	props: {
		title: {
			type: String,
			default: "Welcome to Aladia,",
		},
	},
};
</script>
