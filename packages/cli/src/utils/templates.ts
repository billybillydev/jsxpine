// export const STYLES = `
// @tailwind base;
// @tailwind components;
// @tailwind utilities;
 
// @layer base {
//   :root {
//     --background: 0 0% 100%;
//     --foreground: 222.2 47.4% 11.2%;
 
//     --muted: 210 40% 96.1%;
//     --muted-foreground: 215.4 16.3% 46.9%;
 
//     --popover: 0 0% 100%;
//     --popover-foreground: 222.2 47.4% 11.2%;
 
//     --card: 0 0% 100%;
//     --card-foreground: 222.2 47.4% 11.2%;
 
//     --border: 214.3 31.8% 91.4%;
//     --input: 214.3 31.8% 91.4%;
 
//     --primary: 222.2 47.4% 11.2%;
//     --primary-foreground: 210 40% 98%;
 
//     --secondary: 210 40% 96.1%;
//     --secondary-foreground: 222.2 47.4% 11.2%;
 
//     --accent: 210 40% 96.1%;
//     --accent-foreground: 222.2 47.4% 11.2%;
 
//     --destructive: 0 92% 38%;
// 		--destructive-foreground: 210 40% 98%;
 
//     --ring: 215 20.2% 65.1%;
 
//     --radius: 0.5rem;
//   }
 
//   .dark {
//     --background: 224 71% 4%;
//     --foreground: 213 31% 91%;
 
//     --muted: 223 47% 11%;
//     --muted-foreground: 215.4 16.3% 56.9%;
 
//     --popover: 224 71% 4%;
//     --popover-foreground: 215 20.2% 65.1%;
 
//     --card: 224 71% 4%;
//     --card-foreground: 213 31% 91%;
 
//     --border: 216 34% 17%;
//     --input: 216 34% 17%;
 
//     --primary: 210 40% 98%;
//     --primary-foreground: 222.2 47.4% 1.2%;
 
//     --secondary: 222.2 47.4% 11.2%;
//     --secondary-foreground: 210 40% 98%;
 
//     --accent: 216 34% 17%;
//     --accent-foreground: 210 40% 98%;
 
//     --destructive: 359 51% 48%;
// 		--destructive-foreground: 210 40% 98%;
 
//     --ring: 216 34% 17%;
 
//     --radius: 0.5rem;
//   }
// }
 
// @layer base {
//   * {
//     @apply border-border;
//   }
//   body {
//     @apply bg-background text-foreground;
//     font-feature-settings: "rlig" 1, "calt" 1;
//   }
// }`;

export const STYLES = `
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

* {
  box-sizing: border-box;
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.btn-circle {
  @apply min-w-[4rem] max-w-lg rounded-full flex items-center justify-center p-0 before:pt-[100%];
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
input[type='number'] {
  -moz-appearance: textfield;
}
`;

export const TAILWIND_CONFIG_WITH_VARIABLES = `import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
const config = {
	darkMode: ["class"],
  content: ["src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue,css,md,mdx}"],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px"
			}
		},
		extend: {
			colors: {
				border: "hsl(var(--border) / <alpha-value>)",
				input: "hsl(var(--input) / <alpha-value>)",
				ring: "hsl(var(--ring) / <alpha-value>)",
				background: "hsl(var(--background) / <alpha-value>)",
				foreground: "hsl(var(--foreground) / <alpha-value>)",
				primary: {
					DEFAULT: "hsl(var(--primary) / <alpha-value>)",
					foreground: "hsl(var(--primary-foreground) / <alpha-value>)"
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
					foreground: "hsl(var(--secondary-foreground) / <alpha-value>)"
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
					foreground: "hsl(var(--destructive-foreground) / <alpha-value>)"
				},
				muted: {
					DEFAULT: "hsl(var(--muted) / <alpha-value>)",
					foreground: "hsl(var(--muted-foreground) / <alpha-value>)"
				},
				accent: {
					DEFAULT: "hsl(var(--accent) / <alpha-value>)",
					foreground: "hsl(var(--accent-foreground) / <alpha-value>)"
				},
				popover: {
					DEFAULT: "hsl(var(--popover) / <alpha-value>)",
					foreground: "hsl(var(--popover-foreground) / <alpha-value>)"
				},
				card: {
					DEFAULT: "hsl(var(--card) / <alpha-value>)",
					foreground: "hsl(var(--card-foreground) / <alpha-value>)"
				}
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)"
			},
			fontFamily: {
				sans: [...fontFamily.sans]
			}
		}
	},
};

export default config;
`;

export const TAILWIND_CONFIG = `
import mosiuiMini from 'tailwindcss-mosiui-mini';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue,css,md,mdx}"],
  presets: [mosiuiMini],
  plugins: [],
};

`;

export const APP_SCRIPT = `
import Alpine from "./alpine";

window.Alpine = Alpine;

window.Alpine.start();
`;

export const ALPINE_JS = `
import Alpine from "alpinejs";
import focus from "@alpinejs/focus";
import collapse from "@alpinejs/collapse";
import manage from "alpinejs-manage";

import { capitalizeDirective } from "$scripts/alpine/directive/capitalize.directive";
import { logDirective } from "$scripts/alpine/directive/log.directive";
import { clipboardMagic } from "$scripts/alpine/magic/clipboard.magic";
import { nowMagic } from "$scripts/alpine/magic/now.magic";


/* Directive */
Alpine.directive("capitalize", capitalizeDirective);
Alpine.directive("log", logDirective);

/* Magic */
Alpine.magic("clipboard", clipboardMagic);
Alpine.magic("now", nowMagic);

/* Plugins */
Alpine.plugin(focus);
Alpine.plugin(collapse);
Alpine.plugin(manage);

export default Alpine;
`;

// export const UTILS = `import { type ClassValue, clsx } from "clsx";
// import { twMerge } from "tailwind-merge";
// import { cubicOut } from "svelte/easing";
// import type { TransitionConfig } from "svelte/transition";

// export function cn(...inputs: ClassValue[]) {
//     return twMerge(clsx(inputs));
// }

// type FlyAndScaleParams = {
//     y?: number;
//     x?: number;
//     start?: number;
//     duration?: number;
// };

// export const flyAndScale = (
//     node: Element,
//     params: FlyAndScaleParams = { y: -8, x: 0, start: 0.95, duration: 150 }
// ): TransitionConfig => {
//     const style = getComputedStyle(node);
//     const transform = style.transform === "none" ? "" : style.transform;

//     const scaleConversion = (
//         valueA: number,
//         scaleA: [number, number],
//         scaleB: [number, number]
//     ) => {
//         const [minA, maxA] = scaleA;
//         const [minB, maxB] = scaleB;

//         const percentage = (valueA - minA) / (maxA - minA);
//         const valueB = percentage * (maxB - minB) + minB;

//         return valueB;
//     };

//     const styleToString = (
//         style: Record<string, number | string | undefined>
//     ): string => {
//         return Object.keys(style).reduce((str, key) => {
//             if (style[key] === undefined) return str;
//             return str + \`\${key}:\${style[key]};\`;
//         }, "");
//     };

//     return {
//         duration: params.duration ?? 200,
//         delay: 0,
//         css: (t) => {
//             const y = scaleConversion(t, [0, 1], [params.y ?? 5, 0]);
//             const x = scaleConversion(t, [0, 1], [params.x ?? 0, 0]);
//             const scale = scaleConversion(t, [0, 1], [params.start ?? 0.95, 1]);

//             return styleToString({
//                 transform: \`\${transform} translate3d(\${x}px, \${y}px, 0) scale(\${scale})\`,
//                 opacity: t
//             });
//         },
//         easing: cubicOut
//     };
// };`;
