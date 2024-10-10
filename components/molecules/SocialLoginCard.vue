<template>
	<div class="mb-8 flex w-full flex-col gap-4">
		<AtomsSocialLoginButton
			icon="/brand/google.svg"
			text="Continue with Google"
			link="/google-login"
		/>
		<AtomsSocialLoginButton
			icon="/brand/fb.svg"
			text="Continue with Facebook"
			link="/facebook-login"
		/>
		<AtomsSocialLoginButton
			icon="/brand/apple.svg"
			text="Continue with Apple"
			link="/apple-login"
		/>
	</div>
</template>

<script>
export default {
	name: "SocialLoginCard",
};
</script>
