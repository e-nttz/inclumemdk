import { defineConfig } from "vite";

import path from "path";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		svgr(),
		VitePWA({
			manifest: {
				name: "Inclume",
				short_name: "Inclume",
				start_url: "/",
				background_color: "#ffffff",
				theme_color: "#000000",
				display: "fullscreen",
				icons: [
					{
						src: "/favicon.png",
						sizes: "512x512",
						type: "image/png",
					},
				],
			},
		}),
	],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"), // Alias pour le dossier 'src',
			"@/types": path.resolve(__dirname, "./src/types"), // Alias pour le dossier 'src/types',
		},
	},
});
