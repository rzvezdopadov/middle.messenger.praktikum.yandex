import { defineConfig, Plugin } from "vite";
import { resolve } from "path";
import handlebars from "vite-plugin-handlebars";

export default defineConfig({
	plugins: [
		handlebars({
			partialDirectory: resolve(__dirname, "src/components/basic"),
		}) as unknown as Plugin,
	],

	build: {
		rollupOptions: {
			input: {
				index: resolve(__dirname, "index.html"),
				page404: resolve(__dirname, "src/components/pages/page404/page404.html"),
				page500: resolve(__dirname, "src/components/pages/page500/page500.html"),
				auth: resolve(__dirname, "src/components/pages/auth/auth.html"),
				chats: resolve(__dirname, "src/components/pages/chats/chats.html"),
				profile: resolve(__dirname, "src/components/pages/profile/profile.html"),
				profile_edit_pwd: resolve(
					__dirname,
					"src/components/pages/profile_edit_pwd/profile_edit_pwd.html"
				),
				signin: resolve(__dirname, "src/components/pages/signin/signin.html"),
			},
		},
	},
});
