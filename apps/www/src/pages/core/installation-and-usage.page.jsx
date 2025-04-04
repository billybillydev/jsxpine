import { CodeToCopy } from "$components/code-to-copy.component";
import { CodeViewer } from "$components/code-viewer.component";
import { CorePresentation, CoreSection } from "$views/core.view";
import { ImportantNote } from "$views/important-note.view";
import { MainLayout } from "$views/layouts.view";
import { ListWithDecimal, ListWithDot } from "$views/lists.view";
import {
	rightSidebarId,
	previousNextNavigationId
} from "$views/navigations.view";

/**
 * Core Installation And Usage page props
 * @param {import("$components/page.component").PageContext<{ heading: string, description: string }>} props
 */
export function CoreInstallationAndUsagePage({
	description,
	heading,
	...restProps
}) {
	return (
		<MainLayout {...restProps}>
			<CorePresentation heading={heading} description={description}>
				<ManualInstallationSection />

				<ConfigurationSection />

				<DependenciesSection />

				<CLISection />

				<InitCommandSection />

				<AddCommandSection />

				<WhereToUseItSection />
			</CorePresentation>
		</MainLayout>
	);
}

function ManualInstallationSection() {
	return (
		<CoreSection heading="Manual Installation">
			<p hx-boost="true">
				JSXPine is not a UI library. As mentionned in{" "}
				<a
					href="/core/introduction"
					hx-target="main"
					hx-swap="innerHTML scroll:top"
					hx-select-oob={`#${rightSidebarId},#${previousNextNavigationId}`}
					class={"link link-primary italic"}
				>
					introduction
				</a>
				, we provide a set of JSX components boosted with Alpine.js.
			</p>
			<p>
				Those components can be copied simply by following these steps below:
				<ListWithDecimal>
					<li>Going to the corresponding page you want ; </li>
					<li>
						In installation part, click on <strong>Manual</strong> in the tab
						view, the source code will be showed ;
					</li>
					<li>
						Click on <strong>Copy</strong> button et voilà !
					</li>
				</ListWithDecimal>
			</p>
			<ImportantNote>
				<p>
					Doing this way, you have to know that some components depend on other
					components, and/or some alpinejs functionalities.
				</p>
				<p>Check in the component's page and follow instructions.</p>
			</ImportantNote>
		</CoreSection>
	);
}

function ConfigurationSection() {
	const grayColors = ["slate", "gray", "zinc", "neutral", "stone"];
	const listFormatter = new Intl.ListFormat("en-GB", {
		style: "long",
		type: "conjunction"
	});
	
	return (
		<CoreSection heading="Configuration">
			<p>You have to know what JSXPine is composed.</p>
			<p>
				Like <strong>Shadcn</strong>, the main entry point with your application
				is a file named: <em>component.json</em>.
			</p>
			<p>
				This file contains information about propreties which define how
				components from JSXPine will be connected to your project.
			</p>
			<p>These propreties are: </p>
			<ListWithDecimal>
				<li>
					<p>
						<em>$schema</em>: It's an url of the schema propreties of your
						component.json.
					</p>
				</li>
				<li>
					<p>
						<em>tailwind</em>: Because JSXPine uses tailwind for the css part,
						this proprety handles two subpropreties.
					</p>
					<ListWithDot>
						<li>
							<p>
								<span class={"font-medium"}>config.js</span>: This one is about
								your tailwind config file, ie where it's located.
							</p>
						</li>
						<li>
							<p>
								<span class={"font-medium"}>css</span>: This proprety's value is
								your global css file's path. It will applied everything set in
								this file to your components' style.
							</p>
						</li>
						<li>
							<p>
								<span class={"font-medium"}>baseColor</span>: This one define
								the base gray color from tailwindcss you want to use. With this,
								every shade of gray fit your design system. According to
								tailwindcss, the values are: {listFormatter.format(grayColors)}.
							</p>
						</li>
					</ListWithDot>
				</li>
				<li>
					<p>
						<em>aliases</em>: This proprety handles 3 crucial subpropreties,
						which are highly coupled between them:
					</p>
					<ListWithDot>
						<li>
							<p>
								<span class="font-medium">common</span>: This one is the path of
								all common type definitions.
							</p>
						</li>
						<li>
							<p>
								<span class={"font-medium"}>components</span>: This is the path
								of the folder where all components will be moved when added via
								cli{" "}
								<a href="#add-command" class={"link link-primary"}>
									(see here for more details)
								</a>
								. This value is also to be set in your tsconfig's path array.
							</p>
						</li>
						<li>
							<p>
								<span class={"font-medium"}>scripts</span>: Since JSXPine tries
								to use javascript in a better way, it suggests a folder called
								scripts when you can put all your logic, utilities or whatever
								you want as js code for your project. By default, it contains a
								subfolder named <span class={"italic"}>alpine</span>. Therefore,
								this key is the path to this folder.
							</p>
						</li>
						<li>
							<p>
								<span class={"font-medium"}>alpine</span>: It's the path of the
								folder where everything related to alpinejs will be put. JSXPine
								uses advanced features of alpinejs, so this folder is intended
								to work with three of them.
							</p>
							<ul>
								<li class="flex gap-x-2">
									<span>-</span>
									<p>
										Data: A folder containing every functions register as data
										in alpinejs.{" "}
										<a
											href="https://alpinejs.dev/globals/alpine-data"
											target="_blank"
											class={"link link-secondary dark:link-warning"}
										>
											See this link to learn more
										</a>
										.
									</p>
								</li>
								<li class="flex gap-x-2">
									<span>-</span>
									<p>
										Directive: Will contain custom directives in alpinejs.{" "}
										<a
											href="https://alpinejs.dev/advanced/extending#custom-directives"
											target="_blank"
											class={"link link-secondary dark:link-warning"}
										>
											Check this link about directives
										</a>
										.
									</p>
								</li>
								<li class="flex gap-x-2">
									<span>-</span>
									<p>
										Magic: Will contain custom magic functions.{" "}
										<a
											href="https://alpinejs.dev/advanced/extending#custom-magics"
											target="_blank"
											class={"link link-secondary dark:link-warning"}
										>
											Check this link about magic
										</a>
										.
									</p>
								</li>
							</ul>
						</li>
					</ListWithDot>
				</li>
				<li>
					<p>
						<em>tsConfigAliases</em>: This property holds either a property
						named "global" which is the alias in tsconfig of the directory
						containing common, components and scripts or three properties:
						common, components and scripts. Each key is an alias for the
						corresponding directory.
					</p>
				</li>
			</ListWithDecimal>
		</CoreSection>
	);
}

function DependenciesSection() {
	return (
		<CoreSection heading="Dependencies">
			<p>
				Some dependencies has been picked to best suit with JSXPine and its
				concept.
			</p>
			<p>
				This section's goal is to make you understand why these ones have been
				selected.
			</p>
			<ListWithDot>
				<li>
					<p>
						<span class="font-medium">@kitajs/html</span>: This{" "}
						<a
							href="https://www.npmjs.com/package/@kitajs/html"
							target="_blank"
							class={"link link-primary"}
						>
							package
						</a>{" "}
						allows you tu write JSX in your application. Once installed, any
						Node/Deno/Bun can interpret your function component as html
						template. It provides a scan feature that tells you if your template
						is safe from XSS attacks.
					</p>
				</li>
				<li>
					<p>
						<span>tailwindcss</span>: Because JSXPine is based on tailwindcss
						classes, this one has to be part of your project.
					</p>
				</li>
				<li>
					<p>
						<span class={"font-medium"}>alpine.js</span>: As same as
						tailwindcss, this one has to be part of your project in order to use
						all alpinejs features.
					</p>
				</li>
			</ListWithDot>
		</CoreSection>
	);
}

function CLISection() {
	return (
		<CoreSection heading="CLI">
			<p>
				Like Shadcn, JSXPine has a CLI which will help you installing required
				modules and adding component(s).
			</p>
			<p>With your chosen npm package manager, do:</p>
			<div class="grid grid-cols-1 md:grid-cols-2 items-center justify-items-center gap-4">
				<CodeToCopy lang="bash">npm install jsxpine</CodeToCopy>
				<CodeToCopy lang="bash">yarn add jsxpine</CodeToCopy>
				<CodeToCopy lang="bash">pnpm add jsxpine</CodeToCopy>
				<CodeToCopy lang="bash">bun add jsxpine</CodeToCopy>
			</div>
			<p class="mt-6">In case you don't want to install it locally, you can do:</p>
			<div class="flex flex-col md:flex-row items-center justify-evenly">
				<CodeToCopy lang="bash">npx jsxpine init</CodeToCopy>
				<p>or</p>
				<CodeToCopy lang="bash">bunx jsxpine init</CodeToCopy>
			</div>
			<ImportantNote class={"mt-4"}>
				<p>
					With these two commands above, you directly initiate jsxpine usage in
					your project.
				</p>
				<p>
					JSXPine provides two commands that we'll elaborate in the next
					section: <strong>init</strong> and <strong>add</strong>.
				</p>
			</ImportantNote>
		</CoreSection>
	);
}

function InitCommandSection() {
	return (
		<CoreSection heading="Init Command">
			<p>
				The <em>init</em> command aims to prepare all required modules (mostly
				files) for you to use jsxpine components.
			</p>
			<p>There are three optional arguments you can pass to this command:</p>
			<ListWithDot>
				<li>
					<p>
						<strong>-c</strong> or <strong>--cwd &lt; cwd &gt;</strong>: This
						argument is the project's <strong>absolute</strong> path where
						everything will be installed. When empty, the current directory
						where the command is running is considered ;
					</p>
				</li>
				<li>
					<p>
						<strong>-y</strong> or <strong>--yes</strong>: Will skip
						confirmation prompt ;
					</p>
				</li>
				<li>
					<p>
						<strong>-h</strong> or <strong>--help</strong>: This command will
						print you in your terminal all commands.
					</p>
				</li>
			</ListWithDot>
			<p>
				When running this command (without --yes argument), several steps will
				be prompt to you:
			</p>
			<ListWithDecimal class={"flex flex-col gap-y-3"}>
				<li>
					<p>
						<strong>Global CSS file</strong>: It's basically the main css file
						where all tailwind main function and also your global classes are
						defined.{" "}
						<span class="italic">
							Please note that it will replace everything in this file by the
							boilerplate coming from jsxpine
						</span>
						.
					</p>
				</li>
				<li>
					<p>
						<strong>Tailwind config file</strong>: The init command will look up
						to the tailwind config file. If this file is not found, it exits
						from the the initialization process. Otherwise, it overwrites
						everything contain in this file.
					</p>
				</li>
				<li>
					<p>
						<strong>Common' path</strong>: Everything like type definitions
						shared accross your components and js scripts are gathered in the
						common directory. Notes that to properly work, it has to be in the
						same directory than components and scripts.
					</p>
				</li>
				<li>
					<p>
						<strong>Components' path</strong>: Because JSXPine is about
						"components", you'll have to define where to store them. This step
						lets you write the relative path of the directory which will contain
						all components added.
					</p>
				</li>
				<li>
					<p>
						<strong>Scripts' path</strong>: As said before, JSXPine uses
						alpinejs. A scripts directory is created to hold all alpinejs
						features, but also everything related to js/ts which can be used by
						either your alpinejs functions, either by your jsx components.
					</p>
					<p>
						By doing this, the goal is to have a single file app.js/ts which
						will be used as source for your script tag.
					</p>
					<p>
						JSXPine promote the old web way,{" "}
						<span class="italic">
							We hope you understand what we mean by that ;)
						</span>
					</p>
				</li>
				<li>
					<p>
						<strong>Set path alias in tsconfig.json</strong>: In this step,
						jsxpine first asks you if you want to automatically set some alias
						in your tsconfig.json. If you accept, it will then prompted to set a
						global alias or different alias name for common, components and
						scripts.
					</p>
					<p>
						If you choose a global alias, it will be something like $ui/common,
						$ui/components and $ui/scripts ($ui being the name chosen).
					</p>
					<p>
						In the case you choose individual name, you'll have $common,
						$components and $scripts (these values being what you typed in the
						prompt).
					</p>
				</li>
				<li>
					<p>
						After installing dependencies, some properties related to{" "}
						<em>@kitajs/html</em> are added to your tsconfig.json (check this
						file and notice what has been added).
					</p>
					<p>
						Two more files are added: global.d.ts and alpine.d.ts. Each file
						corresponding to global type related to interface Window and
						alpinejs types.
					</p>
				</li>
			</ListWithDecimal>
			<ImportantNote>
				When your project is successfully initialized, this will what you get:
				<ListWithDot class={"space-y-4"}>
					<li>
						<p>
							The <em>component.json</em> file: As mentioned in the{" "}
							<a href="#configuration" class={"link link-primary"}>
								configuration section
							</a>
							, this file is the root of jsxpine ;
						</p>
					</li>
					<li>
						<p>
							The global css file and tailwind config file updated. In fact,
							these two files should be overwritten by jsxpine boilerplate. Feel
							free to customise it at your needs ;
						</p>
					</li>
					<li>
						<p>
							The directory for components. A new directory created at the{" "}
							<span class={"italic font-bold"}>Component's path</span> with 3
							subdirectories:
						</p>
						<ListWithDot class={"space-y-2"}>
							<li>
								<p>
									The <em>common</em> directory: This one contains :
								</p>
								<ListWithDecimal class={"space-y-2"}>
									<li>
										<p>
											<span class={"underline underline-offset-2"}>
												classes.js
											</span>
											: A set of differents tailwind classes most often bound to
											a key.
										</p>
									</li>
									<li>
										<p>
											<span class={"underline underline-offset-2"}>
												props.js
											</span>
											: Very important file containing all common props as jsdoc
											type definitions used by components and alpinejs.
										</p>
									</li>
									<li>
										<p>
											<span class={"underline underline-offset-2"}>
												tailwind-config.js
											</span>
											: This one just exports the theme from your tailwind
											config.
										</p>
									</li>
									<li>
										<p>
											<span class={"underline underline-offset-2"}>
												types.js
											</span>
											: This file includes type literal as jsdoc type
											definitions.
										</p>
									</li>
								</ListWithDecimal>
							</li>
							<li>
								<p>
									The <em>components</em> directory: All components are saved
									here (when using the <strong>add</strong> command).
								</p>
							</li>
							<li>
								<p>
									The <em>scripts</em> directory: Here lies an alpinejs
									directory which contains 3 subdirectories related to 3 usual
									alpinejs's concepts : <span class="italic">data</span>,{" "}
									<span class="italic">directives</span> and{" "}
									<span class="italic">magic</span>. Data functions are closely
									related to components. With init command, this directory is
									empty and will be filled when components will be added. For
									directives and magic, it generally common functions.
								</p>
							</li>
							<li>
								At the end, a message invites you to set your path variables in
								tsconfig file according to directory containing these 3 three
								directories.
							</li>
						</ListWithDot>
					</li>
				</ListWithDot>
			</ImportantNote>
		</CoreSection>
	);
}

function AddCommandSection() {
	return (
		<CoreSection heading="Add Command">
			<p>
				JSXPine provides a command called <em>add</em> that allows you to add a
				component to your project.
			</p>
			<p>
				Here is how to use it: <em>jsxpine add component-name</em>.
			</p>
			<p>
				The argument <span class={"italic"}>component-name</span> is optional.
				By doing this, you have to choose your component(s) among the chekbox
				list displaying in the terminal.
			</p>
			<p hx-boost="true">
				When <span class={"italic"}>component-name</span> is passed, it must
				match with the existing component name provide by JSXPine. Check the{" "}
				<a
					href="/components"
					hx-target="main"
					hx-swap="innerHTML scroll:top"
					hx-select-oob={`#${rightSidebarId},#${previousNextNavigationId}`}
					class="link link-primary"
				>
					components' page
				</a>{" "}
				or run <em>jsxpine add</em> to see the exhaustive list.
			</p>
			<ImportantNote>
				<p>
					Some components required its alpine dependency. Don't worry,
					everything will be done automatically when adding one of these
					components.
				</p>
				<p>
					This why{" "}
					<strong class={"italic"}>
						we recommend to add components with the{" "}
						<a href="#cli" class={"link link-primary"}>
							cli
						</a>
					</strong>
					.
				</p>
				<p>
					Finally, some components require other components. This is also
					automatically handled when adding one of these components !
				</p>
			</ImportantNote>
		</CoreSection>
	);
}

function WhereToUseItSection() {
	const exampleOfUsage = `
const ExampleView = () => {
	return (
		<div>
			<h1>Example</h1>
			<p>This is an example</p>
		</div>
	)
}

const router = new Hono().get("/example", (ctx) => {
	// This will render the ExampleView component when accessing "/example" endpoint
	return ctx.html(<ExampleView />);
})
`;
	return (
		<CoreSection heading="Where to Use It ?">
			<p>
				JSXPine can be used in any js project that requires a UI library. This
				includes Node.js, Deno and Bun.
			</p>
			<p>
				Because it's a reusable components library, it can be used in any
				framework that supports JSX. We will not too much detail things here,
				but these are some of them:
			</p>
			<ListWithDot>
				<li>
					<p>
						<strong>Hono</strong>
					</p>
				</li>
				<li>
					<p>
						<strong>Elysia</strong>
					</p>
				</li>
				<li>
					<p>
						<strong>Express</strong>
					</p>
				</li>
				<li>
					<p>
						<strong>Fastify</strong>
					</p>
				</li>
				<li>
					<p>
						<strong>Nest</strong>
					</p>
				</li>
			</ListWithDot>
			<p>
				Actually, none of these is required to use JSXPine. You simply need{" "}
				<em>@kitajs/html</em> and a function that renders html.
			</p>
			<p>
				For instance, in Hono, you can use <em>ctx.html()</em> function like
				this:
			</p>
			<CodeViewer lang="javascript" text={exampleOfUsage.trim()} />
		</CoreSection>
	);
}
