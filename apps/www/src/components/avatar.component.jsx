import clsx from "clsx";
import { Image } from "./image.component";

/**
 * @typedef {"6" | "7" | "8" | "9" | "10" | "11" | "12" | "14" | "16" | "20" | "24" | "28" | "32" | "36" | "40" | "44" | "48" | "52" | "56" | "60" | "64" | "72" | "80" | "96"} AvatarSize
 */

/**
 * @typedef AvatarProps
 * @type {{ image?: import("./image.component").ImageType, fallbackText?: string, color?: import("../common/types").ThemeColorType | { background: string, text: string }, size?: AvatarSize} & import("../common/props").HTMLTag}
 */

/**
 * Avatar component props
 * @type {import("../common/props").JSXComponent<AvatarProps>}
 */
export function Avatar(props) {
	const { color, image, fallbackText, size = "8" } = props;

	/** @type {Map<import("../common/types").ThemeColorType, { background: string; text: string }>} */
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
		typeof color === "string"
			? colorMap.get(color)?.text
			: color?.text ?? "text-slate-700";

	/** @type {Map<AvatarSize, string>} */
	const fontSizeMap = new Map([
		["6", "text-xs"],
		["7", "text-sm"],
		["8", "text-sm"],
		["9", "text-md"],
		["10", "text-md"],
		["11", "text-lg"],
		["12", "text-lg"],
		["14", "text-xl"],
		["16", "text-xl"],
		["20", "text-2xl"],
		["24", "text-2xl"],
		["28", "text-4xl"],
		["32", "text-4xl"],
		["36", "text-5xl"],
		["40", "text-5xl"],
		["44", "text-6xl"],
		["48", "text-6xl"],
		["52", "text-7xl"],
		["56", "text-7xl"],
		["60", "text-8xl"],
		["64", "text-8xl"],
		["72", "text-9xl"],
		["80", "text-9xl"],
		["96", "text-[12rem]"]
	]);

	return (
		<div
			class={clsx(
				"flex items-center justify-center rounded-full overflow-hidden border max-w-xl aspect-square",
				`size-${size}`,
				backgroundColor
			)}
		>
			{image ? (
				<Image src={image.src} alt={image.alt} class={"object-contain object-center w-full h-full"} />
			) : (
				<span class={clsx(textColor, fontSizeMap.get(size))} safe>
					{fallbackText}
				</span>
			)}
		</div>
	);
}
