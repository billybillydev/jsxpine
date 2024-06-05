/**
 * @typedef {Object} ImageType
 * @property {string} src
 * @property {string} [alt]
 */

/**
 * @typedef ImageProps
 * @type {Omit<JSX.HtmlImageTag, "className" | "loading"> & import("$common/props").CLSXClassProps}
 */

/**
 * Image Component props
 * @type {import("$common/props").JSXComponent<ImageProps>}
 */
export function Image(props) {
    const { ...restProps } = props;
    
    return (
        <img {...{ ...restProps, loading: "lazy" }} />
    )
}