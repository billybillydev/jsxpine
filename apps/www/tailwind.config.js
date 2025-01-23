import plugin from "tailwindcss/plugin";
import colors from "tailwindcss/colors";
import { fontSize } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./src/components/**/*.jsx",
		"./src/controllers/**/*.jsx",
		"./src/layouts/**/*.jsx",
		"./src/pages/**/*.jsx",
		"./src/scripts/alpine/data/*.js",
		"./src/views/**/*.jsx"
	],
	darkMode: "selector",
	safelist: [{ pattern: /(size)-./ }],
	theme: {
		extend: {
			fontFamily: {
				sans: [
					"Inter",
					"ui-sans-serif",
					"system-ui",
					"sans-serif",
					"Apple Color Emoji",
					"Segoe UI Emoji",
					"Segoe UI Symbol",
					"Noto Color Emoji"
				]
			},
			colors: {
				base: {
					DEFAULT: colors.slate[500],
					dark: colors.slate[800],
					light: colors.slate[300]
				},
				background: "hsla(var(--background))",
				foreground: "hsla(var(--foreground))",
				primary: {
					"dark-1": "hsla(var(--primary-dark-1))",
					"dark-2": "hsla(var(--primary-dark-2))",
					DEFAULT: "hsla(var(--primary))",
					foreground: "hsla(var(--primary-foreground))",
					"light-1": "hsla(var(--primary-light-1))",
					"light-2": "hsla(var(--primary-light-2))"
				},
				secondary: {
					dark: "hsla(var(--secondary-dark))",
					DEFAULT: "hsla(var(--secondary))",
					foreground: "hsla(var(--secondary-foreground))",
					light: "hsla(var(--secondary-light))"
				},
				muted: {
					DEFAULT: "hsla(var(--muted))",
					foreground: "hsla(var(--muted-foreground))"
				},
				accent: {
					DEFAULT: "hsla(var(--accent))",
					foreground: "hsla(var(--accent-foreground))"
				},
				success: {
					dark: "hsla(var(--success-dark))",
					DEFAULT: "hsla(var(--success))",
					foreground: "hsla(var(--success-foreground))",
					light: "hsla(var(--success-light))"
				},
				danger: {
					dark: "hsla(var(--danger-dark))",
					DEFAULT: "hsla(var(--danger))",
					foreground: "hsla(var(--danger-foreground))",
					light: "hsla(var(--danger-light))"
				},
				info: {
					dark: "hsla(var(--info-dark))",
					DEFAULT: "hsla(var(--info))",
					foreground: "hsla(var(--info-foreground))",
					light: "hsla(var(--info-light))"
				},
				warning: {
					dark: "hsla(var(--warning-dark))",
					DEFAULT: "hsla(var(--warning))",
					foreground: "hsla(var(--warning-foreground))",
					light: "hsla(var(--warning-light))"
				},
				overlay: {
					dark: "hsla(var(--overlay-dark))",
					light: "hsla(var(--overlay-light))",
				}
			},
			fontSize: { md: fontSize.base },
			screens: {
				xs: "375px"
			}
		}
	},
	plugins: [
		plugin(function ({
			matchUtilities,
			theme
		}) {
			matchUtilities(
				{
					size: (/** @type {string} */ value) => ({
						width: value,
						height: value
					})
				},
				{
					values: theme("spacing")
				}
			);
		})
	]
};
