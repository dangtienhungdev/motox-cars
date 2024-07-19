/** @type {import('tailwindcss').Config} */

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

	theme: {
		extend: {
			padding: {
				px80: '80px',
			},
			colors: {
				primary: {
					DEFAULT: '#0B4F87',
					l10: '#2196F3',
				},
				red: {
					DEFAULT: '#D01817',
				},
				gray: {
					DEFAULT: '#83827F',
					l1: '#f8f8f8',
					l10: '#757575',
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

	plugins: [require('tailwind-scrollbar-hide')],

	corePlugins: {
		preflight: false, // <== disable this!
	},
	prefix: 'tw-',
};
