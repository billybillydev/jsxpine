/**
 * @typedef {Object} ProgressProps
 * @type {{ value?: number, duration?: number, interval?: number, noAnimation?: boolean } & import("../common/props").ThemeColorProps & import("../common/props").HTMLTag}
 */

import clsx from "clsx";

/**
 * Bar Progress component page
 * @type {import("../common/props").JSXComponent<ProgressProps>}
 */
export function BarProgress(props) {
	const {
		class: className,
		value = 100,
		interval,
		duration = 1000,
		type,
		noAnimation = false,
		...restProps
	} = props;

	/**
	 * @type {Map<import("../common/types").ThemeColorType, string>}
	 */
	const themeColorClassMap = new Map([
		["primary", "bg-primary"],
		["secondary", "bg-secondary"],
		["success", "bg-success"],
		["danger", "bg-danger"],
		["info", "bg-info"],
		["warning", "bg-warning"]
	]);
	return (
		<div
			x-data={`progress(${value}, ${
				interval ?? duration / value
			}, ${noAnimation})`}
			class={clsx(
				"relative w-full h-3 overflow-hidden rounded-full bg-base-light",
				className
			)}
			{...restProps}
		>
			<span
				x-bind:style="`width: ${progress}%; transition-duration: ${interval}ms;`"
				class={clsx(
					`absolute h-full ease-linear`,
					type ? themeColorClassMap.get(type) : "bg-base-dark"
				)}
				x-cloak="true"
			></span>
		</div>
	);
}

/**
 * Counter Progress component props
 * @type {import("../common/props").JSXComponent<Omit<ProgressProps, "type">>}
 */
export function CounterProgress(props) {
	const {
		class: className,
		value = 100,
		interval,
		duration = 1000,
		noAnimation = false,
		...restProps
	} = props;
	return (
		<div
			x-data={`progress(${value}, ${
				interval ?? duration / value
			}, ${noAnimation})`}
			class={clsx("relative", className)}
			{...restProps}
		>
			<span
				x-bind:style="`transition-duration: ${interval}ms;`"
				class="ease-linear"
				x-text="progress"
				x-cloak="true"
			></span>
		</div>
	);
}
