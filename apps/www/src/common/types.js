import { tailwindThemeConfig } from "./tailwind-config";
import { icons } from "@iconify-json/ri/index.js";

/**
 * Border Radius Type enum
 * @typedef {"square" | "curve" | "arc" | "rounded" | "pill" | "circle"} BorderRadiusType
 */

/**
 * Direction Type enum
 * @typedef {"horizontal" | "vertical"} DirectionType
 */

const iconsKeys = [...Object.keys(icons.icons)];
/**
 * @typedef {typeof iconsKeys} IconKeyType
 */

/**
 * Position Type enum
 * @typedef {"top" | "bottom" | "left" | "right"} PositionType
 */

/**
 * @typedef {"xs" | "sm" | "md" | "lg" | "xl" | "2xl"} SizeType
 */

/**
 * Theme Color Type enum
 * @typedef {"primary" | "secondary" | "success" | "danger" | "info" | "warning"} ThemeColorType
 */

/**
 * @typedef {Object} TransitionStateType
 * @property {{ start: string, end: string }} enter
 * @property {{ start: string, end: string }} leave
 */

/**
 * Variant Color Type enum
 * @typedef {"solid" | "outlined" | "inversed"} VariantColorType
 */

/**
 *  HTML Tag Name Type enum
 * @typedef {keyof HTMLElementTagNameMap} HTMLTagNameType
 */

export const specificSizes = [...Object.keys(tailwindThemeConfig.width)];
/**
 * @typedef {typeof specificSizes[number]} SpecificSizeType
 */