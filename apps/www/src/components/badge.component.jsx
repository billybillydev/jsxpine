import clsx from "clsx";

/**
 * @typedef {"square" | "pill"} BadgeType
 */

/**
 * @typedef BadgeProps
 * @type {{ text?: string, type?: BadgeType } & import("$common/props").HTMLTagWithChildren & import("$common/props").VariantColorProps}
 */

/**
 * Badge component props
 * @param {BadgeProps} props
 */
export function Badge({
	children,
	text = "",
	variant = "solid",
	type = "pill",
	class: className,
	...restProps
}) {
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
 * @param {BadgeProps} props
 */
export function PrimaryBadge({
	children,
	class: className,
	variant = "solid",
	...restProps
}) {
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
			{children}
		</Badge>
	);
}

/**
 * Secondary Badge component props
 * @param {BadgeProps} props
 */
export function SecondaryBadge({
	children,
	class: className,
	variant = "solid",
	...restProps
}) {
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
			{children}
		</Badge>
	);
}

/**
 * Success Badge component props
 * @param {BadgeProps} props
 */
export function SuccessBadge({
	children,
	class: className,
	variant = "solid",
	...restProps
}) {
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
			{children}
		</Badge>
	);
}

/**
 * Danger Badge component props
 * @param {BadgeProps} props
 */
export function DangerBadge({
	children,
	class: className,
	variant = "solid",
	...restProps
}) {
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
			{children}
		</Badge>
	);
}

/**
 * Info Badge component props
 * @param {BadgeProps} props
 */
export function InfoBadge({
	children,
	class: className,
	variant = "solid",
	...restProps
}) {
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
			{children}
		</Badge>
	);
}

/**
 * Warning Badge component props
 * @param {BadgeProps} props
 */
export function WarningBadge({
	children,
	class: className,
	variant = "solid",
	...restProps
}) {
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
			{children}
		</Badge>
	);
}
