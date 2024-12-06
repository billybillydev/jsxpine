/**
 * @typedef BorderRadiusProps
 * @property {import("./types").BorderRadiusType} [borderRadius]
 */

/**
 * @typedef CLSXClassProps
 * @property {string | string[] | Record<string, boolean> | Record<string, boolean>[]} [class]
 */

/**
 * @typedef DirectionProps
 * @property {import("./types").DirectionType} [direction]
 */

/**
 * @typedef {Object} SizeProps
 * @property {import("./types").SizeType} [size]
 */

/**
 * @typedef {Object} VariantColorProps
 * @property {import("./types").VariantColorType} [variant]
 */

/**
 * @typedef HTMLTag
 * @type {Omit<JSX.HtmlTag, "className"> & CLSXClassProps}
 */

/**
 * @template [T=object]
 * @typedef HTMLTagWithChildren<T>
 * @type {import("@kitajs/html").PropsWithChildren<T extends void ? HTMLTag : HTMLTag & T>}
 */

/**
 * @typedef PositionProps
 * @property {import("./types").PositionType} [position]
 */

/**
 * @template {Object} T
 * @typedef {(props: T) => JSX.Element} JSXComponent
 */

/**
 * @typedef ThemeColorProps
 * @property {import("./types").ThemeColorType} [type]
 */
