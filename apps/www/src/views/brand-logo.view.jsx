import { Image } from "$components/image.component";

/**
 * Brand Logo view props
 * @param {Pick<import("$components/image.component").ImageProps, "class">} props
 */
export function BrandLogo({ class: className }) {
	return (
		<Image src="/public/icons/logo_2.svg" alt="JSXPine Logo" class={className} />
	);
}
