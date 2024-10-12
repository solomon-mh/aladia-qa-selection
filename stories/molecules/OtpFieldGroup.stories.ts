import InputField from "../../components/atoms/InputField.vue";
import OtpFieldGroup from "../../components/molecules/OtpFieldGroup.vue";

// Define a template for the OTP input fields story
const Template = (args: any) => ({
	components: { OtpFieldGroup, InputField },
	setup() {
		return { args };
	},
	template: `
    <OtpInputFields v-bind="args" />
  `,
});

export default {
	title: "Components/Molecules/OtpFieldGroup",
	component: OtpFieldGroup,
	tags: ["autodocs"],
};

// Default story
export const Default = Template.bind({});
(Default as any).args = {
	// No additional props for now, as the component handles inputFields internally
};
