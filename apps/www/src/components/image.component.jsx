/**
 * @typedef ImageProps
 * @type {Omit<JSX.HtmlImageTag, "className" | "loading"> & import("src/common/props").CLSXClassProps}
 */

/**
 * Image Component props
 * @param {ImageProps} props
 * @returns {string}
 */
export function Image({ ...restProps }) {
    return (
        <img {...{ ...restProps, loading: "lazy" }} />
    )
}