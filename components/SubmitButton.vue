<template>
	<div
		class="relative login-header flex h-10 w-full items-center justify-center overflow-hidden rounded-md border-white/100 bg-black text-center text-sm border"
	>
		<div class="gradient absolute inset-0 bg-black/50 shadow-inner"></div>
		<!-- Use bg-black with alpha for transparency -->
		<button class="text-slate-100 cursor-pointer relative z-10" @click="">
			Enter
		</button>
	</div>
</template>

<script>
export default {
	name: "SubmitButton",
};
</script>

<style>
.gradient {
	background: linear-gradient(
		920deg,
		rgba(6, 6, 6, 0.5),
		rgba(6, 6, 6, 0.5),
		rgba(97, 96, 99, 0.5),
		rgba(6, 6, 6, 0.5) rgba(6, 6, 6, 0.5)
	);
}
</style>
