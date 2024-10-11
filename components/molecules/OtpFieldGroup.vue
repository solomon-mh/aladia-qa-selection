import { AtomsInputField } from '../../.nuxt/components';
<template>
	<div class="six-box flex gap-2 mb-3">
		<AtomsInputField
			v-for="(input, index) in inputFields"
			:key="index"
			type="text"
			maxlength="1"
			input-classes="otp-box bg-white w-11 h-11 text-center border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-slate-500"
			v-model="inputFields[index].value"
		/>
	</div>
</template>

<script>
import InputField from "../atoms/InputField.vue";

export default {
	name: "OtpInputFields",
	components: {
		InputField,
	},
	data() {
		return {
			inputFields: Array(6).fill({ value: "" }), // Adjust the number for desired fields
		};
	},
};
</script>
