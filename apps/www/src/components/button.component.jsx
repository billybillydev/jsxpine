import clsx from "clsx";

/**
 * @typedef HTMLButtonTagWithChildren
 * @type {import("@kitajs/html").PropsWithChildren<Omit<JSX.HtmlButtonTag, "className"> & import("../common/props").CLSXClassProps>}
 */

/**
 * @typedef {Object} ButtonProps
 * @type {{ text?: string } & HTMLButtonTagWithChildren & import("../common/props").BorderRadiusProps & import("../common/props").SizeProps & import("../common/props").VariantColorProps}
 */

/**
 * Button component props
 * @param {ButtonProps} props
 */
export function Button({
	children,
	class: className,
	size = "md",
	text,
	variant = "solid",
	borderRadius = "rounded",
	...restProps
}) {
	/**
	 * @type {Map<import("../common/types").VariantColorType, string>}
	 */
	const variantColorMap = new Map([
		["solid", "btn"],
		["outlined", "btn-outlined"],
		["inversed", "btn-inversed"]
	]);

	/**
	 * @type {Map<import("../common/types").SizeType, string>}
	 */
	const sizeMap = new Map([
		["xs", "text-xs px-2 py-1"],
		["sm", "px-4 py-2 text-sm"],
		["md", "px-4 py-2"],
		["lg", "px-8 py-4 text-lg"],
		["xl", "px-12 py-6 text-xl"],
		["2xl", "px-16 py-8 text-4xl"]
	]);

	/**
	 * @type {Map<import("../common/types").BorderRadiusType, string>}
	 */
	const borderRadiusMap = new Map([
		["square", "rounded-none"],
		["rounded", "rounded"],
		["arc", "rounded-xl"],
		["pill", "rounded-full"],
		["curve", "rounded-lg"],
		["circle", "aspect-square rounded-full"]
	]);

	return (
		<button
			class={clsx(
				variantColorMap.get(variant),
				sizeMap.get(size),
				borderRadiusMap.get(borderRadius),
				className
			)}
			{...restProps}
		>
			{text ? <span safe>{text}</span> : children}
		</button>
	);
}

/**
 * Primary Button component props
 * @type {import("../common/props").JSXComponent<ButtonProps>}
 */
export function PrimaryButton(props) {
	const { children, class: className, variant = "solid", ...restProps } = props;
	/**
	 * @type {Map<import("../common/types").VariantColorType, string>}
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
 * @type {import("../common/props").JSXComponent<ButtonProps>}
 */
export function SecondaryButton(props) {
	const { children, class: className, variant = "solid", ...restProps } = props;
	/**
	 * @type {Map<import("../common/types").VariantColorType, string>}
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
 * @type {import("../common/props").JSXComponent<ButtonProps>}
 */
export function SuccessButton(props) {
	const { children, class: className, variant = "solid", ...restProps } = props;
	/**
	 * @type {Map<import("../common/types").VariantColorType, string>}
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
 * @type {import("../common/props").JSXComponent<ButtonProps>}
 */
export function DangerButton(props) {
	const { children, class: className, variant = "solid", ...restProps } = props;
	/**
	 * @type {Map<import("../common/types").VariantColorType, string>}
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
 * @type {import("../common/props").JSXComponent<ButtonProps>}
 */
export function InfoButton(props) {
	const { children, class: className, variant = "solid", ...restProps } = props;
	/**
	 * @type {Map<import("../common/types").VariantColorType, string>}
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
 * @type {import("../common/props").JSXComponent<ButtonProps>}
 */
export function WarningButton(props) {
	const { children, class: className, variant = "solid", ...restProps } = props;
	/**
	 * @type {Map<import("../common/types").VariantColorType, string>}
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
