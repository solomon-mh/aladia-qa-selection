<script setup lang="ts">
import SocialLoginCard from "../components/organisms/SocialLoginCard.vue";
import SubmitButton from "../components/atoms/SubmitButton.vue";
import TermsConditions from "../components/atoms/TermsConditions.vue";
import Header from "~/components/organisms/Header.vue";
import InputBox from "~/components/molecules/InputBox.vue";
import SocialLogin from "~/components/molecules/SocialLogin.vue";
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
			<form @submit.prevent class="flex flex-col w-[92%] max-w-md gap-6">
				<InputBox
					class="h-full flex-1 rounded bg-transparent text-sm text-black outline-none transition-all"
					icon="fa-solid fa-envelope"
					autocomplete="off"
					placeholder="Enter Your Address"
					type="text"
				/>
				<SubmitButton button-text="Enter" path="/login" />
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
					<SocialLogin
						icon="/brand/google.svg"
						text="Continue with Google"
						link="/google-login"
					/>
					<SocialLogin
						icon="/brand/fb.svg"
						text="Continue with Facebook"
						link="/facebook-login"
					/>
					<SocialLogin
						icon="/brand/apple.svg"
						text="Continue with Apple"
						link="/apple-login"
					/>
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
