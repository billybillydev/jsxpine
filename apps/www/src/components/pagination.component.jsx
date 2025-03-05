/**
 * @typedef {Object} PaginationProps
 * @type {{ selectedPage?: number, pages: number, firstButtonLabel?: string, previousButtonLabel?: string, nextButtonLabel?: string, lastButtonLabel?: string, customFirstButton?: JSX.Element, customPreviousButton?: JSX.Element, customNextButton?: JSX.Element, customLastButton?: JSX.Element } & import("../common/props").HTMLTag}
 */

import { Button } from "./button.component";
import { Icon } from "./icon.component";
import { NumberInput } from "./input.component";
import { Select } from "./select.component";
import clsx from "clsx";

/**
 * @typedef {Object} InputPaginationProps
 * @type {PaginationProps & Omit<import("./input.component").InputProps, "class">}
 */

/**
 * @typedef {Object} SelectPaginationProps
 * @type {PaginationProps & Omit<import("./input.component").SelectInputProps, "class">}
 */

/**
 * Pagination component props
 * @type {import("../common/props").JSXComponent<PaginationProps>}
 */
export function Pagination(props) {
	const {
		children,
		class: className,
		firstButtonLabel,
		previousButtonLabel,
		nextButtonLabel,
		lastButtonLabel,
		pages,
		selectedPage,
		customFirstButton,
		customLastButton,
		customNextButton,
		customPreviousButton,
		...restProps
	} = props;

	return (
		<div
			x-data={`pagination(${pages}, ${selectedPage})`}
			class={clsx("flex items-center gap-x-2", className)}
			{...restProps}
		>
			{customFirstButton ?? (
				<Button x-on:click="selectFirstPage" x-bind:disabled="isFirstPage">
					{firstButtonLabel ? (
						<span safe>{firstButtonLabel}</span>
					) : (
						<Icon name="ri.arrow-left-double-line" />
					)}
				</Button>
			)}
			{customPreviousButton ?? (
				<Button x-on:click="selectPreviousPage" x-bind:disabled="isFirstPage">
					{previousButtonLabel ? (
						<span safe>{previousButtonLabel}</span>
					) : (
						<Icon name="ri.arrow-left-s-line" />
					)}
				</Button>
			)}
			{children}
			{customNextButton ?? (
				<Button x-on:click="selectNextPage" x-bind:disabled="isLastPage">
					{nextButtonLabel ? (
						<span safe>{nextButtonLabel}</span>
					) : (
						<Icon name="ri.arrow-right-s-line" />
					)}
				</Button>
			)}
			{customLastButton ?? (
				<Button x-on:click="selectLastPage" x-bind:disabled="isLastPage">
					{lastButtonLabel ? (
						<span safe>{lastButtonLabel}</span>
					) : (
						<Icon name="ri.arrow-right-double-line" />
					)}
				</Button>
			)}
		</div>
	);
}

/**
 * Input Pagination component props
 * @type {import("../common/props").JSXComponent<InputPaginationProps>}
 */
export function InputPagination(props) {
	const { class: className, pages, ...restProps } = props;
	return (
		<Pagination class={className} pages={pages} {...restProps}>
			<div class="flex items-center gap-x-2">
				<NumberInput
					x-init="value = selectedPage"
					x-bind:value="selectedPage"
					max={pages}
					x-on:input="selectPage(Number($event.target.value))"
				/>
				<span>/</span>
				<span x-text="pages"></span>
			</div>
		</Pagination>
	);
}

/**
 * Select Pagination component props
 * @type {import("../common/props").JSXComponent<SelectPaginationProps>}
 */
export function SelectPagination(props) {
	const { class: className, pages, ...restProps } = props;
	return (
		<Pagination class={className} pages={pages} {...restProps}>
			<div class="flex items-center gap-x-2">
				<Select
					x-effect="selectedItem = { value: selectedPage, label: selectedPage }"
					x-init={`
                        $watch('selectOpen', () => {
                            selectedItem = { value: selectedPage, label: selectedPage };
                        })
                    `}
					items={Array.from({ length: pages }, (_, index) => ({
						value: String(index + 1),
						label: String(index + 1)
					}))}
					x-on:select="selectPage(Number($event.detail.value))"
					class="input"
				/>
				<span>/</span>
				<span x-text="pages"></span>
			</div>
		</Pagination>
	);
}
