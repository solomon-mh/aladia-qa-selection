<script setup lang="ts">
import SubmitButton from "~/components/atoms/SubmitButton.vue";
</script>

<template>
	<div
		class="flex flex-col mt-8 h-[30rem] w-[26rem] py-3 mx-auto justify-center items-center border-[1px] border-y-gray-500 rounded p-[20px]"
	>
		<div class="text-white/80">
			<div class="text-center my-3">
				<div class="logo my-1">
					<AtomsLogo
						src="/logo/logo.png"
						alt="Custom Logo"
						width="200"
						height="300"
						imgClasses="w-44 h-auto mx-auto m-0"
					/>
					<p>Solomon Muhye</p>
					<p>Thanks For Joining Us</p>
				</div>
			</div>
			<div class="verify-msg text-center">
				Please enter below the 6-digit code we sent you <br />
				through your registration e-mail:
			</div>

			<div
				class="w-full flex flex-col gap-2 mt-5 items-center rounded-lg shadow-xl"
			>
				<div class="six-box flex gap-[5px] my-3">
					<input
						type="text"
						maxlength="1"
						class="otp-box one w-11 h-11 text-center border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-slate-500"
					/>
					<input
						type="text"
						maxlength="1"
						class="otp-box one w-11 h-11 text-center border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-slate-500"
					/>
					<input
						type="text"
						maxlength="1"
						class="otp-box one w-11 h-11 text-center border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-slate-500"
					/>
					<input
						type="text"
						maxlength="1"
						class="otp-box one w-11 h-11 text-center border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-slate-500"
					/>
					<input
						type="text"
						maxlength="1"
						class="otp-box one w-11 h-11 text-center border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-slate-500"
					/>
					<input
						type="text"
						maxlength="1"
						class="otp-box one w-11 h-11 text-center border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-slate-500"
					/>
				</div>
				<form class="flex flex-col w-[92%] max-w-md gap-6">
					<SubmitButton button-text="Enter" />
				</form>
			</div>
		</div>
	</div>
</template>
<style>
.login-header {
	background: url("../../assets/bg/bg.png");
	background-repeat: no-repeat;
	background-size: 100% 100%;
	object-fit: cover;
}
</style>
