import clsx from "clsx";

/**
 * @typedef AccordionProps
 * @type {import("$common/props").HTMLTagWithChildren}
 */

/**
 * Group Accordion Content props
 * @param {AccordionProps} props
 */
export function GroupAccordionContent({
	children,
	class: className = "",
	...restProps
}) {
	return (
		<div
			x-show="isActive(id)"
			x-collapse
			class={clsx(className)}
			{...restProps}
		>
			{children}
		</div>
	);
}

/**
 * Group Accordion Trigger props
 * @param {AccordionProps} props
 */
export function GroupAccordionTrigger({
	children,
	class: className,
	...restProps
}) {
	return (
		<div
			x-on:click="setActiveAccordion(id)"
			class={clsx("flex w-full items-center justify-center cursor-pointer", className)}
			{...restProps}
		>
			{children}
		</div>
	);
}

/**
 * Group Accordion Item props
 * @param {AccordionProps} props
 */
export function GroupAccordionItem({
	children,
	class: className,
	...restProps
}) {
	return (
		<div
			x-data="{ id: $id('accordion-item') }"
			class={clsx("flex flex-col", className)}
			{...restProps}
		>
			{children}
		</div>
	);
}

/**
 * Group Accordion List props
 * @param {AccordionProps} props
 */
export function GroupAccordionList({
	children,
	class: className,
	...restProps
}) {
	return (
		<div
			x-data="groupAccordion"
			class={clsx("flex flex-col w-full", className)}
			{...restProps}
		>
			{children}
		</div>
	);
}

/**
 * Solo Accordion Trigger props
 * @param {AccordionProps} props
 */
export function SoloAccordionTrigger(props) {
	const { class: className, children, ...restProps } = props;
	return (
		<div
			x-bind="trigger"
			class={clsx(
				"flex items-center justify-center cursor-pointer",
				className
			)}
			{...restProps}
		>
			{children}
		</div>
	);
}

/**
 * Solo Accordion Content props
 * @param {AccordionProps} props
 */
export function SoloAccordionContent({
	children,
	class: className,
	...restProps
}) {
	return (
		<div x-bind="display" x-collapse class={className} {...restProps}>
			{children}
		</div>
	);
}

/**
 * Solo Accordion Trigger props
 * @param {AccordionProps} props
 */
export function SoloAccordionItem({
	children,
	class: className,
	...restProps
}) {
	return (
		<div
			x-bind="trigger"
			class={clsx(
				"flex items-center justify-center cursor-pointer",
				className
			)}
			{...restProps}
		>
			{children}
		</div>
	);
}

/**
 * Solo Accordion props
 * @type {import("$common/props").JSXComponent<AccordionProps>}
 */
export function SoloAccordion({
	children,
	class: className,
	...restProps
}) {
	return (
		<div
			x-data="soloAccordion"
			class={clsx("flex flex-col w-full", className)}
			{...restProps}
		>
			{children}
		</div>
	);
}
