/**
 * Seo component props
 * @param {import("$components/page.component").SeoData} props
 * @returns {string}
 */
export function SEO({ title }) {
	return <div x-data={`seo("${title}")`} />;
}
