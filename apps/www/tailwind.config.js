import mosiuiMini from "tailwindcss-mosiui-mini";

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./src/components/**/*.jsx",
		"./src/controllers/**/*.jsx",
		"./src/layouts/**/*.jsx",
		"./src/pages/**/*.jsx",
		"./src/views/**/*.jsx",
	],
	presets: [mosiuiMini]
};
