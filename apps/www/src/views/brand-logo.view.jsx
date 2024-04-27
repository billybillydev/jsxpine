import { Image } from "$components/image.component";

/**
 * Brand Logo view props
 * @param {Pick<import("$components/image.component").ImageProps, "class">} props
 * @returns {string}
 */
export function BrandLogo({ class: className }) {
	return (
		<Image src="/icons/astropine.svg" alt="JSXPine Logo" class={className} />
	);
}
