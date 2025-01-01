/**
 * Tag component which is a wrapper for any html tag
 * @param {import("../common/props").HTMLTagWithChildren<{ as: import("../common/types").HTMLTagNameType }>} props
 */
export function Tag({ as, children, ...restProps }) {
	return (
		<tag of={/** @type {string} */ (as)} {...restProps}>
			{children}
		</tag>
	);
}
