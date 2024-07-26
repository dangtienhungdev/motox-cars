import { createHtmlPlugin } from 'vite-plugin-html';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

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
});
