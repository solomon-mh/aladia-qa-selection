<template>
	<div
		:style="{ backgroundColor: backgroundColor, color: textColor }"
		class="flex cursor-pointer items-center justify-center gap-4 rounded border border-white/20 py-1.5 shadow-[0px_3px_6px_#00000000] transition-all hover:bg-white/20 hover:shadow-[0px_3px_6px_#000000] active:scale-95"
		@click="handleClick"
	>
		<BrandIcon :icon="icon" />
		<BrandName :text="text" />
	</div>
</template>

<script>
import BrandIcon from "../atoms/BrandIcon.vue";
import BrandName from "../atoms/BrandName.vue";

export default {
	name: "SocialLoginButton",
	props: {
		backgroundColor: {
			// Add backgroundColor prop
			type: String,
			default: "", // Default background color
		},
		textColor: {
			// Add textColor prop
			type: String,
			default: "", // Default text color
		},
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
	components: {
		BrandIcon,
		BrandName,
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
