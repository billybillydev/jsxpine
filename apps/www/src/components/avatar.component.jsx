import { specificSizes } from "$common/types";
import { Image } from "$components/image.component";
import { tailwindThemeConfig } from "$config/design";
import clsx from "clsx";

/**
 * @typedef AvatarProps
 * @type {{ image?: import("$components/image.component").ImageType, fallbackText?: string, color?: import("$common/types").ThemeColorType | { background: string, text: string }, size?: string} & import("$common/props").HTMLTag}
 */

/**
 * Avatar component props
 * @type {import("$common/props").JSXComponent<AvatarProps>}
 */
export function Avatar(props) {
	const minSize = "8";
	const { color, image, fallbackText, size = minSize } = props;
	/**
	 * @type {Map<import("$common/types").ThemeColorType, { background: string; text: string }>}
	 */
	const colorMap = new Map([
		[
			"primary",
			{
				background: "bg-primary-300 border-primary-500",
				text: "text-primary-700"
			}
		],
		[
			"secondary",
			{ background: "bg-slate-300 border-secondary", text: "text-secondary" }
		],
		[
			"success",
			{
				background: "bg-success-300 border-success-500",
				text: "text-success-700"
			}
		],
		[
			"danger",
			{ background: "bg-danger-300 border-danger-500", text: "text-danger-700" }
		],
		[
			"info",
			{ background: "bg-info-300 border-info-500", text: "text-info-700" }
		],
		[
			"warning",
			{
				background: "bg-warning-300 border-warning-500",
				text: "text-warning-700"
			}
		]
	]);

	const backgroundColor =
		typeof color === "string"
			? colorMap.get(color)?.background
			: color?.background ?? "bg-slate-200 border-slate-700";
	const textColor =
		typeof color === "string" ? colorMap.get(color)?.text : color?.text ?? "text-slate-700";

	let width = tailwindThemeConfig.width[size];
	let height = tailwindThemeConfig.height[size];

	if (!specificSizes.includes(size)) {
		console.warn(`size ${size} is not supported by tailwind`);
		width = tailwindThemeConfig.width[minSize];
		height = tailwindThemeConfig.height[minSize];
	}
	if (!Number(size) || Number(size) < Number(minSize)) {
		width = tailwindThemeConfig.width[minSize];
		height = tailwindThemeConfig.height[minSize];
	}

	return (
		<div
			class={clsx(
				"flex items-center justify-center rounded-full overflow-hidden border max-w-xl",
				backgroundColor
			)}
			style={`width: ${width}; height: ${height};`}
		>
			{image ? (
				<Image src={image.src} alt={image.alt} />
			) : (
				<span class={textColor}>{fallbackText}</span>
			)}
		</div>
	);
}
