/**
 * @typedef BorderRadiusProps
 * @property {import("src/common/types").BorderRadiusType} [borderRadius]
 */

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
 * @typedef HTMLTag
 * @type {Omit<JSX.HtmlTag, "className"> & CLSXClassProps}
 */

/**
 * @typedef HTMLTagWithChildren
 * @type {import("hono/jsx").PropsWithChildren<Omit<JSX.HtmlTag, "className"> & CLSXClassProps>}
 */

/**
 * @template {Object} T
 * @typedef {(props: T) => string} JSXComponent
 */

/**
 * @typedef ThemeColorProps
 * @property {import("src/common/types").ThemeColorType} [type]
 */