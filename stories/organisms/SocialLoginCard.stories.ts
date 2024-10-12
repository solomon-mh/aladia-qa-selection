import SocialLoginCard from "../../components/organisms/SocialLoginCard.vue";
export default {
	title: "Components/Organisms/SocialLoginCard",
	component: SocialLoginCard,
	tags: ["autodocs"],
};

// Primary story
export const Primary = {
	render: () => ({
		components: { SocialLoginCard },
		template: `
      <SocialLoginCard>
        <div class="flex items-center justify-center p-4 border rounded bg-gray-800">
          <p class="text-white">Login with Social Media</p>
        </div>
      </SocialLoginCard>
    `,
	}),
};

// Example with multiple buttons
export const WithMultipleButtons = {
	render: () => ({
		components: { SocialLoginCard },
		template: `
      <SocialLoginCard>
        <div class="flex items-center justify-between">
          <button class="bg-blue-500 text-white rounded py-2 px-4">Facebook</button>
          <button class="bg-red-500 text-white rounded py-2 px-4">Google</button>
          <button class="bg-purple-500 text-white rounded py-2 px-4">Twitter</button>
        </div>
      </SocialLoginCard>
    `,
	}),
};

// Example with different content
export const CustomContent = {
	render: () => ({
		components: { SocialLoginCard },
		template: `
      <SocialLoginCard>
        <div class="flex items-center justify-center p-4 border rounded bg-gray-800">
          <p class="text-white">Connect with us on your favorite social platform!</p>
        </div>
      </SocialLoginCard>
    `,
	}),
};
