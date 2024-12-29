import { Tag } from "$components/tag.component";
import { AlpineUtils } from "$scripts/lib/alpine";
import clsx from "clsx";

/**
 * @typedef {Extract<import("$common/types").HTMLTagNameType, "body" | "div" | "section" | "article" | "nav" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "button" | "p" | "span" | "header" | "footer" | "ul" | "ol" | "li" | "strong" | "em">} GroupAccordionTagType
 */

/**
 * @typedef GroupAccordionProps
 * @type {import("../common/props").HTMLTagWithChildren & { as?: GroupAccordionTagType, type?: "solo" | "group" }}
 */

/**
 * @typedef {Object} GroupAccordionDataOutput
 * @property {string} activeAccordion
 * @property {(id: string) => void} setActiveAccordion
 * @property {(id: string) => boolean} isActive
 */

/**
 * Group Accordion List props
 * @param {GroupAccordionProps} props
 */
export function GroupAccordion({
	children,
	class: className,
	as = "div",
	...restProps
}) {

	return (
		<Tag
			as={as}
			x-data={AlpineUtils.render(GroupAccordion.data())}
			class={clsx("flex flex-col w-full", className)}
			{...restProps}
		>
			{children}
		</Tag>
	);
}

/**
 * Group Accordion alpine data
 * @returns {import("alpinejs").AlpineComponent<GroupAccordionDataOutput>}
 */
GroupAccordion.data = function () {
  return {
    activeAccordion: "",
    setActiveAccordion(id) {
      this.activeAccordion = this.activeAccordion == id ? "" : id;
    },
    isActive(id) {
      return this.activeAccordion === id;
    }
  };
}

/**
 * Group Accordion Content props
 * @param {GroupAccordionProps} props
 */
GroupAccordion.Content = function({
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
 * @param {GroupAccordionProps} props
 */
GroupAccordion.Trigger = function({
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
 * @param {GroupAccordionProps} props
 */
GroupAccordion.Item = function({
	children,
	class: className,
	as = "div",
	...restProps
}) {

	return (
		<Tag
			as={as}
			x-data={AlpineUtils.render(GroupAccordion.Item.data())}
			class={clsx("flex flex-col", className)}
			{...restProps}
		>
			{children}
		</Tag>
	);
}

/**
 * @returns {import("alpinejs").AlpineComponent<{ id: string }>}
 */
GroupAccordion.Item.data = function() {
	return {
		id: "",
		init() {
			this.id = this.$id("group-accordion-item");
		}
	}
}