import { SVG } from "$pages/components/svg.component";
import { icons } from "@iconify-json/ri";
import { iconToSVG, getIconData } from "@iconify/utils";
import clsx from "clsx";

/**
 * @typedef IconProps
 * @type {{size?: number, name: string, color?: string, applyDefsId?: string} & import("$pages/components/svg.component").SVGProps}
 */

/**
 * Icon component props
 * @type {import("$common/props").JSXComponent<Omit<IconProps, "viewBox">>}
 */
export function Icon(props) {
	const {
		children,
		size = 4,
		name,
		applyDefsId,
		class: className,
		...restProps
	} = props;
	const iconData = getIconData(icons, name);
	if (!iconData) {
		throw new Error("Icon data is null or undefined");
	}
	const iconSvg = iconToSVG(iconData, {
		height: "auto"
	});
	if (!iconSvg) {
		throw new Error(`Icon "${name}" is missing`);
	}
	const {
		attributes: { viewBox },
		body
	} = iconSvg;

	// The purpose is to retrieve value from d attribute
	let retrieveDValue = "";
	const bodyMatch = body.match(/d=".+"/g);
	const retrieveDAttribute = bodyMatch ? bodyMatch[0] : "";
	if (retrieveDAttribute) {
		retrieveDValue = retrieveDAttribute.slice(3, -2);
	}
	return (
		<SVG
			viewBox={viewBox}
			{...restProps}
			class={clsx(`w-${size} h-${size}`, `size-${size}`, className)}
		>
			{children}
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				fill={applyDefsId ? `url(#${applyDefsId})` : "currentColor"}
				d={retrieveDValue}
			/>
		</SVG>
	);
}
