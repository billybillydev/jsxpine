/**
 * Seo component props
 @type {import("$common/props").JSXComponent<import("$components/page.component").SeoData>}
 */
export function SEO({ title }) {
	return <div x-data={`seo("${title}")`} />;
}
