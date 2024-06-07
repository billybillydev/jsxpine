/**
 * Seo component props
 @param {import("$components/page.component").SeoData & { isHTMX?: boolean }} props
 */
export function SeoModifier({ isHTMX, ...restProps }) {
	return <div x-data={`seo(${JSON.stringify(restProps)})`} />;
}
