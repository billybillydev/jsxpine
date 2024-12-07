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
