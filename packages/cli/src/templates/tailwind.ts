export type BaseColorType = "slate" | "gray" | "zinc" | "neutral" | "stone";

export const STYLES = `
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";

* {
	box-sizing: border-box;
	scroll-behavior: smooth;
}

html,
body {
	@apply bg-white dark:bg-gray-950;

	@media (prefers-color-scheme: dark) {
		color-scheme: dark;
	}
}

@layer base {
	:root {
		--background: 210, 40%, 98%;
		--foreground: 224, 71%, 4%;
		--primary: 243, 75%, 59%;
		--primary-dark-1: 244, 55%, 41%;
		--primary-dark-2: 244, 47%, 20%;
		--primary-foreground: 210, 40%, 98%;
		--primary-light-1: 228, 96%, 89%;
		--primary-light-2: 226, 100%, 97%;
		--secondary: 0, 0%, 22%;
		--secondary-dark: 0, 0%, 7%;
		--secondary-foreground: 210, 40%, 98%;
		--secondary-light: 216, 12%, 84%;
		--muted: 210, 40%, 96%;
		--muted-foreground: 215, 16%, 47%;
		--accent: 210, 40%, 96%;
		--accent-foreground: 222, 47%, 11%;
		--success: 142, 71%, 45%;
		--success-dark: 142, 72%, 29%;
		--success-light: 142, 77%, 73%;
		--success-foreground: 210, 40%, 98%;
		--danger: 0, 84%, 60%;
		--danger-dark: 0, 74%, 42%;
		--danger-light: 0, 96%, 89%;
		--danger-foreground: 210, 40%, 98%;
		--info: 217, 91%, 60%;
		--info-dark: 226, 71%, 40%;
		--info-light: 212, 96%, 78%;
		--info-foreground: 210, 40%, 98%;
		--warning: 48, 96%, 53%;
		--warning-dark: 41, 96%, 40%;
		--warning-light: 53, 98%, 77%;
		--warning-foreground: 224, 71%, 4%;
		--overlay-dark: 0, 0%, 0%;
		--overlay-light: 0, 0%, 100%;
	}

	.dark {
		--background: 224, 71%, 4%;
		--foreground: 210, 40%, 98%;
		--muted: 215, 16%, 47%;
		--muted-foreground: 210, 40%, 96%;
		--accent: 222, 47%, 11%;
		--accent-foreground: 210, 40%, 96%;
	}

	h1 {
		@apply text-3xl;
	}

	h2 {
		@apply text-xl;
	}

	h3 {
		@apply text-lg;
	}

	h4 {
		@apply text-md;
	}

	h5 {
		@apply text-sm;
	}

	h6 {
		@apply text-xs;
	}

	body {
		@apply bg-background text-foreground;
	}
}

@layer components {
	.btn {
		display: flex;
		justify-content: center;
		align-items: center;
		outline-style: none;
		transition: all 250ms;

		@apply text-background bg-base;

		&:hover {
			@apply bg-base/75;
		}

		&:disabled {
			color: var(--muted-foreground);
			opacity: 0.75;
			cursor: not-allowed;

			@apply bg-base-light;
		}
	}

	.btn-outlined {
		display: flex;
		justify-content: center;
		align-items: center;
		outline-style: none;
		transition: all 250ms;

		@apply bg-base-light text-base-dark;

		&:hover {
			@apply bg-base-dark text-base-light;
		}
	}

	.btn-inversed {
		box-sizing: border-box;
		display: flex;
		justify-content: center;
		align-items: center;
		outline-style: none;
		transition: color 250ms;

		@apply border border-accent-foreground text-accent-foreground bg-background;

		&:hover {
			@apply border-transparent bg-accent-foreground text-background;
		}
	}

	/* Primary Button Variants */
	.btn-primary {
		color: hsla(var(--primary-foreground));
		background-color: hsla(var(--primary));

		&:hover {
			background-color: hsla(var(--primary), 0.75);
		}
	}

	.btn-primary-outlined {
		color: hsla(var(--primary-dark-1));
		background-color: hsla(var(--primary-light-1));

		&:hover {
			background-color: hsla(var(--primary));
			color: hsla(var(--primary-light-1));
		}
	}
	.btn-primary-inversed {
		color: hsla(var(--primary));
		border: 1px solid hsla(var(--primary));
		background-color: transparent;

		&:hover {
			background-color: hsla(var(--primary), 0.15);
			border: 1px solid transparent;
		}
	}

	/* Secondary Button Variants */
	.btn-secondary {
		color: hsla(var(--secondary-foreground));
		background-color: hsla(var(--secondary));

		&:hover {
			background-color: hsla(var(--secondary), 0.75);
		}
	}

	.btn-secondary-outlined {
		color: hsla(var(--secondary-dark));
		background-color: hsla(var(--secondary-light));

		&:hover {
			background-color: hsla(var(--secondary));
			color: hsla(var(--secondary-light));
		}
	}

	.btn-secondary-inversed {
		color: hsla(var(--foreground));
		border: 1px solid hsla(var(--secondary));
		background-color: transparent;

		&:hover {
			background-color: hsla(var(--secondary), 0.15);
			border: 1px solid transparent;
		}
	}

	/* Success Button Variants */
	.btn-success {
		color: hsla(var(--success-foreground));
		background-color: hsla(var(--success));

		&:hover {
			background-color: hsla(var(--success), .75);
		}
	}

	.btn-success-outlined {
		color: hsla(var(--success-dark));
		background-color: hsla(var(--success-light));

		&:hover {
			background-color: hsla(var(--success));
			color: hsla(var(--success-light));
		}
	}

	.btn-success-inversed {
		color: hsla(var(--success));
		border: 1px solid hsla(var(--success));
		background-color: transparent;

		&:hover {
			background-color: hsla(var(--success), 0.15);
			border: 1px solid transparent;
		}
	}

	/* Danger Button Variants */
	.btn-danger {
		color: hsla(var(--danger-foreground));
		background-color: hsla(var(--danger));

		&:hover {
			background-color: hsla(var(--danger), .75);
		}
	}

	.btn-danger-outlined {
		color: hsla(var(--danger-dark));
		background-color: hsla(var(--danger-light));

		&:hover {
			background-color: hsla(var(--danger));
			color: hsla(var(--danger-foreground));
		}
	}

	.btn-danger-inversed {
		color: hsla(var(--danger));
		border: 1px solid hsla(var(--danger));
		background-color: transparent;

		&:hover {
			background-color: hsla(var(--danger), 0.15);
			border: 1px solid transparent;
		}
	}

	/* Info Button Variants */
	.btn-info {
		color: hsla(var(--info-foreground));
		background-color: hsla(var(--info));

		&:hover {
			background-color: hsla(var(--info), .75);
		}
	}

	.btn-info-outlined {
		color: hsla(var(--info-dark));
		background-color: hsla(var(--info-light));

		&:hover {
			background-color: hsla(var(--info));
			color: hsla(var(--info-foreground));
		}
	}

	.btn-info-inversed {
		color: hsla(var(--info));
		border: 1px solid hsla(var(--info));
		background-color: transparent;

		&:hover {
			background-color: hsla(var(--info), 0.25);
			border: 1px solid transparent;
		}
	}

	/* Warning Button Variants */
	.btn-warning {
		color: hsla(var(--warning-foreground));
		background-color: hsla(var(--warning));

		&:hover {
			background-color: hsla(var(--warning), .75);
		}
	}

	.btn-warning-outlined {
		color: hsla(var(--warning-dark));
		background-color: hsla(var(--warning-light));

		&:hover {
			background-color: hsla(var(--warning));
			color: hsla(var(--warning-foreground));
		}
	}

	.btn-warning-inversed {
		color: hsla(var(--warning-dark));
		border: 1px solid hsla(var(--warning));
		background-color: transparent;

		&:hover {
			background-color: hsla(var(--warning), 0.15);
			border: 1px solid transparent;
		}
	}

	.link {
		font-weight: medium;

		&:hover {
			text-decoration-thickness: 2px;
			text-decoration: underline;
			text-underline-offset: 4px;
			cursor: pointer;
		}
	}
	.link-primary {
		color: hsla(var(--primary));
	}
	.link-secondary {
		color: hsla(var(--secondary));
	}
	.link-success {
		color: hsla(var(--success));
	}
	.link-danger {
		color: hsla(var(--danger));
	}
	.link-info {
		color: hsla(var(--info));
	}
	.link-warning {
		color: hsla(var(--warning));
	}

	/* Input */
	.input {
		width: 100%;
		padding: 0.25rem 0.5rem;
		color: hsla(var(--foreground));
		border: 1px solid hsla(var(--muted-foreground));
		border-radius: 0.25rem;
		background-color: ligthdark(#fff, hsla(var(--foreground)));
		position: relative;

		& > input {
			background-color: inherit;
			color: inherit;

			&:disabled {
				opacity: 50;
				cursor: not-allowed;
			}

			&::placeholder {
				color: hsla(var(--muted-foreground));
			}

			/* Because calendar-picker-icon doesn't change with theme toggle */
			&:is([type="date"], [type="time"])::-webkit-calendar-picker-indicator {
				display: none;
			}
		}
	}

	.input-primary:focus {
		border: 2px solid hsla(var(--primary));
	}

	.input-secondary:focus {
		border: 2px solid hsla(var(--secondary));
	}

	.input-success:focus {
		border: 2px solid hsla(var(--success));
	}

	.input-danger:focus {
		border: 2px solid hsla(var(--danger));
	}

	.input-warning:focus {
		border: 2px solid hsla(var(--warning));
	}

	.input-info:focus {
		border: 2px solid hsla(var(--info));
	}

	:where(textarea, select) {
		background-color: lightdark(#fff, hsla(var(--background)));

		&::placeholder {
			color: hsla(var(--accent-foreground));
		}
	}
}

[data-loading] {
	display: none;
}

.htmx-indicator {
	display: none;
}
.htmx-request .htmx-indicator {
	display: flex;
}
.htmx-request.htmx-indicator {
	display: flex;
}
.htmx-request #content {
	display: none;
}
.htmx-request#content {
	display: none;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
	-webkit-appearance: none;
	margin: 0;
}

/* Firefox */
input[type="number"] {
	-moz-appearance: textfield;
}

`;

export const TAILWIND_CONFIG_WITH_VARIABLES = (baseColor: BaseColorType = "slate") => `
import plugin from "tailwindcss/plugin";
import colors from "tailwindcss/colors";
import { fontSize } from "tailwindcss/defaultTheme";

// Feel free to customize it as you wish.

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,mdx,svelte,ts,tsx,vue}"],
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
					DEFAULT: colors.${baseColor}[500],
					dark: colors.${baseColor}[800],
					light: colors.${baseColor}[300]
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

`;