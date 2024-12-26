import { Tag } from "$components/tag.component";
import clsx from "clsx";

/**
 * @typedef {Extract<import("$common/types").HTMLTagNameType, "body" | "div" | "section" | "article" | "nav" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "button" | "p" | "span" | "header" | "footer" | "ul" | "ol" | "li" | "strong" | "em">} AccordionTagType
 */

/**
 * @typedef AccordionProps
 * @type {import("../common/props").HTMLTagWithChildren & { as?: AccordionTagType }}
 */

/**
 * Group Accordion Content props
 * @param {AccordionProps} props
 */
export function GroupAccordionContent({
	children,
	class: className = "",
	as = "div",
	...restProps
}) {

	return (
		<Tag
			as={as}
			x-show="isActive(id)"
			x-collapse
			class={clsx(className)}
			{...restProps}
		>
			{children}
		</Tag>
	);
}

/**
 * Group Accordion Trigger props
 * @param {AccordionProps} props
 */
export function GroupAccordionTrigger({
	children,
	class: className,
	as = "div",
	...restProps
}) {

	return (
		<Tag
			as={as}
			x-on:click="setActiveAccordion(id)"
			class={clsx(
				"cursor-pointer",
				className
			)}
			{...restProps}
		>
			{children}
		</Tag>
	);
}

/**
 * Group Accordion Item props
 * @param {AccordionProps} props
 */
export function GroupAccordionItem({
	children,
	class: className,
	as = "div",
	...restProps
}) {

	return (
		<Tag
			as={as}
			x-data="{ id: $id('accordion-item') }"
			class={clsx("flex flex-col", className)}
			{...restProps}
		>
			{children}
		</Tag>
	);
}

/**
 * Group Accordion List props
 * @param {AccordionProps} props
 */
export function GroupAccordionList({
	children,
	class: className,
	as = "div",
	...restProps
}) {
	return (
		<Tag
			as={as}
			x-data="groupAccordion"
			class={clsx("flex flex-col w-full", className)}
			{...restProps}
		>
			{children}
		</Tag>
	);
}

/**
 * Solo Accordion Trigger props
 * @param {AccordionProps} props
 */
export function SoloAccordionTrigger(props) {
	const { class: className, children, as = "div", ...restProps } = props;
	return (
		<Tag
			as={as}
			x-bind="trigger"
			class={clsx(className, "cursor-pointer")}
			{...restProps}
		>
			{children}
		</Tag>
	);
}

/**
 * Solo Accordion Content props
 * @param {AccordionProps} props
 */
export function SoloAccordionContent({
	children,
	class: className,
	as = "div",
	...restProps
}) {
	return (
		<Tag
			as={as}
			x-bind="display"
			x-collapse
			class={className}
			{...restProps}
		>
			{children}
		</Tag>
	);
}

/**
 * Solo Accordion props
 * @type {import("../common/props").JSXComponent<AccordionProps>}
 */
export function SoloAccordion({
	children,
	class: className,
	as = "div",
	...restProps
}) {
	return (
		<Tag
			as={as}
			x-data="soloAccordion"
			class={clsx("w-full", className)}
			{...restProps}
		>
			{children}
		</Tag>
	);
}
