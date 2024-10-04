/**
 * Seo Modifier component props
 @param {import("./page.component").SeoData} props
 */
export function SeoModifier(props) {
	return <div x-data={`seo(${JSON.stringify(props)})`} />;
}
