import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';

// https://vitejs.dev/config/
export default defineConfig({
	base: process.env.VITE_BASE_URL,
	plugins: [
		react(),
		createHtmlPlugin({
			inject: {
				data: {
					baseUrl: process.env.VITE_BASE_URL,
				},
			},
		}),
	],
	// alias config
	resolve: {
		alias: {
			'@': '/src',
		},
	},
	build: {
		rollupOptions: {
			input: {
				main: './index.html',
			},
		},
		outDir: 'dist',
	},
});
