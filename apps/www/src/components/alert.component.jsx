import { Icon } from "./icon.component";
import clsx from "clsx";

/**
 * @typedef AlertProps
 * @type {{ title?: string, icon?: import("@kitajs/html").Children } & import("../common/props").VariantColorProps & import("../common/props").HTMLTag}
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
	...restProps
}) {
	return (
		<div
			class={clsx(
				"relative w-full flex flex-col gap-y-2 rounded-lg border p-4 [&>svg]:absolute [&>svg]:text-foreground [&>svg]:left-4 [&>svg]:top-4 [&>svg+div]:translate-y-[-3px] [&:has(svg)]:pl-11",
				className || "bg-white text-slate-800"
			)}
			{...restProps}
		>
			{title ? (
				<h4 class="mb-1 font-medium leading-none tracking-tight flex items-center gap-x-3">
					{icon ? (
						typeof icon === "string" ? (
							<Icon name={String(icon)} size={5} />
						) : (
							icon
						)
					) : null}
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
		["solid", "border-transparent bg-primary-500 text-white"],
		["outlined", "border-transparent text-primary-500 bg-primary-100"],
		["inversed", "border-primary-500 text-primary-500"]
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
		["solid", "border-transparent bg-secondary text-white"],
		["outlined", "border-transparent text-secondary bg-slate-200"],
		["inversed", "border-secondary text-secondary"]
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
		["solid", "border-transparent bg-success-500 text-white"],
		["outlined", "border-transparent text-success-500 bg-success-100"],
		["inversed", "border-success-500 text-success-500"]
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
		["solid", "border-transparent bg-danger-500 text-white"],
		["outlined", "border-transparent text-danger-500 bg-danger-100"],
		["inversed", "border-danger-500 text-danger-500"]
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
		["solid", "border-transparent bg-info-500 text-white"],
		["outlined", "border-transparent text-info-500 bg-info-100"],
		["inversed", "border-info-500 text-info-500"]
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
		["solid", "border-transparent bg-warning-500 text-white"],
		["outlined", "border-transparent text-warning-500 bg-warning-100"],
		["inversed", "border-warning-500 text-warning-500"]
	]);

	return <Alert class={variantColorMap.get(variant)} {...restProps} />;
}
