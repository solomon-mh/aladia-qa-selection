<script setup lang="ts">
import SocialLoginCard from "../components/molecules/SocialLoginCard.vue";
import SubmitButton from "../components/atoms/SubmitButton.vue";
import TermsConditions from "../components/atoms/TermsConditions.vue";
import Header from "~/components/organisms/Header.vue";
import InputBox from "~/components/molecules/InputBox.vue";
</script>

<template>
	<div
		class="flex flex-col mt-8 h-[40rem] w-[26rem] py-3 mx-auto justify-center items-center border-[1px] border-y-gray-500 rounded p-[20px]"
	>
		<div>
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
					<SocialLoginCard />
					<TermsConditions />
				</div>
			</div>
		</div>
	</div>
</template>
<style>
.login-header {
	background: url("/bg/bg.png");
	background-repeat: no-repeat;
	background-size: 100% 100%;
	object-fit: cover;
}
</style>
