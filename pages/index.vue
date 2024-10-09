<template class="bg-gradient-to-t from-[#181818] to-[#211f1f]">
	<div
		class="flex flex-col mt-8 h-[40rem] w-[26rem] py-3 mx-auto justify-center items-center border-[1px] border-y-gray-500 rounded p-[20px]"
	>
		<div>
			<!-- sign-up header Section -->
			<div
				class="flex mx-auto h-32 justify-center border-[1px] rounded border-gray-700 items-center"
			>
				<div class="flex-1">
					<img
						class="w-40 mb-4 h-40 object-contain"
						src="../assets/logo/logo.png"
						alt="logo"
					/>
				</div>
				<div class="flex-1">
					<h1 class="font-bold text-[19px] text-slate-400 text-left mb-2">
						Welcome to Aladia,
					</h1>
					<p
						class="font-semibold text-[14px] text-stone-400 text-left mb-5 w-4/5"
					>
						Create or access your account from here.
					</p>
				</div>
			</div>

			<!-- Right Section -->
			<div
				class="w-full flex flex-col gap-2 mt-5 items-center rounded-lg shadow-xl"
			>
				<h1 class="font-semibold text-slate-300 mb-2 text-[14px]">
					Enter Your Email
				</h1>
				<form class="flex flex-col w-[92%] max-w-md gap-6">
					<div
						class="group relative flex h-10 w-full rounded transition-all bg-white"
					>
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
					<div
						class="relative flex h-10 w-full items-center justify-center overflow-hidden rounded-md border-white/100 bg-black text-center text-sm pointer-events-none opacity-70 border"
					>
						<div class="gradient absolute inset-0 opacity-50"></div>
						<div class="text-white" @click="">Enter</div>
					</div>
					<div class="or-card flex items-center">
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
				</form>
				<div class="singing-opt w-[92%] space-y-2">
					<div class="mb-8 flex w-full flex-col gap-4">
						<div
							class="flex cursor-pointer items-center justify-center gap-4 rounded border border-white/20 py-1.5 shadow-[0px_3px_6px_#00000000] transition-all hover:bg-white/20 hover:shadow-[0px_3px_6px_#000000] active:scale-95"
						>
							<img src="../assets/brand/google.svg" class="h-6" />
							<div class="w-40 text-white">Continue with Google</div>
						</div>
						<div
							class="flex cursor-pointer items-center justify-center gap-4 rounded border border-white/20 py-1.5 shadow-[0px_3px_6px_#00000000] transition-all hover:bg-white/20 hover:shadow-[0px_3px_6px_#000000] active:scale-95"
							href="/"
						>
							<img src="../assets/brand/fb.svg" class="h-6" />
							<div class="w-40 text-white whitespace-nowrap">
								Continue with Facebook
							</div>
						</div>
						<div
							class="flex cursor-pointer items-center justify-center gap-4 rounded border border-white/20 py-1.5 shadow-[0px_3px_6px_#00000000] transition-all hover:bg-white/20 hover:shadow-[0px_3px_6px_#000000] active:scale-95"
						>
							<img src="../assets/brand/apple.svg" class="h-6" />
							<div class="w-40 text-white">Continue with Apple</div>
						</div>
					</div>

					<div class="cursor-pointer relative top-5 text-center text-white/40">
						Terms &amp; Conditions
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
