import { Icon } from "./icon.component";
import clsx from "clsx";

/**
 * @typedef SelectProps
 * @type {import("./input.component").SelectInputProps & { noInputIcon?: boolean, defaultValue?: import("$components/input.component").SelectOptionType | null }}
 */

/**
 * Select component props
 * @type {import("../common/props").JSXComponent<SelectProps>}
 */
export function Select(props) {
	const {
		items = [],
		class: className,
		placeholder = "Select Item",
		noInputIcon = false,
		disabled,
		defaultValue,
		...restProps
	} = props;
	return (
		<div
			x-data={`dropdownSelect(${JSON.stringify(items)}, ${defaultValue ? JSON.stringify(defaultValue) : "" })`}
			x-on:keydown="selectKeydown($event);"
			class={clsx("relative", className)}
			{...{
				...restProps,
				"@keydown.escape": `
					if (selectOpen){
						selectOpen = false;
					}
				`,
				"@keydown.down.prevent": `
                    if (selectOpen) {
                        selectableItemActiveNext();
                    } else {
                        selectOpen = true;
                    }
                `,
				"@keydown.up.prevent": `
                    if(selectOpen) {
                        selectableItemActivePrevious();
                    } else {
                        selectOpen=true;
                    }
                `,
				"x-on:keydown.enter": `
					selectedItem = selectableItemActive;
					selectOpen=false;
					$dispatch('select', selectableItemActive);
				`
			}}
		>
			<button
				x-ref="selectButton"
				type="button"
				x-on:click="selectOpen =! selectOpen"
				x-bind:class="{ 'focus:ring-2 focus:ring-offset-2 focus:ring-base' : !selectOpen }"
				class="relative w-full flex items-center justify-between p-1 gap-x-2 text-left hover:cursor-pointer disabled:cursor-not-allowed disabled:text-base/30 focus:outline-none text-sm"
				disabled={disabled}
			>
				<span
					x-text={`selectedItem ? selectedItem.label : "${placeholder}"`}
					class="truncate text-center"
				/>
				{!noInputIcon && (
					<span class="right-0 flex items-center pointer-events-none">
						<Icon name="expand-up-down-line" stroke-width="0.5" />
					</span>
				)}
			</button>

			<ul
				x-show="selectOpen"
				x-ref="selectableItemsList"
				{...{
					"@click.away": "selectOpen = false",
					"x-transition:enter": "transition ease-out duration-50",
					"x-transition:enter-start": "opacity-0 -translate-y-1",
					"x-transition:enter-end": "opacity-100"
				}}
				x-bind:class="{ 'bottom-0 mb-10' : selectDropdownPosition == 'top', 'top-0 mt-10' : selectDropdownPosition == 'bottom' }"
				class="absolute bg-background text-foreground flex flex-col z-[1] w-full grow py-1 mt-1 overflow-y-auto text-sm rounded-md shadow-md max-h-56"
				x-cloak="true"
			>
				<template x-for="item in selectableItems" x-bind:key="item.value">
					<li
						x-on:click="selectedItem = item; selectOpen = false; $refs.selectButton.focus(); $dispatch('select', item)"
						x-bind:id="item.value + '-' + selectId"
						x-bind:data-disabled="item.disabled ?? false"
						x-on:mousemove="selectableItemActive = item"
						class="relative flex items-center h-full py-2 pr-2 pl-8 cursor-pointer select-none hover:bg-base/30 data-[disabled]:bg-base-light data-[disabled]:text-base-dark data-[disabled]:pointer-events-none data-[disabled]:pointer-not-allowed"
					>
						<Icon
							name="check-line"
							x-show="selectedItem?.value == item.value"
							class="absolute left-0 size-4 ml-2 stroke-current text-nmuted-foreground"
						/>
						<span class="block font-medium truncate" x-text="item.label"></span>
					</li>
				</template>
			</ul>
		</div>
	);
}
