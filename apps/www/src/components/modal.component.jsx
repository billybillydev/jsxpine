import { Button } from "./button.component";
import { Icon } from "./icon.component";
import clsx from "clsx";

/**
 * @typedef {"simple" | "full-screen"} ModalContentType
 */

/**
 * @typedef {"dark" | "light"} ModalBackgroundColorOverlayType
 */

/**
 * @typedef {Object} ModalTriggerProps
 * @type {import("./button.component").ButtonProps}
 */

/**
 * @typedef {Object} ModalContentProps
 * @type {{ selector?: string, type?: ModalContentType, overlay?: ModalBackgroundColorOverlayType } & import("../common/props").HTMLTag}
 */

/**
 * Modal Trigger component props
 * @type {import("../common/props").JSXComponent<ModalTriggerProps>}
 */
export function ModalTrigger(props) {
	const { class: className, ...restProps } = props;

	return (
		<div class="inline-flex items-center justify-center">
			<Button x-bind="trigger" class={className} {...restProps} />
		</div>
	);
}

/**
 * Simple Modal Content component props
 * @type {import("../common/props").JSXComponent<Omit<ModalContentProps, "type">>}
 */
export function SimpleModalContent(props) {
	const {
		children,
		selector = "body",
		class: className,
		overlay = "dark",
		...restProps
	} = props;

	return (
			<div
				x-bind="shower"
				class={clsx(
					"inset-0 z-[99] flex items-center justify-center p-4",
					selector !== "body" ? "absolute w-full h-full" : "fixed w-screen h-screen",
					className
				)}
				x-cloak="true"
				{...restProps}
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
					class={clsx(
						"absolute inset-0 w-full h-full",
						overlay === "light" ? "bg-overlay-light/80" : "bg-overlay-dark/80"
					)}
				/>
				<div
					x-bind="shower"
					x-transition:enter="ease-out duration-300"
					x-transition:enter-start="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
					x-transition:enter-end="opacity-100 translate-y-0 sm:scale-100"
					x-transition:leave="ease-in duration-200"
					x-transition:leave-start="opacity-100 translate-y-0 sm:scale-100"
					x-transition:leave-end="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
					class="relative bg-background rounded-lg border"
				>
					<button
						x-bind="closerClick"
						class="absolute z-10 -top-3 -right-3 flex items-center justify-center w-8 h-8 border bg-background text-muted-foreground rounded-full hover:text-foreground"
					>
						<Icon name="close-fill" stroke-width="1.5" size={5} />
					</button>
					<div class="relative w-auto h-auto">{children}</div>
				</div>
			</div>
	);
}

/**
 * Full Screen Modal Content component props
 * @type {import("../common/props").JSXComponent<Omit<ModalContentProps, "type">>}
 */
export function FullScreenModalContent(props) {
	const { children, selector = "body", class: className } = props;
	return (
			<div
				x-bind="shower"
				x-transition:enter="transition ease-out duration-250"
				x-transition:enter-start="opacity-0"
				x-transition:enter-end="opacity-100"
				x-transition:leave="transition ease-in duration-250"
				x-transition:leave-start="opacity-100"
				x-transition:leave-end="opacity-0"
				class={clsx(
					"flex inset-0 z-[99]",
					selector !== "body"
						? "absolute w-full h-full"
						: "fixed w-screen h-screen",
					className
				)}
			>
				<button
					x-bind="closerClick"
					aria-label="Close"
					class="absolute top-0 right-0 z-30 flex items-center justify-center px-3 py-2 mt-3 mr-3 gap-x-1 text-xs font-medium uppercase border rounded-md border-base-light hover:text-foreground"
				>
					<Icon name="close-fill" stroke-width="1.5" size={5} />
					<span>Close</span>
				</button>
				{children}
			</div>
	);
}

/**
 * Modal Content component props
 * @type {import("../common/props").JSXComponent<ModalContentProps>}
 */
export function ModalContent(props) {
	const { children, selector = "body", type = "simple", ...restProps } = props;
	const Component =
		type === "full-screen" ? FullScreenModalContent : SimpleModalContent;
	return (
		<Component selector={selector} {...restProps}>
			{children}
		</Component>
	);
}

/**
 *
 * @type {import("../common/props").JSXComponent<import("../common/props").HTMLTagWithChildren>}
 */
export function Modal(props) {
	const { children, ...restProps } = props;

	return (
		<div x-data="modal" x-bind="closerKeydown" {...restProps}>
			{children}
		</div>
	);
}
