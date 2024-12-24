import { SecondaryButton } from "$components/button.component";
import { CodeViewer } from "$components/code-viewer.component";
import clsx from "clsx";

/**
 * @param {import("$common/props").HTMLTagWithChildren<{ lang: import("$components/code-viewer.component").CodeLanguage }>} props
 */
export function CodeToCopy({ children, class: className, lang }) {
	return (
		<section
			x-data="codeToCopy"
			class={clsx(
				"border rounded-lg flex gap-x-2 items-center p-2 w-fit",
				className
			)}
		>
			<div x-ref="codeToCopyContent">
				<CodeViewer lang={lang} text={children?.toString() ?? ""} />
			</div>
			<div class={"shrink-0"}>
				<SecondaryButton
					variant="outlined"
					text="Copy"
					x-show="!copied"
					x-bind="click"
				/>
				<span class={"p-1 rounded btn btn-success-outlined"} x-show="copied">
					Copied !
				</span>
			</div>
		</section>
	);
}
