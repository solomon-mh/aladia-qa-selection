<template>
	<div :class="[customClass || defaultClass]">
		<div>
			<slot />
		</div>
	</div>
</template>

<script>
export default {
	name: "AuthCard",
	props: {
		customClass: {
			type: String,
			default: "",
		},
	},
	computed: {
		defaultClass() {
			return "flex flex-col mt-8 h-[40rem]  w-[100%] sm:w-[26rem] py-3 mx-auto justify-center items-center border border-y-gray-500 rounded p-5";
		},
	},
};
</script>
