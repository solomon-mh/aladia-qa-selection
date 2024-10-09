<template class="bg-gradient-to-t from-[#181818] to-[#211f1f]">
	<div
		class="flex flex-col mt-8 h-[40rem] w-[26rem] py-3 mx-auto justify-center items-center border-[1px] border-y-gray-500 rounded p-[20px]"
	>
		<div>
			<!-- sign-up header Section -->
			<Header />
			<!-- Right Section -->
			<div
				class="w-full flex flex-col gap-2 mt-5 items-center rounded-lg shadow-xl"
			>
				<h1 class="font-semibold text-slate-300 mb-2 text-[14px]">
					Enter Your Email
				</h1>
				<form class="flex flex-col w-[92%] max-w-md gap-6">
					<EmailInput />
					<SubmitButton />
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
	background: url("../assets/bg/bg.png");
	background-repeat: no-repeat;
	background-size: 100% 100%;
	object-fit: cover;
}
</style>
