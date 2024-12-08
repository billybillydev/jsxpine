/**
 * @param {import("@kitajs/html").PropsWithChildren} props
 */
export function ListWithDot({ children }) {
	return <ul class={"list-disc ml-6"}>{children}</ul>;
}

/**
 * @param {import("@kitajs/html").PropsWithChildren} props
 */
export function ListWithDecimal({ children }) {
	return <ol class={"list-decimal ml-6"}>{children}</ol>;
}
