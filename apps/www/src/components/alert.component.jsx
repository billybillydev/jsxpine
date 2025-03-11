import { Icon } from "./icon.component";
import clsx from "clsx";

/**
 * @typedef AlertProps
 * @type {{ title?: string, icon?: import("@kitajs/html").Children, iconName?: import("./icon.component").IconName } & import("../common/props").VariantColorProps & import("../common/props").HTMLTag}
 */

/**
 * Alert props
 * @param {AlertProps} props
 */
export function Alert({
	class: className,
	title,
	children,
	icon,
	iconName,
	...restProps
}) {
	return (
		<div
			class={clsx(
				"relative w-full flex flex-col gap-y-2 rounded-lg border p-4",
				className
			)}
			{...restProps}
		>
			{title ? (
				<h4 class="mb-1 font-medium leading-none tracking-tight flex items-center gap-x-3">
					{icon ?? (iconName ? <Icon name={iconName} /> : null)}
					<span safe>{title}</span>
				</h4>
			) : null}
			<div class="text-sm opacity-90">{children}</div>
		</div>
	);
}

/**
 * Primary Alert props
 * @param {AlertProps} props
 */
export function PrimaryAlert({ variant = "solid", ...restProps }) {
	/**
	 * @type {Map<import("../common/types").VariantColorType, string>}
	 */
	const variantColorMap = new Map([
		["solid", "border-transparent bg-primary text-primary-foreground"],
		["outlined", "border-transparent text-primary bg-primary-light-1"],
		[
			"inversed",
			"border-primary text-primary dark:border-primary-light-1 dark:text-primary-light-1"
		]
	]);

	return <Alert class={variantColorMap.get(variant)} {...restProps} />;
}

/**
 * Secondary Alert props
 * @param {AlertProps} props
 */
export function SecondaryAlert({ variant = "solid", ...restProps }) {
	/**
	 * @type {Map<import("../common/types").VariantColorType, string>}
	 */
	const variantColorMap = new Map([
		["solid", "border-transparent bg-secondary text-secondary-foreground"],
		["outlined", "border-transparent text-secondary bg-secondary-light"],
		[
			"inversed",
			"border-secondary text-secondary dark:border-secondary-light dark:text-secondary-light"
		]
	]);

	return <Alert class={variantColorMap.get(variant)} {...restProps} />;
}

/**
 * Success Alert props
 * @param {AlertProps} props
 */
export function SuccessAlert({ variant = "solid", ...restProps }) {
	/**
	 * @type {Map<import("../common/types").VariantColorType, string>}
	 */
	const variantColorMap = new Map([
		["solid", "border-transparent bg-success text-foreground"],
		["outlined", "border-transparent text-success-dark bg-success-light"],
		["inversed", "border-success text-success"]
	]);

	return <Alert class={variantColorMap.get(variant)} {...restProps} />;
}

/**
 * Danger Alert props
 * @param {AlertProps} props
 */
export function DangerAlert({ variant = "solid", ...restProps }) {
	/**
	 * @type {Map<import("../common/types").VariantColorType, string>}
	 */
	const variantColorMap = new Map([
		["solid", "border-transparent bg-danger text-foreground"],
		["outlined", "border-transparent text-danger bg-danger-light"],
		["inversed", "border-danger text-danger"]
	]);

	return <Alert class={variantColorMap.get(variant)} {...restProps} />;
}

/**
 * Info Alert props
 * @param {AlertProps} props
 */
export function InfoAlert({ variant = "solid", ...restProps }) {
	/**
	 * @type {Map<import("../common/types").VariantColorType, string>}
	 */
	const variantColorMap = new Map([
		["solid", "border-transparent bg-info text-info-foreground"],
		["outlined", "border-transparent text-info-dark bg-info-light"],
		["inversed", "border-info text-info"]
	]);

	return <Alert class={variantColorMap.get(variant)} {...restProps} />;
}

/**
 * Warning Alert props
 * @param {AlertProps} props
 */
export function WarningAlert({ variant = "solid", ...restProps }) {
	/**
	 * @type {Map<import("../common/types").VariantColorType, string>}
	 */
	const variantColorMap = new Map([
		["solid", "border-transparent bg-warning text-warning-foreground"],
		["outlined", "border-transparent text-warning-dark bg-warning-light"],
		["inversed", "border-warning text-warning-dark dark:text-warning"]
	]);

	return <Alert class={variantColorMap.get(variant)} {...restProps} />;
}
