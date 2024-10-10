// Replace your-framework with the name of your framework
import { fn } from "@storybook/test";
import { Button, Meta } from "../.nuxt/components";

const meta: Meta<typeof Button> = {
    component: Button,

    // 👇 Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked
    args: { onClick: fn() },

    tags: ["autodocs"]
};

export default meta;
