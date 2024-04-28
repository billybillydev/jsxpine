/**
 * @typedef {Object} InputProps
 * @type {Omit<JSX.HtmlInputTag, "className"> & import("$common/props").CLSXClassProps}
 */

import { Icon } from "$components/icon.component";
import clsx from "clsx";

/**
 * @typedef TextInputProps
 * @type {InputProps}
 */

/**
 * @typedef PasswordInputProps
 * @type {{ hideIcon?: boolean } & InputProps}
 */

/**
 * @typedef NumberInputProps
 * @type {Omit<InputProps, "placeholder" | "min" | "max"> & { min?: number, max?: number }}
 */

/**
 * @typedef TextareaInputProps
 * @type {{ value?: string, noResize?: boolean} & Omit<JSX.HtmlTextAreaTag, "className"> & import("$common/props").CLSXClassProps}
 */

/**
 * @typedef {Object} DefaultSelectOptionType
 * @property {string} label
 * @property {string | number} [value]
 * @property {boolean} [disabled]
 */

/**
 * @typedef SelectOptionType
 * @type {DefaultSelectOptionType & Record<string, unknown>}
 */

/**
 * @typedef SelectInputProps
 * @type {{ value?: string | number | string[], placeholder?: string, items?: SelectOptionType[], hidePlaceholder?: boolean } & Omit<JSX.HtmlSelectTag, "className"> & import("$common/props").CLSXClassProps}
 */

/**
 * @typedef CheckboxInputProps
 * @type {Omit<InputProps, "placeholder">}
 */

/**
 * @typedef RadioInputProps
 * @type {Omit<InputProps, "placeholder">}
 */

/**
 * Checkbox Input props
 * @type {import("$common/props").JSXComponent<CheckboxInputProps>}
 */
export function CheckboxInput(props) {
	return <input type="checkbox" {...props} />;
}

/**
 * Date Input props
 * @type {import("$common/props").JSXComponent<TextInputProps>}
 */
export function DateInput(props) {
	const { value = "", class: className, ...restProps } = props;
	return (
		<div
			class={clsx("input flex items-center justify-center", className)}
			x-data={`{ value: "${value}" }`}
		>
			<input type="date" {...restProps} x-model="value" class="flex-1 px-1" />
		</div>
	);
}

/**
 * Email Input props
 * @type {import("$common/props").JSXComponent<TextInputProps>}
 */
export function EmailInput(props) {
	const { value = "", class: className, ...restProps } = props;
	return (
		<div
			class={clsx("input input-primary flex items-center gap-x-2", className)}
			x-data={`{ value: "${value}" }`}
		>
			<input type="email" {...restProps} x-model="value" class="flex-1 px-1" />
			<button
				type="button"
				x-bind:disabled="!value"
				x-on:click="value = ''"
				class="flex items-center justify-center"
				x-bind:class="value ? 'opacity-100' : 'opacity-0'"
			>
				<Icon name="close-line" size={5} />
			</button>
		</div>
	);
}

/**
 * File Input props
 * @type {import("$common/props").JSXComponent<TextInputProps>}
 */
export function FileInput(props) {
	const { value = "", class: className, ...restProps } = props;
	return (
		<div
			class={clsx("input flex items-center justify-center", className)}
			x-data={`{ value: "${value}" }`}
		>
			<input type="file" {...restProps} x-model="value" class="flex-1 px-1" />
		</div>
	);
}

/**
 * Number Input props
 * @type {import("$common/props").JSXComponent<NumberInputProps>}
 */
export function NumberInput(props) {
	const { min = 1, max, value = 1, class: className, ...restProps } = props;
	return (
		<input
			type="number"
			x-data={`{ value: ${value} }`}
			class={clsx("text-center input out-of-range:bg-danger-500", className)}
			{...restProps}
			min={String(min)}
			max={String(max)}
			x-model="value"
			pattern="/\d/g"
		/>
	);
}

/**
 * Password Input props
 * @type {import("$common/props").JSXComponent<PasswordInputProps>}
 */
export function PasswordInput(props) {
	const {
		value = "",
		hideIcon = false,
		class: className,
		...restProps
	} = props;
	return (
		<div
			class={clsx("input input-primary flex items-center gap-x-2", className)}
			x-data={`{ value: "${value}", show: false }`}
		>
			<input
				x-bind:type="show ? 'text' : 'password'"
				{...restProps}
				x-model="value"
				class="flex-1 px-1"
			/>
			{!hideIcon ? (
				<button
					type="button"
					x-bind:disabled="!value"
					x-on:click="show = !show"
					class="flex items-center justify-center"
				>
					<template x-if="!show">
						<Icon name="eye-line" stroke-width="0.5" size={5} />
					</template>
					<template x-if="show">
						<Icon name="eye-off-line" stroke-width="0.5" size={5} />
					</template>
				</button>
			) : null}
		</div>
	);
}

/**
 * Radio Input props
 * @type {import("$common/props").JSXComponent<RadioInputProps>}
 */
export function RadioInput(props) {
	return <input type="radio" {...props} />;
}

/**
 * Select Input props
 * @type {import("$common/props").JSXComponent<SelectInputProps>}
 */
export function SelectInput(props) {
	const {
		items = [],
		placeholder = "Select a value",
		hidePlaceholder = false,
		value,
		class: className,
		...restProps
	} = props;
	return (
		<select
			{...restProps}
			x-data={`{ value: "${value}" }`}
			class={clsx(
				"w-full p-2 text-base border border-gray-300 rounded cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-200 focus:border-primary-500"
			)}
		>
			<option class={clsx({ hidden: hidePlaceholder })} selected="true">
				{placeholder}
			</option>
			{items.map((item) => {
				return <option value={String(item.value)}>{item.label}</option>;
			})}
		</select>
	);
}

/**
 * Text Input props
 * @type {import("$common/props").JSXComponent<TextInputProps>}
 */
export function TextInput(props) {
	const { value = "", class: className, ...restProps } = props;
	return (
		<div
			class={clsx("input input-primary flex items-center gap-x-2", className)}
			x-data={`{ value: "${value}" }`}
		>
			<input type="text" {...restProps} x-model="value" class="flex-1 px-1" />
			<button
				type="button"
				x-bind:disabled="!value"
				x-on:click="value = ''"
				class="flex items-center justify-center"
				x-bind:class="value ? 'opacity-100' : 'opacity-0'"
			>
				<Icon name="close-line" size={5} />
			</button>
		</div>
	);
}

/**
 * Textarea Input props
 * @type {import("$common/props").JSXComponent<TextareaInputProps>}
 */
export function TextareaInput(props) {
	const {
		value = "",
		noResize = false,
		class: className,
		...restProps
	} = props;
	return (
		<textarea
			x-data={`{ value: "${value}" }`}
			x-model="value"
			class={clsx("border rounded-lg h-full p-2", className)}
			{...restProps}
		></textarea>
	);
}

/**
 * Text Input props
 * @type {import("$common/props").JSXComponent<TextInputProps>}
 */
export function TimeInput(props) {
const { value = "", class: className, ...restProps } = props;
	return (
		<div
			class={clsx("input flex items-center justify-center", className)}
			x-data={`{ value: "${value}" }`}
		>
			<input type="time" {...restProps} x-model="value" class="flex-1 px-1" />
		</div>
	);
}