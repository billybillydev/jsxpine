import clsx from "clsx";

/**
 * @typedef DropdownTriggerProps
 * @type {import("../common/props").HTMLTagWithChildren}
 */
/**
 * @typedef DropdownContentProps
 * @type {import("../common/props").HTMLTagWithChildren & import("../common/props").PositionProps}
 */

/**
 * @typedef DropdownProps
 * @type {{ duration?: number } & import("../common/props").HTMLTagWithChildren & import("../common/props").PositionProps}
 */

/**
 * Dropdown Trigger component props
 * @type {import("../common/props").JSXComponent<DropdownTriggerProps>}
 */
export function DropdownTrigger(props) {
	const { children, class: className, ...restProps } = props;
	return (
		<button x-bind="toggler" x-ref="trigger" class={className} {...restProps}>
			{children}
		</button>
	);
}

/**
 * Dropdown Content component props
 * @type {import("../common/props").JSXComponent<DropdownContentProps>}
 */
export function DropdownContent(props) {
	const {
		children,
		class: className,
		position = "bottom",
		...restProps
	} = props;

	return (
		<div
			x-show="visible"
			x-bind="closer"
			class={clsx("absolute z-[999]", className)}
			x-ref="content"
			x-cloak="true"
			{...restProps}
		>
			{children}
		</div>
	);
}

/**
 * Dropdown component props
 * @type {import("../common/props").JSXComponent<DropdownProps>}
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
