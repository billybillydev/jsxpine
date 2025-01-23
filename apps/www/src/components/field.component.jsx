import { DateInput, EmailInput, FileInput, NumberInput, PasswordInput, SelectInput, TextareaInput, TextInput, TimeInput } from "./input.component";
import clsx from "clsx";

/**
 * @template {Record<string, unknown>} T
 * @typedef FieldProps - Props for a field component
 * @type {T & {label?: string, component: import("@kitajs/html").Children}}
 */

/**
 * @template {Record<string, unknown>} T
 * @typedef FieldWithoutComponentProps
 * @type {Omit<FieldProps<T>, "component">}
 */

/**
 * Default Field props
 * @template {(import("./input.component").InputProps | import("./input.component").SelectInputProps | import("./input.component").NumberInputProps) & Record<string, unknown>} T
 * @param {FieldProps<T>} props
 */
export function Field(props) {
	const {
		class: className,
		label,
		id,
		component
	} = props;
    
	return (
		<div class={clsx(className)}>
			{label ? (
				<label for={String(id)} class="text-sm leading-7" safe>
					{label}
				</label>
			) : null}
			{component}
		</div>
	);
}

/**
 * Date Field props
 * @type {import("../common/props").JSXComponent<FieldWithoutComponentProps<import("./input.component").TextInputProps>>}
 */
export function DateField(props) {
	const { label, ...restProps } = props;
	return <Field label={label} component={<DateInput {...restProps} />} />;
}

/**
 * Email Field props
 * @type {import("../common/props").JSXComponent<FieldWithoutComponentProps<import("./input.component").TextInputProps>>}
 */
export function EmailField(props) {
	const { label, ...restProps } = props;
	return <Field label={label} component={<EmailInput {...restProps} />} />;
}

/**
 * Text Field props
 * @type {import("../common/props").JSXComponent<FieldWithoutComponentProps<import("./input.component").TextInputProps>>}
 */
export function TextField(props) {
	const { label, ...restProps } = props;
	return <Field label={label} component={<TextInput {...restProps} />} />;
}

/**
 * Time Field props
 * @type {import("../common/props").JSXComponent<FieldWithoutComponentProps<import("./input.component").TextInputProps>>}
 */
export function TimeField(props) {
	const { label, ...restProps } = props;
	return <Field label={label} component={<TimeInput {...restProps} />} />;
}

/**
 * File Field props
 * @type {import("../common/props").JSXComponent<FieldWithoutComponentProps<import("./input.component").TextInputProps>>}
 */
export function FileField(props) {
	const { label, ...restProps } = props;
	return <Field label={label} component={<FileInput {...restProps} />} />;
}

/**
 * Select Field props
 * @type {import("../common/props").JSXComponent<FieldWithoutComponentProps<import("./input.component").SelectInputProps>>}
 */
export function SelectField(props) {
	const { label, ...restProps } = props;
	return <Field label={label} component={<SelectInput {...restProps} />} />;
}

/**
 * Textarea Field props
 * @type {import("../common/props").JSXComponent<FieldWithoutComponentProps<import("./input.component").TextareaInputProps>>}
 */
export function TextareaField(props) {
	const { label, ...restProps } = props;
	return <Field label={label} component={<TextareaInput {...restProps} />} />;
}

/**
 * Password Field props
 * @type {import("../common/props").JSXComponent<FieldWithoutComponentProps<import("./input.component").PasswordInputProps>>}
 */
export function PasswordField(props) {
	const { label, ...restProps } = props;
	return <Field label={label} component={<PasswordInput {...restProps} />} />;
}

/**
 * Number Field props
 * @type {import("../common/props").JSXComponent<FieldWithoutComponentProps<import("./input.component").NumberInputProps>>}
 */
export function NumberField(props) {
	const { label, ...restProps } = props;
	return <Field label={label} component={<NumberInput {...restProps} />} />;
}
