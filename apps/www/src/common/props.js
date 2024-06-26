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
 * @type {Html.PropsWithChildren<HTMLTag>}
 */

/**
 * @typedef PositionProps
 * @property {import("src/common/types").PositionType} [position]
 */

/**
 * @template {Object} T
 * @typedef {(props: T) => JSX.Element} JSXComponent
 */

/**
 * @typedef ThemeColorProps
 * @property {import("src/common/types").ThemeColorType} [type]
 */
