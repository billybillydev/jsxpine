import clsx from "clsx";

/**
 * Component Presentation props
 * @param {import("$common/props").HTMLTagWithChildren} props
 */
export function ComponentPresentation({ children, class: className }) {
	const emClass = "[&_em]:text-slate-500";
	const h2Class =
		"[&_h2]:underline [&_h2]:underline-offset-2 [&_h2]:font-medium [&_h2]:text-slate-700";
	return (
		<div
			class={clsx("relative flex flex-col h-full gap-y-6 w-full py-4 overflow-x-hidden", className, emClass, h2Class)}
		>
			{children}
		</div>
	);
}
