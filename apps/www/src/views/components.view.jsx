import { Button } from "$components/button.component";
import { CodeViewer } from "$components/code-viewer.component";
import {
	Tabs,
	TabsHeader,
	TabHeaderItem,
	TabsBody,
	TabBodyItem
} from "$components/tabs.component";
import { Tooltip } from "$components/tooltip.component";
import { kebabCase } from "change-case";
import clsx from "clsx";

/**
 * @typedef {object} ComponentPresentationProps
 * @property {string} name The name of the page component
 * @property {string} [source] The source key of the github component link
 * @property {import("$common/props").CLSXClassProps} [class]
 * @property {import("@kitajs/html").Children} [children]
 */

/**
 * @param {ComponentPresentationProps} props
 */
export function ComponentPresentation({
	children,
	class: className,
	name,
	source
}) {
	const emClass =
		"[&_em]:bg-slate-700 [&_em]:px-2 [&_em]:py-1 [&_em]:rounded [&_em]:text-white";
	const h2Class =
		"[&_h2]:underline [&_h2]:underline-offset-2 [&_h2]:font-medium [&_h2]:text-slate-700";
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
				{name}
			</h1>

			<p class={"text-center"}>
				<a
					href={`https://github.com/billybillydev/jsxpine/blob/main/apps/www/src/components/${
						source ?? name.toLowerCase()
					}.component.jsx`}
					target="_blank"
					class={"link link-secondary"}
				>
					Find the source code here.
				</a>
			</p>
			{children}
		</div>
	);
}

/**
 * @typedef {object} ComponentSectionProps
 * @property {string} heading The heading name of the section
 * @property {string[]} [examples] Name of the component example file for preview
 * @property {import("@kitajs/html").Children} [children]
 */

/**
 * @param {ComponentSectionProps & Record<string, unknown>} props
 */
export function ComponentSection({ heading, examples, children, ...restProps }) {
	const id = kebabCase(heading);
	return (
		<section id={id}>
			<h2 safe>{heading}</h2>
			{children}
			{examples?.length ? (
				<div class="flex flex-col gap-y-4">
					{examples.map((example) => (
						<ComponentPreview {...restProps} filename={example} />
					))}
				</div>
			) : null}
		</section>
	);
}

/**
 * @param {import("$common/props").HTMLTag & { filename: string } & Record<string, unknown>} props
 */
export async function ComponentPreview(props) {
	const { filename, ...restProps } = props;
	// Use the appropriate method for Node.js and Deno
	const file = Bun.file(`src/views/examples/${props.filename}.example.jsx`);
	const text = await file.text();

	/** @type {import("@kitajs/html").Component} */
	const Component = await import(
		`$views/examples/${props.filename}.example.jsx`
	).then((m) => Object.values(m)[0]);

	return (
		<Tabs>
			<TabsHeader>
				<TabHeaderItem title="Preview" />
				<TabHeaderItem title="Code" />
			</TabsHeader>
			<TabsBody class={"bg-gray-100"}>
				<TabBodyItem class="component-preview">
					<Component {...restProps} />
				</TabBodyItem>
				<TabBodyItem class="max-h-[40rem] rounded overflow-y-auto">
					<Tooltip
						triggerOnHover={false}
						position="right"
						text="Copied !"
						type="success"
					>
						<Button
							variant="inversed"
							x-on:click={`
                                await $clipboard(${JSON.stringify(text)});
                                let timeout;
                                visible = true;
                                timeout = setTimeout(() => visible = false, 2500);
                            `}
							text="Copy"
						/>
					</Tooltip>
					<CodeViewer text={text} />
				</TabBodyItem>
			</TabsBody>
		</Tabs>
	);
}
