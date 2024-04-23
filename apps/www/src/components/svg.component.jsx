/**
 * @typedef SVGProps
 * @type {{fill?: string, stroke?: string, strokeWidth?: number, viewBox: string } & Omit<JSX.HtmlTag, "className"> & import("$common/props").CLSXClassProps}
 */

/**
 * SVG component props
 * @type {import("$common/props").JSXComponent<SVGProps>}
 */
export function SVG(props) {
    const {
        children,
        class: className,
        fill = "none",
        stroke = "currentColor",
        ...restProps
        } = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={fill}
            stroke={stroke}
            class={className}
            {...restProps}
        >
            {children}
        </svg>
    )
}