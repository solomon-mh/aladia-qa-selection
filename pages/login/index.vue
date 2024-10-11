<script setup lang="ts">
import SubmitButton from "../../components/atoms/SubmitButton.vue";
import InputBox from "~/components/molecules/InputBox.vue";
import Header from "~/components/organisms/Header.vue";
</script>

<template>
	<div
		class="flex flex-col mt-8 h-[40rem] w-[26rem] py-3 mx-auto justify-center items-center border-[1px] border-y-gray-500 rounded p-[20px]"
	>
		<Header>
			<AtomsLogo
				src="/logo/logo.png"
				logoAlt="Custom Logo"
				logoWidth="100"
				logoHeight="100"
				img-classes="w-32 h-44 opacity-85"
			/>
			<MoleculesWelcomeMsg
				title="Nice to Meet You,"
				message="Upload a profile picture and complete your presentation."
			/>
		</Header>
		<div>
			<div class="flex items-start mx-2 my-3">
				<input
					id="terms"
					type="checkbox"
					class="h-5 w-5 font-bold border-gray-300 rounded focus:ring-2 focus:font-extrabold"
				/>
				<label for="terms" class="ml-2 text-sm text-gray-400">
					I accepts
					<a href="#" class="font-bold underline">Terms & Conditions</a>
					and
					<a href="#" class="font-bold underline">Privacy Policy</a>.
				</label>
			</div>
			<div
				class="w-full flex flex-col gap-2 mt-5 items-center rounded-lg shadow-xl"
			>
				<AtomsInfoBanner
					info-txt="Enter your details"
					custom-class="font-semibold text-slate-400 mb-2 text-[14px]"
				/>
				<form @submit.prevent class="flex flex-col w-[92%] max-w-md gap-6">
					<InputBox
						class="h-full flex-1 rounded bg-transparent text-sm text-black outline-none transition-all"
						icon="fa-solid fa-user"
						autocomplete="off"
						placeholder="Name"
						type="text"
					/>
					<InputBox
						class="h-full flex-1 rounded bg-transparent text-sm text-black outline-none transition-all"
						icon="fa-solid fa-user"
						autocomplete="off"
						placeholder="Surname"
						type="text"
					/>
					<InputBox
						class="h-full flex-1 rounded bg-transparent text-sm text-black outline-none transition-all"
						icon="fa-solid fa-envelope"
						value="solomo@gmail.com"
						disabled="true"
						autocomplete="off"
						placeholder="solomo@gmail.com"
						type="text"
					/>
					<InputBox
						class="h-full flex-1 rounded bg-transparent text-sm text-black outline-none transition-all"
						icon="fa-solid fa-key"
						autocomplete="off"
						placeholder="Password"
						type="text"
					/>
					<InputBox
						class="h-full flex-1 rounded bg-transparent text-sm text-black outline-none transition-all"
						icon="fa-solid fa-key"
						autocomplete="off"
						placeholder="Confirm Password"
						type="text"
					/>
					<SubmitButton button-text="Enter" path="/login/verification" />
				</form>
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
