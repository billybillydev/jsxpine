import clsx from "clsx";

/**
 * @typedef SwitchProps 
 * @type {{ label: string } & import("$components/input.component").InputProps & import("$common/props").ThemeColorProps}
 */

/**
 * Switch component props
 * @type {import("$common/props").JSXComponent<SwitchProps>}
 */
export function Switch(props) {
	const {
		class: className,
		name,
		id,
		label,
		type = "info",
		...restProps
	} = props;

	/**
	 * @type {Map<import("$common/types").ThemeColorType, { button: string; label: string }>}
	 */
	const colorType = new Map([
		["primary", { button: "bg-primary-500", label: "text-primary-600" }],
		["secondary", { button: "bg-secondary", label: "text-secondary" }],
		["success", { button: "bg-success-600", label: "text-success-600" }],
		["danger", { button: "bg-danger-600", label: "text-danger-600" }],
		["info", { button: "bg-info-600", label: "text-info-600" }],
		["warning", { button: "bg-warning-600", label: "text-warning-600" }]
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
				}' : 'bg-neutral-200'`}
				class="relative transition-colors duration-200 inline-flex focus:outline-none rounded-full grow"
				x-cloak="true"
			>
				<span
					x-bind:class="switchOn ? 'left-full -translate-x-[110%]' : 'translate-x-0.5'"
					class="absolute top-1/2 -translate-y-1/2 left-0 w-5 h-5 duration-200 ease-in-out bg-white rounded-full shadow-md"
				/>
			</button>

			<template x-if="label">
				<label
					x-on:click="$refs.switchButton.click(); $refs.switchButton.focus()"
					x-bind:class={`{ '${
						colorType.get(type)?.label
					}' : switchOn, 'text-gray-400': !switchOn }`}
					x-text="label"
					class="text-sm select-none"
					x-cloak="true"
				/>
			</template>
		</div>
	);
}
