import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			padding: {
				px80: '80px',
			},
			colors: {
				primary: {
					DEFAULT: '#0B4F87',
				},
				red: {
					DEFAULT: '#D01817',
				},
				gray: {
					DEFAULT: '#83827F',
					l1: '#f8f8f8',
				},
			},
			fontFamily: {
				sans: ['Plus Jakarta Sans', 'sans-serif'],
			},

			zIndex: {
				'full-screen-loading': '9999999999999', // > toast: 999999999999
				'order-1': '99999999',
				'order-2': '9999999',
				'order-3': '999999',
				'order-4': '99999',
				'order-5': '9999',
				'order-6': '999',
				'order-7': '99',
			},
		},
	},
	plugins: [],
};
export default config;
