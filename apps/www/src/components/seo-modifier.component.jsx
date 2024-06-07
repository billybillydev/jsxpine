/**
 * Seo Modifier component props
 @param {import("$components/page.component").SeoData} props
 */
export function SeoModifier(props) {
	return <div x-data={`seo(${JSON.stringify(props)})`} />;
}
