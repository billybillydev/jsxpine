import clsx from "clsx";

/**
 * Component Presentation props
 * @type {import("$common/props").JSXComponent<import("$common/props").HTMLTagWithChildren>}
 */
export function ComponentPresentation({ children, class: className }) {
	const emClass = "[&_em]:text-slate-500";
	const h2Class =
		"[&_h2]:underline [&_h2]:underline-offset-2 [&_h2]:font-medium [&_h2]:text-slate-700";
	return (
		<div
			class={clsx("relative flex flex-col gap-y-6 w-full py-4", className, emClass, h2Class)}
		>
			{children}
		</div>
	);
}
