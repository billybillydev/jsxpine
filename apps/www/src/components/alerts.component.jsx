import clsx from "clsx";

/**
 * @typedef AlertProps
 * @type {{ title: string } & import("src/common/props").VariantColorProps & import("src/common/props").HTMLTagWithChildren}
 */

/**
 * Alert props
 * @type {import("$common/props").JSXComponent<AlertProps>}
 */
export function Alert({ class: className, title, children }) {
	return (
		<div
			class={clsx(
				"relative w-full flex flex-col gap-y-2 rounded-lg border p-4 [&>svg]:absolute [&>svg]:text-foreground [&>svg]:left-4 [&>svg]:top-4 [&>svg+div]:translate-y-[-3px] [&:has(svg)]:pl-11",
				className || "bg-white text-slate-800"
			)}
		>
			{/* <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" x2="20" y1="19" y2="19"></line></svg> */}
			<h4 class="mb-1 font-medium leading-none tracking-tight">{title}</h4>
			<div class="text-sm opacity-90">{children}</div>
		</div>
	);
}

/**
 * Primary Alert props
 * @type {import("$common/props").JSXComponent<AlertProps>}
 */
export function PrimaryAlert({ children, title, variant = "solid" }) {
	/**
	 * @type {Map<import("src/common/types").VariantColorType, string>}
	 */
	const variantColorMap = new Map([
		["solid", "border-transparent bg-primary-500 text-white"],
		["outlined", "border-transparent text-primary-500 bg-primary-100"],
		["inversed", "border-primary-500 text-primary-500"]
	]);

	return (
		<Alert class={variantColorMap.get(variant)} title={title}>
			{children}
		</Alert>
	);
}

/**
 * Secondary Alert props
 * @type {import("$common/props").JSXComponent<AlertProps>}
 */
export function SecondaryAlert({ children, title, variant = "solid" }) {
	/**
	 * @type {Map<import("src/common/types").VariantColorType, string>}
	 */
	const variantColorMap = new Map([
		["solid", "border-transparent bg-secondary text-white"],
		["outlined", "border-transparent text-secondary bg-slate-200"],
		["inversed", "border-secondary text-secondary"]
	]);

	return (
		<Alert class={variantColorMap.get(variant)} title={title}>
			{children}
		</Alert>
	);
}

/**
 * Success Alert props
 * @type {import("$common/props").JSXComponent<AlertProps>}
 */
export function SuccessAlert({ children, title, variant = "solid" }) {
	/**
	 * @type {Map<import("src/common/types").VariantColorType, string>}
	 */
	const variantColorMap = new Map([
		["solid", "border-transparent bg-success-500 text-white"],
		["outlined", "border-transparent text-success-500 bg-success-100"],
		["inversed", "border-success-500 text-success-500"]
	]);

	return (
		<Alert class={variantColorMap.get(variant)} title={title}>
			{children}
		</Alert>
	);
}

/**
 * Danger Alert props
 * @type {import("$common/props").JSXComponent<AlertProps>}
 */
export function DangerAlert({ children, title, variant = "solid" }) {
	/**
	 * @type {Map<import("src/common/types").VariantColorType, string>}
	 */
	const variantColorMap = new Map([
		["solid", "border-transparent bg-danger-500 text-white"],
		["outlined", "border-transparent text-danger-500 bg-danger-100"],
		["inversed", "border-danger-500 text-danger-500"]
	]);

	return (
		<Alert class={variantColorMap.get(variant)} title={title}>
			{children}
		</Alert>
	);
}

/**
 * Info Alert props
 * @type {import("$common/props").JSXComponent<AlertProps>}
 */
export function InfoAlert({ children, title, variant = "solid" }) {
	/**
	 * @type {Map<import("src/common/types").VariantColorType, string>}
	 */
	const variantColorMap = new Map([
		["solid", "border-transparent bg-info-500 text-white"],
		["outlined", "border-transparent text-info-500 bg-info-100"],
		["inversed", "border-info-500 text-info-500"]
	]);

	return (
		<Alert class={variantColorMap.get(variant)} title={title}>
			{children}
		</Alert>
	);
}

/**
 * Warning Alert props
 * @type {import("$common/props").JSXComponent<AlertProps>}
 */
export function WarningAlert({ children, title, variant = "solid" }) {
	/**
	 * @type {Map<import("src/common/types").VariantColorType, string>}
	 */
	const variantColorMap = new Map([
		["solid", "border-transparent bg-warning-500 text-white"],
		["outlined", "border-transparent text-warning-500 bg-warning-100"],
		["inversed", "border-warning-500 text-warning-500"]
	]);

	return (
		<Alert class={variantColorMap.get(variant)} title={title}>
			{children}
		</Alert>
	);
}
