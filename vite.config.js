import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	base: "/PSALearn/",
	plugins: [react()],
	server: {
		port: 3000,
		proxy: {
			"/api": {
				target: "http://127.0.0.1:8080",
				changeOrigin: true,
			},
		},
		build: {
			outDir: "dist",
			assetsDir: "assets", // Assets will be placed in the dist/assets folder
		},
	},
});
