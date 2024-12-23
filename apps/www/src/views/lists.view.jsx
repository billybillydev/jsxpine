import clsx from "clsx";

/**
 * @param {import("$common/props").HTMLTagWithChildren} props
 */
export function ListWithDot({ children, class: className }) {
	return <ul class={clsx("list-disc ml-6", className)}>{children}</ul>;
}

/**
 * @param {import("$common/props").HTMLTagWithChildren} props
 */
export function ListWithDecimal({ children, class: className }) {
	return <ol class={clsx("list-decimal ml-6", className)}>{children}</ol>;
}
