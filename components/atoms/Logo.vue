<template>
	<div class="flex-1">
		<img
			:class="['w-40 mb-4 h-40 object-contain', imgClasses]"
			:src="src"
			:alt="alt"
			:width="width"
			:height="height"
		/>
	</div>
</template>

<script>
export default {
	name: "Logo",
	props: {
		src: {
			type: String,
			required: true,
			default: "/logo/logo.png",
		},
		alt: {
			type: String,
			default: "logo",
		},
		width: {
			type: [String, Number],
			default: 160,
		},
		height: {
			type: [String, Number],
			default: 160,
		},
		imgClasses: {
			type: String,
			default: "w-40 h-40",
		},
	},
};
</script>
