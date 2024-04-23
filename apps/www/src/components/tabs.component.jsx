/**
 * @typedef TabsHeaderItemProps
 * @type {import("$common/props").HTMLTagWithChildren & {title: string}}
 */

import clsx from "clsx";

/**
 * @typedef TabsHeaderProps
 * @type {import("$common/props").HTMLTagWithChildren}
 */

/**
 * @typedef TabsBodyProps
 * @type {import("$common/props").HTMLTagWithChildren}
 */

/**
 * @typedef TabBodyItemProps
 * @type {import("$common/props").HTMLTagWithChildren}
 */

/**
 * @typedef TabsProps
 * @type {import("$common/props").HTMLTagWithChildren & import("$common/props").DirectionProps}
 */

/**
 * TabHeaderItem component props
 * @type {import("$common/props").JSXComponent<TabsHeaderItemProps>}
 */
export function TabHeaderItem(props) {
	return (
		<button
			x-bind:id="$id(tabId)"
			x-on:click="tabButtonClicked($el);"
			type="button"
			class={clsx(
				"relative z-[2] inline-flex items-center justify-center w-full h-8 px-3 transition-all rounded-md cursor-pointer whitespace-nowrap",
				props.class
			)}
		>
			{props.title ? <span class="text-sm font-medium">{props.title}</span> : props.children}
		</button>
	);
}

/**
 * TabsHeader component props
 * @type {import("$common/props").JSXComponent<TabsHeaderProps>}
 */
export function TabsHeader({ children, class: className }) {
	return (
		<div
			x-ref="tabButtons"
			x-bind:class="direction === 'horizontal' ? 'h-full max-w-xl' : 'w-full h-10'"
			class={clsx(
				"relative grid items-center justify-center p-1 text-gray-500 bg-gray-100 rounded-lg select-none",
				className
			)}
		>
			{children}
			<div
				x-ref="tabMarker"
				class="absolute left-0 top-0 z-[1] duration-300 ease-out"
				x-cloak
			>
				<div class="w-full h-full bg-white rounded-md shadow-sm"></div>
			</div>
		</div>
	);
}

/**
 * TabsBodyItem component props
 * @type {import("$common/props").JSXComponent<TabBodyItemProps>}
 */
export function TabBodyItem({ class: className, children }) {
	return (
		<div
			x-bind:id="$id(tabId + '-content')"
			x-show="tabContentActive($el)"
			class={clsx("relative", className)}
		>
			{children}
		</div>
	);
}

/**
 * TabsBody component props
 * @type {import("$common/props").JSXComponent<TabsBodyProps>}
 */
export function TabsBody({ class: className, children }) {
	return (
		<div class={clsx("relative w-full content", className)}>{children}</div>
	);
}

/**
 * Tabs component props
 * @type {import("$common/props").JSXComponent<TabsProps>}
 */
export function Tabs({ children, class: className, direction = "vertical" }) {
	/**
	 * @type {Map<import("$common/types").DirectionType, string>}
	 */
	const directionClassMap = new Map([
		["vertical", "flex-col"],
		["horizontal", "flex-row items-start"]
	]);
	return (
		<div
			x-data={`tabs("${direction}")`}
			class={clsx(
				"relative w-full flex",
				className,
				directionClassMap.get(direction)
			)}
		>
			{children}
		</div>
	);
}