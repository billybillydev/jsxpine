import clsx from "clsx";

/**
 * Checkbox component props
 * @param {import("./input.component").CheckboxInputProps} props
 */
export function Checkbox({ children, class: className, id, ...restProps }) {
	return (
		<div>
			<input type="checkbox" id={id} class="hidden peer" {...restProps} />
			<label for={String(id)} class={clsx(className)}>
				{children}
			</label>
		</div>
	);
}
