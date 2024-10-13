<template>
	<div class="six-box flex gap-2 mb-3">
		<AtomsInputField
			v-for="(input, index) in inputFields"
			:key="index"
			type="text"
			maxlength="1"
			input-classes="otp-box bg-white w-11 h-11 text-center border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-slate-500"
			v-model="inputFields[index].value"
			@input="emitOtpValue"
		/>
	</div>
</template>

<script>
import InputField from "../atoms/InputField.vue";

export default {
	name: "OtpFieldGroup",
	components: {
		InputField,
	},
	data() {
		return {
			inputFields: Array.from({ length: 6 }, () => ({ value: "" })),
		};
	},
	methods: {
		emitOtpValue() {
			const otpValue = this.inputFields.map((field) => field.value).join("");
			this.$emit("otp-change", otpValue); // Emit OTP value to parent
		},
	},
};
</script>
