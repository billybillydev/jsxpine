import clsx from "clsx";

/**
 * @typedef {"square" | "pill"} BadgeType
 */

/**
 * @typedef BadgeProps
 * @type {{ text?: string, type?: BadgeType } & import("../common/props").HTMLTagWithChildren & import("../common/props").VariantColorProps}
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
	 * @type {Map<import("../common/types").VariantColorType, string>}
	 */
	const variantMap = new Map([
		["solid", "bg-base text-background"],
		["outlined", "bg-base-light text-base-dark"],
		["inversed", "border border-muted-foreground text-muted-foreground"]
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
	 * @type {Map<import("../common/types").VariantColorType, string>}
	 */
	const variantClassMap = new Map([
		["solid", "bg-primary text-primary-foreground"],
		["outlined", "bg-primary-light text-primary-dark"],
		["inversed", "border border-primary text-primary"]
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
	 * @type {Map<import("../common/types").VariantColorType, string>}
	 */
	const variantClassMap = new Map([
		["solid", "bg-secondary text-secondary-foreground"],
		["outlined", "bg-secondary-light text-secondary"],
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
	 * @type {Map<import("../common/types").VariantColorType, string>}
	 */
	const variantClassMap = new Map([
		["solid", "bg-success text-success-foreground"],
		["outlined", "bg-success-light text-success-dark"],
		["inversed", "border border-success text-success"]
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
	 * @type {Map<import("../common/types").VariantColorType, string>}
	 */
	const variantClassMap = new Map([
		["solid", "bg-danger text-danger-foreground"],
		["outlined", "bg-danger-light text-danger-dark"],
		["inversed", "border border-danger text-danger"]
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
	 * @type {Map<import("../common/types").VariantColorType, string>}
	 */
	const variantClassMap = new Map([
		["solid", "bg-info text-info-foreground"],
		["outlined", "bg-info-light text-info-dark"],
		["inversed", "border border-info text-info"]
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
	 * @type {Map<import("../common/types").VariantColorType, string>}
	 */
	const variantClassMap = new Map([
		["solid", "bg-warning text-warning-foreground"],
		["outlined", "bg-warning-light text-warning-dark"],
		["inversed", "border border-warning text-warning"]
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
