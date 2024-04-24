/**
 * @typedef RangeSliderProps
 * @type {Omit<import("$components/inputs.component").InputProps, "min" | "max" | "value" | "step"> & { min?: number, max?: number, value?: number, step?: number, backgroundThumbColor: string, backgroundProgressColor: string, thumbWidth?: number, thumbHeight?: number }}
 */

import clsx from "clsx";

/**
 * Range Slider component props
 * @type {import("$common/props").JSXComponent<RangeSliderProps>}
 */
export function RangeSlider(props) {
	const {
		min = 0,
		max = 100,
		value = 0,
		step = 1,
		backgroundProgressColor,
		backgroundThumbColor,
		...restProps
	} = props;

	return (
		<input
			type="range"
			min={String(min)}
			max={String(max)}
			value={String(value)}
			step={String(step)}
			{...restProps}
			class={clsx(
				"w-full h-full appearance-none flex items-center cursor-pointer bg-transparent z-30",
				`[&::-webkit-slider-thumb]:${backgroundThumbColor} [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-0 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:appearance-none`,
				`[&::-moz-range-thumb]:${backgroundThumbColor} [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:w-2.5 [&::-moz-range-thumb]:h-2.5 [&::-moz-range-thumb]:appearance-none`,
				`[&::-ms-thumb]:${backgroundThumbColor} [&::-ms-thumb]:rounded-full [&::-ms-thumb]:border-0 [&::-ms-thumb]:w-2.5 [&::-ms-thumb]:h-2.5 [&::-ms-thumb]:appearance-none`,
				"[&::-webkit-slider-runnable-track]:bg-neutral-200 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:overflow-hidden [&::-moz-range-track]:bg-neutral-200 [&::-moz-range-track]:rounded-full [&::-ms-track]:bg-neutral-200 [&::-ms-track]:rounded-full",
				`[&::-moz-range-progress]:${backgroundProgressColor} [&::-moz-range-progress]:rounded-full [&::-ms-fill-lower]:${backgroundProgressColor} [&::-ms-fill-lower]:rounded-full [&::-webkit-slider-thumb]:shadow-[-999px_0px_0px_990px_#4e97ff]`
			)}
		/>
	);
}
