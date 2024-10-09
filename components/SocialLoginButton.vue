<template>
	<div
		class="flex cursor-pointer items-center justify-center gap-4 rounded border border-white/20 py-1.5 shadow-[0px_3px_6px_#00000000] transition-all hover:bg-white/20 hover:shadow-[0px_3px_6px_#000000] active:scale-95"
		@click="handleClick"
	>
		<!-- <img :src="{ icon }" class="h-6" /> -->
		<NuxtImg :src="icon" class="h-6" />
		<div class="w-40 text-white whitespace-nowrap">{{ text }}</div>
	</div>
</template>

<script>
export default {
	name: "SocialLoginButton",
	props: {
		icon: {
			type: String,
			required: true,
		},
		text: {
			type: String,
			required: true,
		},
		link: {
			type: String,
			default: "#",
		},
	},
	methods: {
		handleClick() {
			if (this.link !== "#") {
				this.$router.push(this.link);
			}
		},
	},
};
</script>
