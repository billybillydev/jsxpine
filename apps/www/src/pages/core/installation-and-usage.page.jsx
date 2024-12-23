import { CodeToCopy } from "$components/code-to-copy.component";
import { CorePresentation, CoreSection } from "$views/core.view";
import { ImportantNote } from "$views/important-note.view";
import { MainLayout } from "$views/layouts.view";
import { ListWithDecimal, ListWithDot } from "$views/lists.view";

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
			</CorePresentation>
		</MainLayout>
	);
}

function ManualInstallationSection() {
	return (
		<CoreSection heading="Manual Installation">
			<p>
				JSXPine is not a UI library. As mentionned in{" "}
				<a href="/core/introduction" class={"link link-primary italic"}>
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
											class={"link link-secondary"}
										>
											See this link to learn more
										</a>
										.
									</p>
								</li>
								<li class="flex gap-x-2">
									<span>-</span>
									<p>
										Directive: Will contain custom directives in alpinejs.
										<a
											href="https://alpinejs.dev/advanced/extending#custom-directives"
											target="_blank"
											class={"link link-secondary"}
										>
											Cgeck this link about directives
										</a>
										.
									</p>
								</li>
								<li class="flex gap-x-2">
									<span>-</span>
									<p>
										Magic: Will contain custom magic functions.
										<a
											href="https://alpinejs.dev/advanced/extending#custom-magics"
											target="_blank"
											class={"link link-secondary"}
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
						<span class="font-medium">@kitajs/jtml</span>: This{" "}
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
			<CodeToCopy>npm install jsxpine</CodeToCopy>
			<p>or</p>
			<CodeToCopy>yarn add jsxpine</CodeToCopy>
			<p>or</p>
			<CodeToCopy>pnpm add jsxpine</CodeToCopy>
			<p>or</p>
			<CodeToCopy>bun add jsxpine</CodeToCopy>
			<p>In case you don't want to install it locally, you can do:</p>
			<CodeToCopy>npx jsxpine init</CodeToCopy>
			<p>or</p>
			<CodeToCopy>bunx jsxpine init</CodeToCopy>
			<ImportantNote>
				<p>
					With these two commands above, you directly initiate jsxpine usage in
					your project.
				</p>
				<p>
					JSXPine provides two commands that we'll elaborate in the next section: <strong>init</strong> and <strong>add</strong>.
				</p>
			</ImportantNote>
		</CoreSection>
	);
}
