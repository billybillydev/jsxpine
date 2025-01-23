import { Button } from "./button.component";
import { Icon } from "./icon.component";
import clsx from "clsx";

/**
 * @typedef {Object} SidebarTriggerProps
 * @type {import("./button.component").ButtonProps}
 */

/**
 * @typedef {Object} SidebarContentProps
 * @type {{ selector?: string, title?: string } & import("../common/props").PositionProps & import("../common/props").HTMLTagWithChildren}
 */

/**
 * Sidebar Trigger component props
 * @type {import("../common/props").JSXComponent<SidebarTriggerProps>}
 */
export function SidebarTrigger(props) {
	const { ...restProps } = props;

	return (
		<div class="inline-flex items-center justify-center">
			<Button x-bind="trigger" {...restProps} />
		</div>
	);
}

/**
 * Sidebar Content component props
 * @type {import("../common/props").JSXComponent<SidebarContentProps>}
 */
export function SidebarContent(props) {
	const {
		children,
		selector = "body",
		title,
		position = "right",
		class: className
	} = props;

	/**
	 * @type {Map<import("../common/types").PositionType, string>}
	 */
	const positionClassMap = new Map([
		["right", "right-0"],
		["left", "left-0"],
		["top", "top-0"],
		["bottom", "bottom-0"]
	]);

	/**
	 * @type {Map<import("../common/types").PositionType, import("../common/types").TransitionStateType>}
	 */
	const transitionClassMap = new Map([
		[
			"right",
			{
				enter: {
					start: "translate-x-full opacity-0",
					end: "translate-x-0 opacity-100"
				},
				leave: {
					start: "translate-x-0 opacity-100",
					end: "translate-x-full opacity-0"
				}
			}
		],
		[
			"left",
			{
				enter: {
					start: "-translate-x-full opacity-0",
					end: "translate-x-0 opacity-100"
				},
				leave: {
					start: "translate-x-0 opacity-100",
					end: "-translate-x-full opacity-0"
				}
			}
		],
		[
			"top",
			{
				enter: {
					start: "-translate-y-full opacity-0",
					end: "translate-y-0 opacity-100"
				},
				leave: {
					start: "translate-y-0 opacity-100",
					end: "-translate-y-full opacity-0"
				}
			}
		],
		[
			"bottom",
			{
				enter: {
					start: "translate-y-full opacity-0",
					end: "translate-y-0 opacity-100"
				},
				leave: {
					start: "translate-y-0 opacity-100",
					end: "translate-y-full opacity-0"
				}
			}
		]
	]);

	return (
		<div
			x-bind="shower"
			class={clsx(
				"top-0 left-0 flex items-center justify-center",
				selector !== "body"
					? "absolute w-full h-full"
					: "fixed w-screen h-screen z-[99]"
			)}
		>
			<div
				x-bind="shower"
				x-transition:enter="ease-out duration-300"
				x-transition:enter-start="opacity-0"
				x-transition:enter-end="opacity-100"
				x-transition:leave="ease-in duration-300"
				x-transition:leave-start="opacity-100"
				x-transition:leave-end="opacity-0"
				x-on:click="close()"
				class="absolute inset-0 w-full h-full bg-overlay-dark/75"
			/>
			<div
				x-bind="shower"
				x-transition:enter="transition ease-in-out duration-500 sm:duration-700"
				x-transition:enter-start={transitionClassMap.get(position)?.enter.start}
				x-transition:enter-end={transitionClassMap.get(position)?.enter.end}
				x-transition:leave="transition ease-in-out duration-500 sm:duration-700"
				x-transition:leave-start={transitionClassMap.get(position)?.leave.start}
				x-transition:leave-end={transitionClassMap.get(position)?.leave.end}
				class={clsx(
					"absolute inset-O flex flex-col gap-y-2 h-full overflow-y-scroll bg-background border-base-dark/70",
					positionClassMap.get(position),
					className
				)}
			>
				<div class="flex items-center justify-between w-full p-2 sm:p-4">
					{title ? (
						<h2
							class="text-base font-semibold leading-6 w-full"
							id="slide-over-title"
							safe
						>
							{title}
						</h2>
					) : null}
					<div class="flex items-center justify-end w-full">
						<button
							x-bind="closerClick"
							class="flex items-center justify-between px-3 py-2 gap-x-2 text-xs font-medium uppercase bg-background text-muted-foreground rounded-md hover:text-foreground"
						>
							<Icon name="close-line" />
							<span>Close</span>
						</button>
					</div>
				</div>
				{children}
			</div>
		</div>
	);
}

/**
 * Sidebar Content component props
 * @type {import("../common/props").JSXComponent<import("../common/props").HTMLTagWithChildren>}
 */
export function Sidebar(props) {
	const { children, ...restProps } = props;
	return (
		<div x-data="sidebar" x-bind="closerEscape" {...restProps}>
			{children}
		</div>
	);
}
