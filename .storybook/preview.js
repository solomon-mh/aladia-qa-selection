// .storybook/preview.js

import { setup } from "@storybook/vue3";

setup((app) => {
	app.use(MyPlugin);
	app.component("my-component", MyComponent);
	app.mixin({
		/* My mixin */
	});
});
