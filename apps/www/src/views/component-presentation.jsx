import clsx from "clsx";

/**
 * Component Presentation props
 * @param {JSX.HtmlTag & JSX.ElementChildrenAttribute} props
 * @returns {string}
 */
export function ComponentPresentation({ children }) {
	const emClass = "&>em:text-slate-500";
	const h2Class =
		"h2:underline h2:underline-offset-2 h2:font-medium h2:text-slate-700";
	return (
		<div class={clsx("flex flex-col gap-y-6", emClass, h2Class)}>
			{children}
		</div>
	);
}
