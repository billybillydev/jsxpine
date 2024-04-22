/**
 * @typedef {"square" | "pill"} BadgeType
 */

import clsx from "clsx";

/**
 * @typedef BadgeProps
 * @type {{ text?: string, type?: BadgeType } & import("$common/props").HTMLTagWithChildren & import("$common/props").VariantColorProps}
 */

/**
 * Badge component props
 * @type {import("$common/props").JSXComponent<BadgeProps>}
 */
export function Badge(props) {
	const {
		children,
		text = "",
		variant = "solid",
		type = "pill",
		class: className,
		...restProps
	} = props;

	/**
	 * @type {Map<import("$common/types").VariantColorType, string>}
	 */
	const variantMap = new Map([
		["solid", "bg-slate-500 text-white"],
		["outlined", "bg-slate-300 text-slate-700"],
		["inversed", "border border-slate-700 text-slate-700"]
	]);

	/**
	 * @type {Map<BadgeType, string>}
	 */
	const badgeTypeMap = new Map([
		["pill", "rounded-full"],
		["square", "rounded-none"]
	]);
	return (
		<div
			class={clsx(
				"px-4 py-1 ",
				badgeTypeMap.get(type),
				className ?? variantMap.get(variant)
			)}
			{...restProps}
		>
			{text || children}
		</div>
	);
}

/**
 * Primary Badge component props
 * @type {import("$common/props").JSXComponent<BadgeProps>}
 */
export function PrimaryBadge(props) {
	const { class: className, variant = "solid", ...restProps } = props;

	/**
	 * @type {Map<import("$common/types").VariantColorType, string>}
	 */
	const variantClassMap = new Map([
		["solid", "bg-primary-600 text-white"],
		["outlined", "bg-primary-200 text-primary-700"],
		["inversed", "border border-primary-600 text-primary-600"]
	]);

	return (
		<Badge
			class={[variantClassMap.get(variant), className].join(" ")}
			{...restProps}
		>
			<slot />
		</Badge>
	);
}

/**
 * Secondary Badge component props
 * @type {import("$common/props").JSXComponent<BadgeProps>}
 */
export function SecondaryBadge(props) {
	const { class: className, variant = "solid", ...restProps } = props;

	/**
	 * @type {Map<import("$common/types").VariantColorType, string>}
	 */
	const variantClassMap = new Map([
		["solid", "bg-secondary text-white"],
		["outlined", "bg-slate-400 text-secondary"],
		["inversed", "border border-secondary text-secondary"]
	]);

	return (
		<Badge
			class={[variantClassMap.get(variant), className].join(" ")}
			{...restProps}
		>
			<slot />
		</Badge>
	);
}

/**
 * Success Badge component props
 * @type {import("$common/props").JSXComponent<BadgeProps>}
 */
export function SuccessBadge(props) {
	const { class: className, variant = "solid", ...restProps } = props;

	/**
	 * @type {Map<import("$common/types").VariantColorType, string>}
	 */
	const variantClassMap = new Map([
		["solid", "bg-success-600 text-white"],
		["outlined", "bg-success-200 text-success-700"],
		["inversed", "border border-success-600 text-success-600"]
	]);

	return (
		<Badge
			class={[variantClassMap.get(variant), className].join(" ")}
			{...restProps}
		>
			<slot />
		</Badge>
	);
}

/**
 * Danger Badge component props
 * @type {import("$common/props").JSXComponent<BadgeProps>}
 */
export function DangerBadge(props) {
	const { class: className, variant = "solid", ...restProps } = props;

	/**
	 * @type {Map<import("$common/types").VariantColorType, string>}
	 */
	const variantClassMap = new Map([
		["solid", "bg-danger-600 text-white"],
		["outlined", "bg-danger-200 text-danger-700"],
		["inversed", "border border-danger-600 text-danger-600"]
	]);

	return (
		<Badge
			class={[variantClassMap.get(variant), className].join(" ")}
			{...restProps}
		>
			<slot />
		</Badge>
	);
}

/**
 * Info Badge component props
 * @type {import("$common/props").JSXComponent<BadgeProps>}
 */
export function InfoBadge(props) {
	const { class: className, variant = "solid", ...restProps } = props;

	/**
	 * @type {Map<import("$common/types").VariantColorType, string>}
	 */
	const variantClassMap = new Map([
		["solid", "bg-info-600 text-white"],
		["outlined", "bg-info-200 text-info-700"],
		["inversed", "border border-info-600 text-info-600"]
	]);

	return (
		<Badge
			class={[variantClassMap.get(variant), className].join(" ")}
			{...restProps}
		>
			<slot />
		</Badge>
	);
}

/**
 * Warning Badge component props
 * @type {import("$common/props").JSXComponent<BadgeProps>}
 */
export function WarningBadge(props) {
	const { class: className, variant = "solid", ...restProps } = props;

	/**
	 * @type {Map<import("$common/types").VariantColorType, string>}
	 */
	const variantClassMap = new Map([
		["solid", "bg-warning-600 text-white"],
		["outlined", "bg-warning-200 text-warning-700"],
		["inversed", "border border-warning-600 text-warning-600"]
	]);

	return (
		<Badge
			class={[variantClassMap.get(variant), className].join(" ")}
			{...restProps}
		>
			<slot />
		</Badge>
	);
}
