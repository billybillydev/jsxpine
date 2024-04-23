import clsx from "clsx";

/**
 * @type {import("$common/props").JSXComponent<import("$components/inputs.component").CheckboxInputProps>}
 */
export function Checkbox(props) {
	const { children, class: className, id, ...restProps } = props;
	return (
		<div>
			<input type="checkbox" id={id} class="hidden peer" {...restProps} />
			<label for={id} class={clsx(className)}>
				{children}
			</label>
		</div>
	);
}
