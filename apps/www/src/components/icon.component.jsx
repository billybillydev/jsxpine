import { SVG } from "./svg.component";
import { icons } from "@iconify-json/ri";
import { iconToSVG, getIconData } from "@iconify/utils";
import clsx from "clsx";

/**
 * @typedef IconProps
 * @type {{size?: number, name: import("../common/types").IconKeyType, color?: string, applyDefsId?: string} & import("./svg.component").SVGProps}
 */

/**
 * Icon component props
 * @type {import("../common/props").JSXComponent<Omit<IconProps, "viewBox">>}
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
		console.error("Icon data is null or undefined");
		return "";
	}
	const iconSvg = iconToSVG(iconData, {
		height: "auto"
	});
	if (!iconSvg) {
		console.error(`Icon "${name}" is missing`);
		return "";
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
			class={clsx(`size-${size}`, className)}
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
