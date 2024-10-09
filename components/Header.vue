<template>
	<div
		class="login-header-bg bg-opacity-25 flex mx-auto h-32 justify-center border-[1px] rounded border-gray-700 items-center"
	>
		<Logo />
		<WelcomeMsg />
	</div>
</template>

<script>
import WelcomeMsg from "./WelcomeMsg.vue";

export default {
	name: "Header",
};
</script>

<style>
.login-header-bg {
	position: relative;
	z-index: 1;
}

.login-header-bg::before {
	content: "";
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: -1;
	background: linear-gradient(
		920deg,
		#636365 2%,
		#060606 25%,
		#060606 35%,
		#7d7d7d 3%,
		#060606 40%
	);
	opacity: 0.25;
	border-radius: inherit;
}
</style>
