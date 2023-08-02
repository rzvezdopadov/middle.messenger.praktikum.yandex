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
			partialDirectory: resolve(__dirname, "./src/components/basic"),
		}),
	],
	build: {
		rollupOptions: {
			input: {
				index: resolve(__dirname, "index.html"),
				404: resolve(__dirname, "./src/components/pages/404/404.html"),
				500: resolve(__dirname, "./src/components/pages/500/500.html"),
				auth: resolve(__dirname, "./src/components/pages/auth/auth.html"),
				chats: resolve(__dirname, "./src/components/pages/chats/chats.html"),
				profile: resolve(__dirname, "./src/components/pages/profile/profile.html"),
				profile_edit_pwd: resolve(
					__dirname,
					"./src/components/pages/profile_edit_pwd/profile_edit_pwd.html"
				),
				signin: resolve(__dirname, "./src/components/pages/signin/signin.html"),
			},
		},
	},
};
