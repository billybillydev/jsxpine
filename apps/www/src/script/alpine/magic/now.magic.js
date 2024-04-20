/**
 *  Now alpine magic
 * @returns {(locales?: Intl.LocalesArgument, options?: Intl.DateTimeFormatOptions) => string}
 */
export function nowMagic() {
	return (locales, options) => new Date().toLocaleDateString(locales, options);
}
