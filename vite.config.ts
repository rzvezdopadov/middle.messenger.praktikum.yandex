// import { defineConfig } from "vite";
// import handlebars from "./vite-plugin-handlebars-precompile";

// export default defineConfig({
// 	plugins: [handlebars()],
// });

import { resolve } from "path";
import handlebars from "vite-plugin-handlebars";

export default {
	plugins: [
		handlebars({
			partialDirectory: resolve(__dirname, "src"),
		}),
	],
};
