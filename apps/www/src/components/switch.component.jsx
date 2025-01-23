import clsx from "clsx";

/**
 * @typedef SwitchProps 
 * @type {{ label: string } & import("./input.component").InputProps & import("../common/props").ThemeColorProps}
 */

/**
 * Switch component props
 * @type {import("../common/props").JSXComponent<SwitchProps>}
 */
export function Switch(props) {
	const {
		class: className,
		name,
		id,
		label,
		type = "primary",
		...restProps
	} = props;

	/**
	 * @type {Map<import("../common/types").ThemeColorType, { button: string; label: string }>}
	 */
	const colorType = new Map([
		[
			"primary",
			{
				button: "bg-primary",
				label: "text-primary-dark-1 dark:text-primary-light-1"
			}
		],
		[
			"secondary",
			{
				button: "bg-secondary",
				label: "text-secondary dark:text-secondary-light"
			}
		],
		[
			"success",
			{
				button: "bg-success",
				label: "text-success-dark dark:text-success-light"
			}
		],
		[
			"danger",
			{ button: "bg-danger", label: "text-danger-dark" }
		],
		[
			"info",
			{ button: "bg-info", label: "text-info-dark dark:text-info-light" }
		],
		[
			"warning",
			{
				button: "bg-warning",
				label: "text-warning-dark dark:text-warning-light"
			}
		]
	]);
	return (
		<div
			x-data={`switchCheckbox("${label}")`}
			class={clsx("flex items-center justify-center gap-x-2", className)}
			{...restProps}
		>
			<input
				id={id}
				type="checkbox"
				name={name}
				x-ref="checkbox"
				class="hidden"
				x-bind:checked="switchOn"
			/>

			<button
				x-ref="switchButton"
				type="button"
				x-on:click="toggle"
				x-bind:class={`switchOn ? '${
					colorType.get(type)?.button
				}' : 'bg-base-light'`}
				class="relative transition-colors duration-200 inline-flex focus:outline-none rounded-full grow"
				x-cloak="true"
			>
				<span
					x-bind:class="switchOn ? 'left-full -translate-x-[110%]' : 'translate-x-0.5'"
					class="absolute top-1/2 -translate-y-1/2 left-0 w-5 h-5 duration-200 ease-in-out bg-background rounded-full shadow-md"
				/>
			</button>

			<template x-if="label">
				<label
					x-on:click="$refs.switchButton.click(); $refs.switchButton.focus()"
					x-bind:class={`{ '${
						colorType.get(type)?.label
					}' : switchOn, 'text-foreground': !switchOn }`}
					x-text="label"
					class="text-sm select-none"
					x-cloak="true"
				/>
			</template>
		</div>
	);
}
