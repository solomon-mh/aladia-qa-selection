<script setup lang="ts">
import SubmitButton from "~/components/atoms/SubmitButton.vue";
import OtpFieldGroup from "~/components/molecules/OtpFieldGroup.vue";
import WelcomeMsg from "~/components/molecules/WelcomeMsg.vue";
import { ref } from "vue";

const otpValue = ref(""); // Store OTP value
const errorMessage = ref(""); // Store error message

const handleOtpChange = (value: string) => {
	otpValue.value = value;
};

const verifyOtp = () => {
	if (otpValue.value.length === 6) {
		alert("Verified!");
		errorMessage.value = ""; // Clear any previous errors
	} else {
		errorMessage.value = "Please enter all 6 digits.";
	}
};
</script>

<template>
	<TemplatesAuthCard
		custom-class="flex flex-col mt-8 h-[30rem] w-[100%] sm:w-[26rem] py-3 mx-auto justify-center items-center border-[1px] border-y-gray-500 rounded p-[20px]"
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
				info-txt="Please enter below the 6-digit code we sent you through your registration e-mail:"
				custom-class="verify-msg text-center"
			/>

			<div
				class="w-full flex flex-col gap-2 mt-5 items-center rounded-lg shadow-xl"
			>
				<div class="text-center mb-2">
					<div class="six-box flex gap-[5px]">
						<OtpFieldGroup @otp-change="handleOtpChange" />
					</div>
					<p v-if="errorMessage" class="text-red-500">{{ errorMessage }}</p>
				</div>
				<form
					@submit.prevent="verifyOtp"
					class="flex flex-col w-[92%] max-w-md gap-2"
				>
					<SubmitButton button-text="Enter" />
				</form>
			</div>
		</div>
	</TemplatesAuthCard>
</template>
