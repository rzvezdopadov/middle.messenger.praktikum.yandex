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
			helpers: {
				main({ fn }) {
					return `<!DOCTYPE html>
					<html lang="ru">
						<head>
							<meta charset="UTF-8" />
							<meta http-equiv="X-UA-Compatible" content="IE=edge" />
							<meta name="viewport" content="width=device-width, initial-scale=1.0" />
							<title>Чат</title>
							<link rel="stylesheet" href="/src/styles/styles.scss" />
							<link rel="icon" type="image/svg+xml" href="/vite.svg" />
							
						</head>
						<body>
							<div id="root">${fn(this)}</div>
						</body>
					</html>`;
				},
			},
		}),
	],
	build: {
		rollupOptions: {
			input: {
				index: resolve(__dirname, "index.html"),
				page404: resolve(__dirname, "./src/components/pages/page404/page404.html"),
				page500: resolve(__dirname, "./src/components/pages/page500/page500.html"),
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
