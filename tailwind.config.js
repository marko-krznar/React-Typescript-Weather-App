/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				"custom-blue-1": "#0298E2",
				"custom-blue-2": "#0288D1",
				"custom-blue-3": "#B3E5FC",
				"custom-blue-4": "#03A9F4",
			},
		},
	},
	plugins: [],
};
