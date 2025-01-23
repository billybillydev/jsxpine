import { kebabCase } from "change-case";
import clsx from "clsx";

/**
 * @param {import("$common/props").HTMLTagWithChildren<{ heading: string; description?: string }>} props
 */
export function CorePresentation({
	description,
	class: className,
	heading,
	children
}) {
	const emClass =
		"[&_em]:bg-foreground [&_em]:px-2 [&_em]:py-1 [&_em]:rounded [&_em]:text-background";
	const h2Class =
		"[&_h2]:font-medium";
	return (
		<div
			class={clsx(
				"relative leading-loose flex flex-col gap-y-6 w-full py-4",
				className,
				emClass,
				h2Class
			)}
		>
			<h1 class={"text-center border rounded shadow-sm"} safe>
				{heading}
			</h1>
			{description ? <p safe>{description}</p> : null}
			{children}
		</div>
	);
}

/**
 * @param {import("$common/props").HTMLTagWithChildren<{ heading: string }>} props
 */
export function CoreSection({ heading, children, class: className }) {
	const id = kebabCase(heading);

	return (
		<section id={id} class={clsx(className)}>
			<h2 safe>{heading}</h2>
			{children}
		</section>
	);
}
