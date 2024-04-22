/**
 * @typedef {Object} ButtonProps
 * @type {{ text?: string } & import("$common/props").HTMLTagWithChildren & import("$common/props").BorderRadiusProps & import("$common/props").SizeProps & import("$common/props").VariantColorProps}
 */

import clsx from "clsx";

/**
 * Button component props
 * @type {import("$common/props").JSXComponent<ButtonProps>}
 */
export function Button(props) {
	const {
		children,
		class: className,
		size,
		text = "",
		variant = "solid",
		borderRadius = "rounded",
		...restProps
	} = props;

	/**
	 * @type {Map<import("$common/types").VariantColorType, string>}
	 */
	const variantColorMap = new Map([
		["solid", "btn"],
		["outlined", "btn-outlined"],
		["inversed", "btn-inversed"]
	]);

	/**
	 * @type {Map<import("$common/types").BorderRadiusType, string>}
	 */
	const borderRadiusMap = new Map([
		["square", "rounded-none"],
		["rounded", "rounded"],
		["arc", "rounded-xl"],
		["pill", "rounded-full"],
		["curve", "rounded-lg"],
		["circle", "btn-circle"]
	]);

	return (
		<button
			class={clsx(
				variantColorMap.get(variant),
				size ?? "px-2 py-1",
				borderRadiusMap.get(borderRadius),
				className
			)}
			{...restProps}
		>
			{text ? <span>{text}</span> : children}
		</button>
	);
}

/**
 * Primary Button component props
 * @type {import("$common/props").JSXComponent<ButtonProps>}
 */
export function PrimaryButton(props) {
	const { children, class: className, variant = "solid", ...restProps } = props;
	/**
	 * @type {Map<import("$common/types").VariantColorType, string>}
	 */
	const variantClassMap = new Map([
		["solid", "btn-primary"],
		["outlined", "btn-primary-outlined"],
		["inversed", "btn-primary-inversed"]
	]);

	return (
		<Button
			class={[variantClassMap.get(variant), className].join(" ")}
			{...restProps}
		>
			{children}
		</Button>
	);
}

/**
 * Secondary Button component props
 * @type {import("$common/props").JSXComponent<ButtonProps>}
 */
export function SecondaryButton(props) {
	const { children, class: className, variant = "solid", ...restProps } = props;
	/**
	 * @type {Map<import("$common/types").VariantColorType, string>}
	 */
	const variantClassMap = new Map([
		["solid", "btn-secondary"],
		["outlined", "btn-secondary-outlined"],
		["inversed", "btn-secondary-inversed"]
	]);

	return (
		<Button
			class={[variantClassMap.get(variant), className].join(" ")}
			{...restProps}
		>
			{children}
		</Button>
	);
}

/**
 * Success Button component props
 * @type {import("$common/props").JSXComponent<ButtonProps>}
 */
export function SuccessButton(props) {
	const { children, class: className, variant = "solid", ...restProps } = props;
	/**
	 * @type {Map<import("$common/types").VariantColorType, string>}
	 */
	const variantClassMap = new Map([
		["solid", "btn-success"],
		["outlined", "btn-success-outlined"],
		["inversed", "btn-success-inversed"]
	]);

	return (
		<Button
			class={[variantClassMap.get(variant), className].join(" ")}
			{...restProps}
		>
			{children}
		</Button>
	);
}

/**
 * Danger Button component props
 * @type {import("$common/props").JSXComponent<ButtonProps>}
 */
export function DangerButton(props) {
	const { children, class: className, variant = "solid", ...restProps } = props;
	/**
	 * @type {Map<import("$common/types").VariantColorType, string>}
	 */
	const variantClassMap = new Map([
		["solid", "btn-danger"],
		["outlined", "btn-danger-outlined"],
		["inversed", "btn-danger-inversed"]
	]);

	return (
		<Button
			class={[variantClassMap.get(variant), className].join(" ")}
			{...restProps}
		>
			{children}
		</Button>
	);
}

/**
 * Info Button component props
 * @type {import("$common/props").JSXComponent<ButtonProps>}
 */
export function InfoButton(props) {
	const { children, class: className, variant = "solid", ...restProps } = props;
	/**
	 * @type {Map<import("$common/types").VariantColorType, string>}
	 */
	const variantClassMap = new Map([
		["solid", "btn-info"],
		["outlined", "btn-info-outlined"],
		["inversed", "btn-info-inversed"]
	]);

	return (
		<Button
			class={[variantClassMap.get(variant), className].join(" ")}
			{...restProps}
		>
			{children}
		</Button>
	);
}

/**
 * Warning Button component props
 * @type {import("$common/props").JSXComponent<ButtonProps>}
 */
export function WarningButton(props) {
	const { children, class: className, variant = "solid", ...restProps } = props;
	/**
	 * @type {Map<import("$common/types").VariantColorType, string>}
	 */
	const variantClassMap = new Map([
		["solid", "btn-warning"],
		["outlined", "btn-warning-outlined"],
		["inversed", "btn-warning-inversed"]
	]);

	return (
		<Button
			class={[variantClassMap.get(variant), className].join(" ")}
			{...restProps}
		>
			{children}
		</Button>
	);
}