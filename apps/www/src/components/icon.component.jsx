import { icons } from "@iconify-json/ri/icons.json";
import clsx from "clsx";
import { SVG } from "./svg.component";

/**
 * @typedef {`ri.${keyof typeof import("@iconify-json/ri/icons.json")["icons"]}`} IconName
 */

/**
 * @typedef IconProps
 * @type {{size?: number, name: IconName, color?: string, applyDefsId?: string} & import("./svg.component").SVGProps}
 */

/**
 * Icon component props
 * @param {Omit<IconProps, "viewBox">} props
 */
export function Icon({
	children,
	size = 4,
	name,
	applyDefsId,
	class: className,
	...restProps
}) {
	const iconType = name.split(".")[0];
	const iconName = /** @type {keyof typeof icons} */ (name.split(".")[1]);
	if (!icons[iconName]) {
		console.error(`"${name}" is not an icon from iconify/${iconType}`);
		return "";
	}
	const { body } = icons[iconName];

	// The purpose is to retrieve value from d attribute
	let retrieveDValue = "";
	const bodyMatch = body.match(/d=".+"/g);
	const retrieveDAttribute = bodyMatch ? bodyMatch[0] : "";
	if (retrieveDAttribute) {
		retrieveDValue = retrieveDAttribute.slice(3, -2);
	}

	return (
		<SVG
			viewBox={"0 0 24 24"}
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
