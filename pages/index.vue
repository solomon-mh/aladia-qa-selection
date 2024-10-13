<script setup lang="ts">
import { ref } from "vue";
import SocialLoginCard from "../components/organisms/SocialLoginCard.vue";
import SubmitButton from "../components/atoms/SubmitButton.vue";
import TermsConditions from "../components/atoms/TermsConditions.vue";
import Header from "~/components/organisms/Header.vue";
import InputBox from "~/components/molecules/InputBox.vue";
import SocialLogin from "~/components/molecules/SocialLogin.vue";
import { useValidation } from "~/composables/useValidation";

// Reactive variables for form data and errors
const email = ref<string>("");
const emailError = ref<string>("");

const router = useRouter();
const { validateEmail } = useValidation();
const handleSubmit = () => {
	const error = validateEmail(email.value);
	if (error) {
		emailError.value = error;
	} else {
		alert("Form Submitted Successfully with email:" + email.value);
		router.push({ path: "/login", query: { email: email.value } });
	}
};
</script>

<template>
	<TemplatesAuthCard>
		<Header>
			<AtomsLogo
				src="/logo/logo.png"
				logoAlt="Custom Logo"
				logoWidth="100"
				logoHeight="100"
				imgClasses="w-32 h-44 opacity-85"
			/>
			<MoleculesWelcomeMsg
				title="Welcome to Aladia,"
				message="Create or access your account from here."
			/>
		</Header>

		<div
			class="w-full flex flex-col gap-2 mt-5 items-center rounded-lg shadow-xl"
		>
			<AtomsInfoBanner
				infoTxt="Enter Your Email"
				customClass="font-semibold text-slate-300 mb-2 text-[14px]"
			/>

			<form
				@submit.prevent="handleSubmit"
				class="flex flex-col w-[92%] max-w-md gap-6"
			>
				<div class="relative">
					<InputBox
						class="h-full flex-1 rounded bg-transparent text-sm text-black outline-none transition-all"
						icon="fa-solid fa-envelope"
						autocomplete="off"
						placeholder="Enter Your Address"
						type="text"
						v-model="email"
					/>
					<p v-if="emailError" class="text-red-500 text-xs mt-1">
						{{ emailError }}
					</p>
				</div>

				<SubmitButton button-text="Enter" />
			</form>

			<div class="or-card mt-3 flex items-center">
				<div class="mb-4 flex items-center justify-between gap-4">
					<div
						class="h-[1px] w-40 bg-gradient-to-r from-white/0 to-white"
					></div>
					<div class="text-white">Or</div>
					<div
						class="h-[1px] w-40 bg-gradient-to-r from-white to-white/0"
					></div>
				</div>
			</div>

			<div class="singing-opt w-[92%] space-y-2">
				<SocialLoginCard>
					<SocialLogin icon="/brand/google.svg" text="Continue with Google" />
					<SocialLogin icon="/brand/fb.svg" text="Continue with Facebook" />
					<SocialLogin icon="/brand/apple.svg" text="Continue with Apple" />
				</SocialLoginCard>
				<TermsConditions />
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
