<script setup lang="ts">
import { ref, onMounted } from "vue";
import SubmitButton from "../../components/atoms/SubmitButton.vue";
import InputBox from "~/components/molecules/InputBox.vue";
import Header from "~/components/organisms/Header.vue";
import { useRoute, useRouter } from "vue-router";
import { useValidation } from "~/composables/useValidation"; // Adjust the path according to your structure

const email = ref<string>("");
const name = ref<string>("");
const surname = ref<string>("");
const password = ref<string>("");
const confirmPassword = ref<string>("");

const route = useRoute();
const router = useRouter();
// Extract validation functions
const {
	validateEmail,
	validateName,
	validateSurname,
	validatePassword,
	validateConfirmPassword,
} = useValidation();

const emailError = ref<string | null>(null);
const nameError = ref<string | null>(null);
const surnameError = ref<string | null>(null);
const passwordError = ref<string | null>(null);
const confirmPasswordError = ref<string | null>(null);

onMounted(() => {
	const emailFormQuery = route.query.email as string;
	if (emailFormQuery) {
		email.value = emailFormQuery ?? "test@gmail.com";
	}
});

// Form submission handler
const handleSubmit = (e: any) => {
	// Validate fields
	emailError.value = validateEmail(email.value);
	nameError.value = validateName(name.value);
	surnameError.value = validateSurname(surname.value);
	passwordError.value = validatePassword(password.value);
	confirmPasswordError.value = validateConfirmPassword(
		password.value,
		confirmPassword.value
	);

	// Check if there are any errors
	if (
		!emailError.value &&
		!nameError.value &&
		!surnameError.value &&
		!passwordError.value &&
		!confirmPasswordError.value
	) {
		// Proceed with form submission (e.g., redirect or API call)
		alert("Form submitted successfully!");
		router.push({ path: "/login/verification" });
	} else {
		// alert("Please fill the form correctly.");
		// e.preventDefault();
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
				img-classes="w-32 h-24 opacity-85"
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
					I accept
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
				<form
					@submit.prevent="handleSubmit"
					class="flex flex-col w-[92%] max-w-md gap-4"
				>
					<div class="space-y-0">
						<InputBox
							class="h-full flex-1 rounded bg-transparent text-sm text-black outline-none transition-all"
							icon="fa-solid fa-user"
							autocomplete="off"
							placeholder="Name"
							type="text"
							v-model="name"
						/>
						<span
							v-if="nameError"
							class="text-red-500 text-xs block min-h-[0.5rem]"
							>{{ nameError }}</span
						>
					</div>
					<div class="space-y-0">
						<InputBox
							class="h-full flex-1 rounded bg-transparent text-sm text-black outline-none transition-all"
							icon="fa-solid fa-user"
							autocomplete="off"
							placeholder="Surname"
							type="text"
							v-model="surname"
						/>
						<span
							v-if="surnameError"
							class="text-red-500 text-xs block min-h-[1rem]"
							>{{ surnameError }}</span
						>
					</div>
					<InputBox
						class="h-full flex-1 rounded bg-transparent text-sm text-black outline-none transition-all"
						icon="fa-solid fa-envelope"
						readonly
						autocomplete="off"
						:disabled="email.length > 0"
						placeholder="solomon.muhye.wd@gmail.com"
						type="text"
						v-model="email"
					/>
					<span
						v-if="emailError"
						class="text-red-500 text-xs block min-h-[1rem]"
						>{{ emailError }}</span
					>
					<div class="space-y-0">
						<InputBox
							class="h-full flex-1 rounded bg-transparent text-sm text-black outline-none transition-all"
							icon="fa-solid fa-key"
							autocomplete="off"
							placeholder="Password"
							type="password"
							v-model="password"
						/>
						<span
							v-if="passwordError"
							class="text-red-500 text-xs block min-h-[1rem]"
							>{{ passwordError }}</span
						>
					</div>
					<div class="space-y-0">
						<InputBox
							class="h-full flex-1 rounded bg-transparent text-sm text-black outline-none transition-all"
							icon="fa-solid fa-key"
							autocomplete="off"
							placeholder="Confirm Password"
							type="password"
							v-model="confirmPassword"
						/>
						<span
							v-if="confirmPasswordError"
							class="text-red-500 text-xs block min-h-[1rem]"
							>{{ confirmPasswordError }}</span
						>
					</div>
					<SubmitButton button-text="Enter" :onClick="handleSubmit" />
				</form>
			</div>
		</div>
	</TemplatesAuthCard>
</template>
