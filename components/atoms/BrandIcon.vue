<template>
	<NuxtImg :src="icon" class="h-6" />
</template>

<script>
export default {
	name: "BrandIcon",
	props: {
		icon: {
			type: String,
			required: true,
		},
	},
};
</script>
