<template>
	<div class="w-40 text-white whitespace-nowrap">{{ text }}</div>
</template>

<script>
export default {
	name: "BrandName",
	props: {
		text: {
			type: String,
			required: true,
		},
	},
};
</script>
