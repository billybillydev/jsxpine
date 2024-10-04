/**
 * @typedef ImagePickerProps
 * @type {Omit<import("./input.component").InputProps, "accept">}
 */

/**
 * @type {import("../common/props").JSXComponent<ImagePickerProps>}
 */
export function ImagePicker(props) {
	const { children, class: className, ...restProps } = props;
	return (
		<div x-data={`imagepicker`} class={className}>
			<input
				type="file"
				class="hidden"
				x-ref="filepicker"
				accept="image/*"
				{...restProps}
				x-on:input="selectFile($event.target.files)"
			/>
			{children}
		</div>
	);
}
