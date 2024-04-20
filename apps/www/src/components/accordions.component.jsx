import clsx from "clsx";

/**
 * @typedef AccordionProps
 * @type {Omit<JSX.HtmlTag, "className"> & JSX.ElementChildrenAttribute & import("src/common/props").CLSXClassProps}
 */

/**
 * Group Accordion Content props
 * @param {AccordionProps} props
 * @returns {string}
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
 * @returns {string}
 */
export function GroupAccordionTrigger({
	children,
	class: className,
	...restProps
}) {
	return (
		<div
			x-on:click="setActiveAccordion(id)"
			class={clsx("flex items-center justify-center cursor-pointer", className)}
			{...restProps}
		>
			{children}
		</div>
	);
}

/**
 * Group Accordion Item props
 * @param {AccordionProps} props
 * @returns {string}
 */
export function GroupAccordionItem({
	children,
	class: className,
	...restProps
}) {
	return (
		<div
			x-data="{ id: $id('accordion-item') }"
			class={clsx("flex flex-col w-full", className)}
			{...restProps}
		>
			{children}
		</div>
	);
}

/**
 * Group Accordion List props
 * @param {AccordionProps} props
 * @returns {string}
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
 * Solo Accordion Content props
 * @param {AccordionProps} props
 * @returns {string}
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
 * @returns {string}
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
 * @param {AccordionProps} props
 * @returns {string}
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
