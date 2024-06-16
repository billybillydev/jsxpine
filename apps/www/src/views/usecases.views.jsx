import clsx from "clsx";

/**
 * @typedef UseCasePresentationProps
 * @property {string} heading
 * @property {string} description
 * @property {import("@kitajs/html").Children} [children]
 */

/**
 * @param {UseCasePresentationProps} props
 */
export function UseCasePresentation({ children, description, heading }) {
	return (
		<div class={clsx("flex flex-col h-full relative py-4 gap-y-6")}>
			<h1 class="text-center">{heading}</h1>
			<p>{description}</p>
			{children}
		</div>
	);
}
