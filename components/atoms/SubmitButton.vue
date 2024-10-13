<template>
	<div
		:class="[
			'relative login-header flex items-center justify-center overflow-hidden rounded-md text-center text-sm border border-transparent hover:border-gray-500 transition-all duration-300',
			borderColor,
			bgColor,
			sizeClass, // Dynamically apply the size class
		]"
	>
		<div :class="['gradient absolute inset-0', gradientColor]"></div>
		<!-- The button text and click handler are now passed as props -->
		<button
			:type="button"
			:class="[textColor, 'cursor-pointer relative z-10']"
			@click="handleClick"
		>
			{{ buttonText }}
		</button>
	</div>
</template>

<script>
export default {
	name: "SubmitButton",
	props: {
		buttonText: {
			type: String,
			default: "Enter",
		},
		bgColor: {
			type: String,
			default: "bg-black",
		},
		borderColor: {
			type: String,
			default: "border-white/100",
		},
		gradientColor: {
			type: String,
			default: "bg-black/50",
		},
		textColor: {
			type: String,
			default: "text-slate-100",
		},
		onClick: {
			type: Function,
			default: () => {},
		},
		size: {
			type: String,
			default: "medium", // Default size
		},
		path: {
			type: String,
			default: "/",
		},
	},
	computed: {
		sizeClass() {
			return {
				"size-small": this.size === "small",
				"size-medium": this.size === "medium",
				"size-large": this.size === "large",
			};
		},
	},
	methods: {
		handleClick(event) {
			this.onClick(event);
			// this.$router.push(this.path);
		},
	},
};
</script>

<style>
.gradient {
	background: linear-gradient(
		920deg,
		rgba(6, 6, 6, 0.5),
		rgba(6, 6, 6, 0.5),
		rgba(97, 96, 99, 0.5),
		rgba(6, 6, 6, 0.5),
		rgba(97, 96, 99, 0.5),
		rgba(6, 6, 6, 0.5) rgba(6, 6, 6, 0.5)
	);
}

.size-small {
	height: 30px;
	padding: 0 10px;
	font-size: 0.875rem;
}

.size-medium {
	height: 40px;
	padding: 0 15px;
	font-size: 1rem;
}

.size-large {
	height: 50px;
	padding: 0 20px;
	font-size: 1.125rem;
}
</style>
