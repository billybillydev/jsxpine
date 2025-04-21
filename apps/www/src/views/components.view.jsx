import { Button, SecondaryButton } from "$components/button.component";
import { CodeToCopy } from "$components/code-to-copy.component";
import { CodeViewer } from "$components/code-viewer.component";
import {
	Tabs,
	TabsHeader,
	TabHeaderItem,
	TabsBody,
	TabBodyItem
} from "$components/tabs.component";
import { Tooltip } from "$components/tooltip.component";
import { getComponentDependencies } from "$registry/components";
import { ImportantNote } from "$views/important-note.view";
import { capitalCase, kebabCase } from "change-case";
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
		"[&_em]:bg-accent-foreground [&_em]:px-2 [&_em]:py-1 [&_em]:rounded [&_em]:text-background";
	const h2Class =
		"[&_h2]:font-medium";
	return (
		<div
			class={clsx(
				"relative leading-loose flex flex-col gap-y-6 w-full py-4 [content-visibility:auto]",
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
					class={"link link-secondary dark:text-white"}
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
export function ComponentSection({
	heading,
	examples,
	children,
	...restProps
}) {
	const id = kebabCase(heading);
	return (
		<section id={id} class={clsx("[content-visibility:auto]")}>
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
			<TabsBody>
				<TabBodyItem class="component-preview">
					<Component {...restProps} />
				</TabBodyItem>
				<TabBodyItem class="max-h-[40rem] rounded overflow-y-auto">
					<ComponentCodeToCopy text={text} lang="javascript" />
				</TabBodyItem>
			</TabsBody>
		</Tabs>
	);
}

/**
 * @param {Object} props
 * @param {import("$registry/components").ComponentRegistry["name"]} props.name - The name of the component
 */
export async function ComponentInstallation({ name }) {
	const { components } = await import("$registry/components");
	const component = components.find((component) => component.name === name);

	if (!component) {
		return "Component not found";
	}

	let codeText = "";

	const componentDependencies = getComponentDependencies(name);

	if (componentDependencies.length) {
		const registryDependenciesTexts = await Promise.all([
			...componentDependencies.map(async (dependency) =>
				Bun.file(`src/components/${dependency}.component.jsx`).text()
			)
		]);

		codeText += `
	--------------------     Components Dependencies   -------------------------

		${registryDependenciesTexts.join("\n\n")}

	`;
	}

	const componentText = await Bun.file(
		`src/components/${name}.component.jsx`
	).text();

	codeText += `
	--------------------     ${capitalCase(
		name
	)} Component   -------------------------

		${componentText}
	
	`;

	if (component.alpineDependencies.length) {
		const alpineDependenciesText = await Promise.all([
			...component.alpineDependencies.map(async (dependency) =>
				Bun.file(`src/scripts/alpine/data/${dependency}.data.js`).text()
			)
		]);

		codeText += `
	--------------------     Alpine Dependencies   -------------------------

		${alpineDependenciesText.join("\n")}

	`;
	}

	return (
		<div class={"space-y-4"}>
			<ImportantNote>
				<div class={"space-y-4"}>
					<p>
						To use this component, you need to initialize your project first. If
						not done yet, run one of the following command:
					</p>
					<p>
						<em>npx jsxpine init</em> or <em>yarn jsxpine init</em> or{" "}
						<em>pnpm jsxpine init</em> or <em>bunx jsxpine init</em>.
					</p>
					<p>
						Go to the{" "}
						<a href="/installation-and-usage" class="link link-primary">
							installation and usage
						</a>{" "}
						page to learn more.
					</p>
				</div>
			</ImportantNote>
			<Tabs>
				<TabsHeader>
					<TabHeaderItem title="CLI" />
					<TabHeaderItem title="Manual" />
				</TabsHeader>
				<TabsBody>
					<TabBodyItem class={"flex items-center justify-center px-2 py-4"}>
						<CodeToCopy lang="bash">jsxpine add {name}</CodeToCopy>
					</TabBodyItem>
					<TabBodyItem class="max-h-[40rem] overflow-y-auto">
						<ComponentCodeToCopy text={codeText} lang="javascript" />
					</TabBodyItem>
				</TabsBody>
			</Tabs>
		</div>
	);
}

/**
 * A component that displays a code block with a copy button.
 *
 * @param {Object} props
 * @param {string} props.text The code to display
 * @param {import("$components/code-viewer.component").CodeLanguage} props.lang The language of the code
 */
export function ComponentCodeToCopy({ text, lang }) {
	return (
		<>
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
			<CodeViewer text={text} lang={lang} />
		</>
	);
}