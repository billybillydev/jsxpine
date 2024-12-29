import { Tag } from "$components/tag.component";
import { AlpineUtils } from "$scripts/lib/alpine";
import clsx from "clsx";

/**
 * @typedef {Extract<import("$common/types").HTMLTagNameType, "body" | "div" | "section" | "article" | "nav" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "button" | "p" | "span" | "header" | "footer" | "ul" | "ol" | "li" | "strong" | "em">} SoloAccordionTagType
 */

/**
 * @typedef SoloAccordionProps
 * @type {import("../common/props").HTMLTagWithChildren & { as?: SoloAccordionTagType, isOpened?: boolean }}
 */

/**
 * @typedef {Object} SoloAccordionDataOutput
 * @property {boolean} show
 * @property {Function} close
 * @property {Function} open
 * @property {Function} toggle
 * @property {Record<string, Function>} trigger
 * @property {Record<string, () => boolean>} display
 */

/**
 * Solo Accordion props
 * @param {import("$common/props").HTMLTagWithChildren<SoloAccordionProps>} props
 */
export function SoloAccordion({
	children,
	class: className,
	as = "div",
	isOpened = false,
	...restProps
}) {
	
	return (
		<Tag
			as={as}
			x-data={AlpineUtils.render(SoloAccordion.data(isOpened))}
			class={clsx("w-full", className)}
			{...restProps}
		>
			{children}
		</Tag>
	);
}

/**
 * Solo Accordion alpine data
 * @param {boolean} [isOpened]
 * @returns {import("alpinejs").AlpineComponent<SoloAccordionDataOutput>}
 */
SoloAccordion.data = function (isOpened = false) {
	return {
		show: isOpened,
		open() {
			this.show = true;
		},
		close() {
			this.show = false;
		},
		toggle() {
			this.show = !this.show;
		},
		trigger: {
			["@click"]() {
				this.toggle();
			}
		},
		display: {
			["x-show"]() {
				return this.show;
			}
		}
	};
}

/**
 * Solo Accordion Trigger props
 * @param {SoloAccordionProps} props
 */
SoloAccordion.Trigger = function ({
	class: className,
	children,
	as = "div",
	...restProps
}) {

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
};

/**
 * Solo Accordion Content props
 * @param {SoloAccordionProps} props
 */
SoloAccordion.Content = function ({
	class: className,
	children,
	as = "div",
	...restProps
}) {
	
	return (
		<Tag as={as} x-bind="display" x-collapse class={className} {...restProps}>
			{children}
		</Tag>
	);
};