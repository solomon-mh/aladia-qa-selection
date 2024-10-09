<template>
	<div class="group relative flex h-10 w-full rounded transition-all bg-white">
		<div class="flex w-10 items-center justify-center text-xl">
			<i class="fa-solid fa-envelope text-base text-black/70"></i>
		</div>
		<input
			maxlength="100"
			class="h-full flex-1 rounded bg-transparent text-sm text-black outline-none transition-all"
			autocomplete="off"
			type="text"
		/>
		<div
			class="pointer-events-none absolute left-10 top-[0.65rem] origin-left text-sm text-black/50 transition-all scale-100"
		>
			Email Address
		</div>
	</div>
</template>
<script>
export default {
	name: "EmailInput",
};
</script>
