import clsx from "clsx";

/**
 * Component Presentation props
 * @type {import("$common/props").JSXComponent<import("$common/props").HTMLTagWithChildren>}
 */
export function ComponentPresentation({ children, class: className }) {
	const emClass = "[&>em]:text-slate-500";
	const h2Class =
		"[&>h2]:underline [&>h2]:underline-offset-2 [&>h2]:font-medium [&>h2]:text-slate-700";
	return (
		<div
			class={clsx("flex flex-col gap-y-6 w-full", className, emClass, h2Class)}
		>
			{children}
		</div>
	);
}
