import clsx from "clsx";
import { textSizeClassMap } from "../common/classes";

/**
 * @typedef {"top" | "bottom" | "left" | "right"} TooltipPositionType
 */

/**
 * @typedef TooltipProps
 * @type {{ text?: string, component?: import("@kitajs/html").Children, triggerOnHover?: boolean, position?: TooltipPositionType } & import("../common/props").HTMLTagWithChildren & import("../common/props").SizeProps & import("../common/props").ThemeColorProps}
 */

/**
 * Tooltip component props
 * @type {import("../common/props").JSXComponent<TooltipProps>}
 */
export function Tooltip(props) {
	const {
		children,
		text = "",
		component,
		position = "top",
		type = "",
		size = "sm",
		triggerOnHover = true
	} = props;

	/**
	 * @type {Map<import("../common/types").ThemeColorType, string>}
	 */
	const colorTypeClassMap = new Map([
		["primary", "bg-primary-400"],
		["secondary", "bg-secondary"],
		["success", "bg-success-400"],
		["danger", "bg-danger-400"],
		["info", "bg-info-400"],
		["warning", "bg-warning-400"]
	]);

	/**
	 * @type {Map<TooltipPositionType, string>}
	 */
	const positionClassMap = new Map([
		["top", "top-0 left-1/2 -translate-x-1/2 -mt-0.5 -translate-y-full"],
		["left", "top-1/2 -translate-y-1/2 -ml-0.5 left-0 -translate-x-full"],
		["bottom", "bottom-0 left-1/2 -translate-x-1/2 -mb-0.5 translate-y-full"],
		["right", "top-1/2 -translate-y-1/2 -mr-0.5 right-0 translate-x-full"]
	]);

	/**
	 * @type {Map<TooltipPositionType, string>}
	 */
	const arrowPositionClassMap = new Map([
		["top", "bottom-0 -translate-x-1/2 left-1/2 w-2.5 translate-y-full"],
		["left", "right-0 -translate-y-1/2 top-1/2 h-2.5 -mt-px translate-x-full"],
		["bottom", "top-0 -translate-x-1/2 left-1/2 w-2.5 -translate-y-full"],
		["right", "left-0 -translate-y-1/2 top-1/2 h-2.5 -mt-px -translate-x-full"]
	]);

	/**
	 * @type {Map<TooltipPositionType, string>}
	 */
	const arrowOrientationClassMap = new Map([
		["top", "origin-top-left -rotate-45"],
		["left", "origin-top-left rotate-45"],
		["bottom", "origin-bottom-left rotate-45"],
		["right", "origin-top-right -rotate-45"]
	]);

	return (
		<div x-data={`tooltip(${triggerOnHover})`} class="relative inline-flex">
			<div
				x-show="visible"
				class={clsx(
					"absolute",
					positionClassMap.get(position),
					textSizeClassMap.get(size)
				)}
			>
				<div
					x-show="visible"
					x-transition=""
					class={clsx(
						"relative px-2 py-1 bg-opacity-90",
						type ? colorTypeClassMap.get(type) : "bg-slate-700 text-white"
					)}
				>
					{text ? (
						<p class="flex-shrink-0 block whitespace-nowrap" safe>{text}</p>
					) : (
						component
					)}
					<div
						class={clsx(
							"absolute inline-flex items-center justify-center overflow-hidden",
							arrowPositionClassMap.get(position)
						)}
					>
						<div
							class={clsx(
								"w-1.5 h-1.5 bg-opacity-90",
								arrowOrientationClassMap.get(position),
								type ? colorTypeClassMap.get(type) : "bg-slate-700 text-white"
							)}
						></div>
					</div>
				</div>
			</div>
			<div x-ref="tooltipContent" class="inline-table">
				{children}
			</div>
		</div>
	);
}
