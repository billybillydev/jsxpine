import clsx from "clsx";

/**
 * @typedef DropdownTriggerProps
 * @type {import("$common/props").HTMLTagWithChildren}
 */
/**
 * @typedef DropdownContentProps
 * @type {import("$common/props").HTMLTagWithChildren & import("$common/props").PositionProps}
 */

/**
 * @typedef DropdownProps
 * @type {{ duration?: number } & import("$common/props").HTMLTagWithChildren & import("$common/props").PositionProps}
 */

/**
 * Dropdown Trigger component props
 * @type {import("$common/props").JSXComponent<DropdownTriggerProps>}
 */
export function DropdownTrigger(props) {
	const { children, class: className, ...restProps } = props;
	return (
		<button x-bind="trigger" x-ref="trigger" class={className} {...restProps}>
			{children}
		</button>
	);
}

/**
 * Dropdown Content component props
 * @type {import("$common/props").JSXComponent<DropdownContentProps>}
 */
export function DropdownContent(props) {
	const {
		children,
		class: className,
		position = "bottom",
		...restProps
	} = props;

	/**
	 * @type {Map<import("$common/types").PositionType, import("$common/types").TransitionStateType>}}
	 */
	const transitionClassMap = new Map([
		[
			"top",
			{
				enter: { start: "translate-y-2", end: "translate-y-0" },
				leave: { start: "translate-y-0", end: "translate-y-2" }
			}
		],
		[
			"bottom",
			{
				enter: {
					start: "-translate-y-2",
					end: "translate-y-0"
				},
				leave: {
					start: "translate-y-0",
					end: "-translate-y-2"
				}
			}
		],
		[
			"left",
			{
				enter: { start: "-translate-x-2", end: "translate-x-0" },
				leave: { start: "translate-x-0", end: "-translate-x-2" }
			}
		],
		[
			"right",
			{
				enter: { start: "-translate-x-2", end: "translate-x-0" },
				leave: { start: "translate-x-0", end: "-translate-x-2" }
			}
		]
	]);

	return (
		<div
			x-show="visible"
			x-bind="closer"
			class={clsx("absolute z-50", className)}
			x-ref="content"
			x-cloak
		>
			{children}
		</div>
	);
}

/**
 * Dropdown component props
 * @type {import("$common/props").JSXComponent<DropdownProps>}
 */
export function Dropdown(props) {
	const {
		children,
		class: className,
		position = "bottom",
		duration = 300,
		...restProps
	} = props;
	return (
		<div
			x-data={`dropdown("${position}", ${duration})`}
			class={clsx("relative", className)}
			{...restProps}
		>
			{children}
		</div>
	);
}
