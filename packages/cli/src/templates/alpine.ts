export const APP_SCRIPT = `
import Alpine from "./alpine";

window.Alpine = Alpine;

window.Alpine.start();
`;

export const setAlpinejsPath = (path: string) => `
import Alpine from "alpinejs";
import focus from "@alpinejs/focus";
import collapse from "@alpinejs/collapse";
import manage from "alpinejs-manage";

import { capitalizeDirective } from "${path}/directive/capitalize.directive";
import { logDirective } from "${path}/directive/log.directive";
import { clipboardMagic } from "${path}/magic/clipboard.magic";
import { nowMagic } from "${path}/magic/now.magic";

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

export const globalDTSFile = `
import { Alpine as AlpineType } from "alpinejs";

declare global {
	var Alpine: AlpineType;

	interface Window {
		Alpine: AlpineType;
	}
}
`;


export const alpineDTSFile = `
import "alpinejs";

declare module "alpinejs" {
	interface Magics<T> {
		$clipboard: (subject: string) => Promise<void>;
		$now: (
			locales?: Intl.LocalesArgument,
			options?: Intl.DateTimeFormatOptions
		) => string;
	}
}
`;
