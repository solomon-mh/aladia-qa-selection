<template>
	<div class="cursor-pointer relative top-5 text-center" :class="textColor">
		Terms &amp; Conditions
	</div>
</template>

<script>
export default {
	name: "TermsConditions",
	props: {
		textColor: {
			type: String,
			default: "text-white/40", // Default text color
		},
	},
};
</script>
