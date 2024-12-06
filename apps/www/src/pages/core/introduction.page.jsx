import { Alert } from "$components/alert.component";
import { CodeViewer } from "$components/code-viewer.component";
import { CorePresentation, CoreSection } from "$views/core.view";
import { MainLayout } from "$views/layouts.view";

/**
 * Core Introduction page props
 * @param {import("$components/page.component").PageContext<{ heading: string, description: string }>} props
 */
export function CoreIntroductionPage({ description, heading, ...restProps }) {
	return (
		<MainLayout {...restProps}>
			<CorePresentation name={heading} description={description}>
				<p>Let take some times to explain what drive us to develop JSXPine.</p>

				<JSXSection />

				<AlpineJsSection />

				<HTMXSection />

				<PinesUISection />

				<ShadcnUISection />

				<TailwindSection />
			</CorePresentation>
		</MainLayout>
	);
}

function JSXSection() {
	const jsxCodeExample = `
    // Declaration
    function MyComponent() {
        return <div>This is my component</div>
    }

    // Can also do this
    const MyComponent = <div>This is my component</div>

    // Usage
    <MyComponent />
    `;

	return (
		<CoreSection heading="JSX" class={"flex flex-col gap-y-3"}>
			<p>
				To summarize <strong>JSX</strong> (JavaScript XML), it's a syntax
				extension for JavaScript that allows you to write HTML-like code
				directly within JavaScript.
			</p>
			<p>
				It’s primarily used in React to define the structure of the user
				interface but currently has been adopted by other libraries and
				frameworks (SolidJS, Qwik or Astro).
			</p>
			<p>
				JSX combines the power of JavaScript with the readability of HTML,
				making it easier to describe the structure of components in a
				declarative way.
			</p>
			<p>
				You can learn more about JSX in{" "}
				<a
					class={"link link-primary"}
					href="https://react.dev/learn/writing-markup-with-jsx"
				>
					the official React website
				</a>
				.
			</p>
			<CodeViewer text={jsxCodeExample} />
		</CoreSection>
	);
}

function AlpineJsSection() {
	const alpineJsCodeExample = `
    <div x-data="{ tasks: [], newTask: '' }">
        <input x-model="newTask" placeholder="Add a task" />
        <button x-on:click="tasks.push(newTask); newTask = ''">Add</button>

        <ul>
            <li x-for="task in tasks" x-text="task"></li>
        </ul>
    </div>
    `;

	return (
		<CoreSection heading="Alpine JS">
			<p>
				<strong>Alpine.js</strong> is a lightweight, minimalistic JavaScript
				framework designed to add interactivity and reactivity to your HTML
				without the complexity of a full framework like React or Vue. It’s ideal
				for developers who prefer simple, declarative JavaScript that enhances
				static HTML without requiring a build step or complex setup.
			</p>
			<KeyFeatures list="decimal">
				<li>
					<p>
						<span class={"font-medium"}>Lightweight</span>: Tiny (about 10kB
						gzipped), making it perfect for adding small interactions to
						otherwise static pages.
					</p>
				</li>
				<li>
					<p>
						<span class={"font-medium"}>Declarative Syntax</span>: Use HTML
						attributes (like x-data, x-bind, and x-on) to control behavior
						directly in your templates.
					</p>
				</li>
				<li>
					<p>
						<span class={"font-medium"}>Reactivity</span>: Automatically updates
						the DOM when data changes.
					</p>
				</li>
				<li>
					<p>
						<span class={"font-medium"}>No Build Tools Required (almost)</span>:
						Add Alpine.js to your project with a script tag, and you're ready to
						go.
					</p>
				</li>
				<li>
					<p>
						<span class={"font-medium"}>Inspired by Vue.js</span>: Shares some
						syntax and concepts with Vue, making it easy to learn for those
						familiar with Vue.
					</p>
				</li>
				<li>
					<p>
						<span class={"font-medium"}>Extensible</span>: Use plugins for
						additional functionality, such as transitions, persistence, or
						managing global state.
					</p>
				</li>
			</KeyFeatures>
			<CodeViewer text={alpineJsCodeExample} />
			<p class={"py-2"}>
				Learn more in the{" "}
				<a href="https://alpinejs.dev/start-here" class="link link-primary">
					official website
				</a>
				.
			</p>
			<ImportantNote>
				<p>
					JSXPine uses advanced alpinejs concepts such as extension with data,
					directive and magic functions and brings a better developer
					experience.
				</p>
			</ImportantNote>
		</CoreSection>
	);
}

function HTMXSection() {
	const htmxCodeExample = `
    // Form submission use case

    <form hx-post="/submit"
        hx-target="#response"
        hx-trigger="submit"
        hx-swap="innerHTML"
    >
        <input type="text" name="username" placeholder="Enter your username" />
        <button type="submit">Submit</button>
    </form>

    <div id="response"></div>
    `;

	return (
		<CoreSection heading="HTMX">
			<p>
				<strong>HTMX</strong> is a lightweight JavaScript library that allows
				you to build modern, interactive web applications without needing a
				heavy front-end framework like React, Vue, or Angular. It enables you to
				extend HTML with attributes to make server interactions declarative,
				allowing you to send HTTP requests directly from HTML elements and
				update parts of the page without a full reload.
			</p>
			<p>
				The goal of htmx is to bring the Hypertext back into hypermedia,
				emphasizing simplicity and leveraging the server as the primary source
				of logic and state.
			</p>
			<h3>How it works ?</h3>
			<p>
				HTMX enhances your HTML by introducing new attributes. These attributes
				allow you to specify:
			</p>
			<ListWithDot>
				<li>
					<p>
						<span class={"font-medium"}>HTTP methods</span>: How to send data to
						the server (<em>hx-get</em>, <em>hx-post</em>).
					</p>
				</li>
				<li>
					<p>
						<span class={"font-medium"}>Trigger events</span>: When to send a
						request (<em>hx-trigger</em>).
					</p>
				</li>
				<li>
					<p>
						<span class={"font-medium"}>Targets</span>: Where to update the DOM
						with the response (<em>hx-target</em>).
					</p>
				</li>
				<li>
					<p>
						<span class={"font-medium"}>Request headers and attributes</span>:
						Custom data sent with requests (<em>hx-headers</em>,{" "}
						<em>hx-vals</em>).
					</p>
				</li>
				<CodeViewer text={htmxCodeExample} />
			</ListWithDot>
		</CoreSection>
	);
}

function PinesUISection() {
	return (
		<CoreSection heading="Pines UI">
			<p>
				<strong>Pines</strong> is an open-source UI library from DevDojo that
				combines Alpine.js and Tailwind CSS to provide a collection of
				interactive and responsive components.
			</p>
			<p>
				Designed for simplicity and ease of integration, Pines allows developers
				to enhance their web projects by copying and pasting pre-built elements
			</p>
			<KeyFeatures>
				<li>
					<p>
						<span class={"font-medium"}>Diverse Components</span>: Pines offers
						a variety of UI elements, including animations, sliders, tooltips,
						accordions, modals, and more, enabling developers to build
						feature-rich interfaces.
					</p>
				</li>
				<li>
					<p>
						<span class={"font-medium"}>Seamless Integration</span>: By
						leveraging Alpine.js for functionality and Tailwind CSS for styling,
						Pines components can be easily integrated into projects that already
						use these technologies.
					</p>
				</li>
				<li>
					<p>
						<span class={"font-medium"}>Ease of Use</span>: Developers can
						quickly add components by copying the desired element's code into
						their project, streamlining the development process.
					</p>
				</li>
			</KeyFeatures>
			<p>
				You can learn more about Pines UI{" "}
				<a
					href="https://devdojo.com/pines/docs/introduction"
					class={"link link-primary"}
				>
					here
				</a>
				.
			</p>
			<ImportantNote>
				<p>
					JSXPine reuses features and design from Pines UI and brings it to JSX
					world, with some additional functionalities.
				</p>
			</ImportantNote>
		</CoreSection>
	);
}

function ShadcnUISection() {
	return (
		<CoreSection heading="Shadcn UI">
			<p>
				According to their{" "}
				<a href="https://ui.shadcn.com/" class={"link link-primary"}>
					official website
				</a>
				, <strong>shadcn/ui</strong> is an open-source collection of beautifully
				designed, accessible, and customizable React components built with
				Tailwind CSS.
			</p>
			<p>
				Unlike traditional component libraries, shadcn/ui isn't distributed as
				an npm package; instead, it provides reusable components that developers
				can copy and paste directly into their projects, granting full control
				over the code and its customization.
			</p>
			<KeyFeatures>
				<li>
					<p>
						<span class={"font-medium"}>Direct Integration</span>: Developers
						can select the components they need, copy the code, and integrate it
						into their projects without adding external dependencies.
					</p>
				</li>
				<li>
					<p>
						<span class={"font-medium"}>Accessibility</span>: Components are
						designed with accessibility in mind, ensuring they are usable by a
						wide range of users.
					</p>
				</li>
				<li>
					<p>
						<span class={"font-medium"}>Customization</span>: Built with
						Tailwind CSS, the components are highly customizable, allowing
						developers to tailor them to their specific design requirements.
					</p>
				</li>
			</KeyFeatures>
			<ImportantNote>
				<p>
					JSXPine is a similar concept and is directly inspired by shadcn/ui.
				</p>
				<p>
					We provides a set of reusable components and a CLI for an easier
					usage.
				</p>
			</ImportantNote>
		</CoreSection>
	);
}

function TailwindSection() {
	return (
		<CoreSection heading="Tailwind CSS">
			<p>
				<strong>Tailwind CSS</strong> is a highly customizable, utility-first
				CSS framework that allows developers to build modern web designs
				directly in their HTML by applying utility classes.
			</p>
			<p>
				Unlike traditional CSS frameworks (e.g., Bootstrap), Tailwind doesn’t
				come with pre-built components. Instead, it provides a wide range of
				low-level utility classes that make it easy to style elements and create
				custom designs without writing CSS.
			</p>
			<KeyFeatures list="decimal">
				<li>
					<p>
						<span class={"font-medium"}>Utility-First Approach</span>: Tailwind
						uses small, reusable utility classes (e.g., <em>bg-blue-500</em>,{" "}
						<em>text-center</em>, <em>flex</em>) to style elements, letting you
						build UIs without writing custom CSS.
					</p>
				</li>
				<li>
					<p>
						<span class={"font-medium"}>Customization</span>: Tailwind is built
						with customization in mind. You can easily extend its default
						configuration to create custom colors, spacing, and more using the
						<em>tailwind.config.js</em> file.
					</p>
				</li>
				<li>
					<p>
						<span class={"font-medium"}>Responsive Design</span>: Tailwind
						provides utilities for responsive design out of the box. Use
						breakpoint prefixes like <em>sm:</em>, <em>md:</em>, <em>lg:</em> to
						apply styles for specific screen sizes.
					</p>
				</li>
				<li>
					<p>
						<span class={"font-medium"}>Consistency and Productivity</span>: By
						using utility classes, you ensure design consistency across your
						application. It speeds up development by reducing the time spent
						switching between HTML and CSS files.
					</p>
				</li>
				<li>
					<p>
						<span class={"font-medium"}>Dark Mode and Variants</span>: Built-in
						support for dark mode, hover, focus, and other variants to customize
						styles based on user interaction or preferences.
					</p>
				</li>
			</KeyFeatures>
			<p>
				Do not hesitate to check{" "}
				<a
					href="https://tailwindcss.com/docs/installation"
					class={"link link-primary"}
				>
					the official website
				</a>{" "}
				to learn more.
			</p>
		</CoreSection>
	);
}

/**
 * @param {import("@kitajs/html").PropsWithChildren<{ list?: "disc" | "decimal" }>} props
 */
function KeyFeatures({ list = "disc", children }) {
	const List = list === "decimal" ? ListWithDecimal : ListWithDot;
	return (
		<>
			<h3>Key Features:</h3>
			<List>{children}</List>
		</>
	);
}

/**
 * @param {import("@kitajs/html").PropsWithChildren} props
 */
function ListWithDot({ children }) {
	return <ul class={"list-disc ml-6"}>{children}</ul>;
}

/**
 * @param {import("@kitajs/html").PropsWithChildren} props
 */
function ListWithDecimal({ children }) {
	return <ol class={"list-decimal ml-6"}>{children}</ol>;
}

/**
 * @param {import("@kitajs/html").PropsWithChildren} props
 */
function ImportantNote({ children }) {
	return (
		<Alert title="Notes" icon="information-line">
			{children}
		</Alert>
	);
}
