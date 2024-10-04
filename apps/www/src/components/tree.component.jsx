import clsx from "clsx";

/**
 * @typedef TreeType 
 * @type {Record<string, unknown> & { id: string, label?: string, icon?: string | import("../common/props").HTMLTag, parent?: string, children?: TreeType[] }}
 */

/**
 * @typedef TreeProps
 * @property {TreeType} root
 */

/**
 * @typedef MenuTreeProps
 * @type {import("../common/props").HTMLTag & TreeProps}
 */

/**
 *
 * @type {import("../common/props").JSXComponent<MenuTreeProps>}
 */
export function MenuTree(props) {
	const { children, class: className, root } = props;
	return (
		<div
			x-data={`tree(${JSON.stringify(root)})`}
			x-ref="treeNav"
			class={clsx("w-full", className)}
		>
			{children}
		</div>
	);
}
