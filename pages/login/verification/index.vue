<script setup lang="ts">
import SubmitButton from "~/components/atoms/SubmitButton.vue";
import OtpFieldGroup from "~/components/molecules/OtpFieldGroup.vue";
import WelcomeMsg from "~/components/molecules/WelcomeMsg.vue";
</script>

<template>
	<!-- <div
		class=""
	> -->
	<TemplatesAuthCard
		custom-class="flex flex-col mt-8 h-[30rem] w-[26rem] py-3 mx-auto justify-center items-center border-[1px] border-y-gray-500 rounded p-[20px]"
	>
		<div class="text-white/80">
			<div class="text-center flex flex-col items-center justify-center my-2">
				<div class="logo my-1">
					<AtomsLogo
						src="/logo/logo.png"
						alt="Custom Logo"
						width="200"
						height="300"
						imgClasses="w-44 h-auto mx-auto m-0 opacity-70"
					/>
				</div>
				<WelcomeMsg title="Solomon Muhye" message="Thanks For Joining Us" />
			</div>
			<AtomsInfoBanner
				info-txt="Please enter below the 6-digit code we sent you through your
				registration e-mail:"
				custom-class="verify-msg text-center"
			/>

			<div
				class="w-full flex flex-col gap-2 mt-5 items-center rounded-lg shadow-xl"
			>
				<div class="six-box flex gap-[5px] my-3">
					<OtpFieldGroup />
				</div>
				<form class="flex flex-col w-[92%] max-w-md gap-6">
					<SubmitButton button-text="Enter" />
				</form>
			</div>
		</div>
	</TemplatesAuthCard>
</template>
<style>
.login-header {
	background: url("/bg/bg.png");
	background-repeat: no-repeat;
	background-size: 100% 100%;
	object-fit: cover;
}
</style>
