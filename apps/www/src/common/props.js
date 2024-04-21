/**
 * @typedef CLSXClassProps
 * @property {string | string[] | Record<string, boolean> | Record<string, boolean>[]} [class]
 */

/**
 * @typedef DirectionProps
 * @property {import("src/common/types").DirectionType} [direction]
 */

/**
 * @typedef {Object} SizeProps
 * @property {import("src/common/types").SizeType} [size]
 */

/**
 * @typedef {Object} VariantColorProps
 * @property {import("src/common/types").VariantColorType} [variant]
 */

/**
 * @typedef HTMLTagWithChildren
 * @type {Omit<JSX.HtmlTag, "className"> & CLSXClassProps & import("hono/jsx").PropsWithChildren}
 */

/**
 * @template {Object} T
 * @typedef {(props: T) => string} JSXComponent
 */