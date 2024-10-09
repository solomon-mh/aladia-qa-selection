<template>
	<div class="mb-8 flex w-full flex-col gap-4">
		<SocialLoginButton
			icon="~/assets/brand/google.svg"
			text="Continue with Google"
			link="/google-login"
		/>
		<SocialLoginButton
			icon="~/assets/brand/fb.svg"
			text="Continue with Facebook"
			link="/facebook-login"
		/>
		<SocialLoginButton
			icon="~/assets/brand/apple.svg"
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
