/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				accent: "#9bec00",
				"light-dark": "#151515",
				dark: "#0C0C0C",
				light: "#F5F7F8",
			},
		},
	},
	plugins: [],
};
