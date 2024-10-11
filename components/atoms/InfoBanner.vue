<template>
	<p :class="customClass">{{ infoTxt }}</p>
</template>

<script>
export default {
	name: "InfoBanner",
	props: {
		infoTxt: {
			type: String,
			default: "Enter Your Email",
		},
		customClass: {
			type: String,
			default: "font-semibold text-slate-300 mb-2 text-[14px]",
		},
	},
};
</script>
