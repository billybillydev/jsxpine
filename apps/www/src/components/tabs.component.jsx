import clsx from "clsx";

/**
 * @typedef TabsProps
 * @type {import("../common/props").HTMLTagWithChildren & import("../common/props").DirectionProps}
 */

/**
 * TabHeaderItem component props
 * @param {import("../common/props").HTMLTagWithChildren & {title: string}} props
 */
export function TabHeaderItem({
	title,
	class: className,
	children,
	...restProps
}) {
	return (
		<button
			x-bind:id="$id(tabId)"
			x-on:click="tabButtonClicked($el);"
			type="button"
			class={clsx(
				"relative inline-flex items-center justify-center w-full h-8 px-3 transition-all cursor-pointer whitespace-nowrap",
				className
			)}
			{...{
				"x-bind:class":
					"tabButtonActive($el) ? 'w-full h-full bg-white rounded-md' : ''",
				...restProps
			}}
		>
			{title ? (
				<span class="text-sm font-medium" safe>
					{title}
				</span>
			) : (
				children
			)}
		</button>
	);
}

/**
 * TabsHeader component props
 * @param {import("../common/props").HTMLTagWithChildren} props
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
		</div>
	);
}

/**
 * TabsBodyItem component props
 * @param {import("../common/props").HTMLTagWithChildren} props
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
 * @param {import("$common/props").HTMLTagWithChildren} props
 */
export function TabsBody({ class: className, children }) {
	return (
		<div class={clsx("relative w-full content", className)} x-ref="tabContents">
			{children}
		</div>
	);
}

/**
 * Tabs component props
 * @param {TabsProps} props
 */
export function Tabs({ children, class: className, direction = "vertical" }) {
	/**
	 * @type {Map<import("../common/types").DirectionType, string>}
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
