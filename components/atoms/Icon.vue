<template>
	<div v-if="icon" :class="iconWrapperClass">
		<i :class="[icon, iconClass]"></i>
	</div>
</template>

<script>
export default {
	props: {
		icon: {
			type: String,
			required: true, // The icon prop is required
		},
		iconWrapperClass: {
			type: String,
			default: "flex w-10 items-center justify-center text-xl",
		},
		iconClass: {
			type: String,
			default: "text-base text-black/70",
		},
	},
};
</script>
