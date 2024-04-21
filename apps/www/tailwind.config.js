import mosiuiMini from "tailwindcss-mosiui-mini";

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/components/**/*.jsx",
		"./src/controllers/**/*.jsx",
		"./src/layouts/**/*.jsx",
		"./src/pages/**/*.jsx",
		"./src/views/**/*.jsx",
	],
	presets: [mosiuiMini]
};
