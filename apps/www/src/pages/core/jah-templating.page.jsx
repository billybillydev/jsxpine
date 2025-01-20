import { CorePresentation, CoreSection } from "$views/core.view";
import { MainLayout } from "$views/layouts.view";
import { ListWithDecimal, ListWithDot } from "$views/lists.view";

/**
 * JAH Templating page props
 * @param {import("$components/page.component").PageContext<{ heading: string }>} props
 */
export function JAHTemplatingPage({ heading, seo, isHTMX, ...restProps }) {
	return (
		<MainLayout seo={seo} isHTMX={isHTMX} {...restProps}>
			<CorePresentation heading={heading}>
				<CoreSection heading="Why ?">
					<p>
						The combination of JSX, Alpine.js, and HTMX can create a powerful,
						lightweight, and flexible development stack for building highly
						interactive and performant web applications. Called JAH templating,
						here's how these 3 technologies complement each other and how tools
						like @kitajs/html will enhance the experience.
					</p>
				</CoreSection>

				<CoreSection heading="JSX">
					<h4>A Familiar Syntax for Component Rendering.</h4>
					<p>
						JSX is widely used in modern front-end frameworks like React,
						offering a declarative syntax for creating user interfaces. In this
						stack:
					</p>
					<ListWithDot>
						<li>
							<p>
								<strong>JSX's Strength</strong>: Its expressive, XML-like syntax
								allows developers to compose components with ease, improving
								readability and maintainability ;
							</p>
						</li>
						<li>
							<p>
								<strong>Lightweight Applications</strong>: Without the heavy
								runtime of React or Vue, JSX can be used to generate plain HTML
								and JavaScript, keeping the application lightweight ;
							</p>
						</li>
						<li>
							<p>
								<strong>Static or Dynamic Rendering</strong>: JSX components can
								be pre-rendered during build time for static delivery or
								dynamically injected into the DOM as needed.
							</p>
						</li>
					</ListWithDot>
				</CoreSection>

				<CoreSection heading="Alpine.js">
					<h4>Enhancing Interactivity with Minimal Overhead.</h4>
					<p>
						Alpine.js provides a simple, declarative way to add interactivity
						directly to your HTML, without requiring a full-fledged framework.
						Its role in this stack includes:
					</p>
					<ListWithDot>
						<li>
							<p>
								<strong>Inline Interaction</strong>: With Alpine.js, dynamic
								behaviors like toggling elements, managing state, and adding
								transitions can be implemented directly in your HTML using
								simple directives ;
							</p>
						</li>
						<li>
							<p>
								<strong>Powerful and Consistent</strong>: Used with the extended
								way like extended data, it provides small and powerful
								interactive behaviors minimising the boilerplate in the
								declarative ui code ;
							</p>
						</li>
						<li>
							<p>
								<strong>Lean and Performant</strong>: The small footprint of
								Alpine.js ensures your application remains fast and optimized ;
							</p>
						</li>
					</ListWithDot>
				</CoreSection>

				<CoreSection heading="HTMX">
					<h4>Enabling Hyper-Interactive Components.</h4>
					<p>
						HTMX focuses on extending the capabilities of HTML with AJAX,
						WebSockets, and server-sent events. When paired with JSX and
						Alpine.js:
					</p>
					<ListWithDot>
						<li>
							<p>
								<strong>Server-Driven UI Updates</strong>: HTMX enables you to
								update parts of your page dynamically through server responses,
								reducing the need for complex client-side logic ;
							</p>
						</li>
						<li>
							<p>
								<strong>Enhanced Declarative Syntax</strong>: HTMX attributes
								make it easy to define behaviors like lazy loading, content
								swapping, and real-time updates directly in the HTML ;
							</p>
						</li>
						<li>
							<p>
								<strong>Seamless Integration</strong>: JSX-generated HTML can
								include HTMX attributes, enabling fine-grained server
								interactions without writing JavaScript manually ;
							</p>
						</li>
					</ListWithDot>
				</CoreSection>

				<CoreSection heading="About @kitajs/html">
					<h4>A Facilitator for the Integration.</h4>
					<p>
						<em>@kitajs/html</em> enhances the synergy between JSX, Alpine.js,
						and HTMX by providing:
					</p>
					<ListWithDot>
						<li>
							<p>
								<strong>Lightweight JSX Rendering</strong>: It allows developers
								to use JSX outside of a React-like framework, directly
								generating plain HTML that integrates naturally with Alpine.js
								and HTMX.
							</p>
						</li>
						<li>
							<p>
								<strong>Type Safety and Templating</strong>: By using TypeScript
								and JSX together thanks to <em>@kitajs/ts-html-plugin</em>,{" "}
								<em>@kitajs/html</em> ensures better development workflows.
							</p>
						</li>
						<li>
							<p>
								<strong>XSS Scan</strong>: With the <strong>xss scan</strong>,{" "}
								<em>@kitajs/html</em> cares about your code and will try its
								best to track potential xss issues, reducing bugs and improving
								code maintainability.
							</p>
						</li>
					</ListWithDot>
				</CoreSection>

				<CoreSection heading="Conclusion">
					<h4>Why This Combination Works ?</h4>
					<ListWithDecimal>
						<li>
							<p>
								<strong>Decoupled Yet Cohesive</strong>: Each tool addresses a
								specific aspect of modern web development:
							</p>
							<ListWithDot>
								<li>
									<p>JSX focuses on component-based templating ;</p>
								</li>
								<li>
									<p>Alpine.js manages client-side interactivity ;</p>
								</li>
								<li>
									<p>
										HTMX bridges the gap between server and client interactions.
									</p>
								</li>
							</ListWithDot>
						</li>
						<li>
							<p>
								<strong>Improved Developer Experience</strong>: The declarative
								nature of these technologies reduces the need for boilerplate
								code, enabling faster development and clearer code ;
							</p>
						</li>
						<li>
							<p>
								<strong>Performance-Optimized</strong>: By leveraging
								lightweight libraries and server-driven updates, this stack
								minimizes the client-side JavaScript footprint while ensuring a
								highly responsive user experience.
							</p>
						</li>
					</ListWithDecimal>
					<br />
					<p>
						This combination offers a balanced, modern approach to web
						development that embraces simplicity, flexibility, and high
						performance. By leveraging @kitajs/html to facilitate JSX
						integration, you can build robust applications while avoiding the
						complexities of heavy frameworks.
					</p>
					<p>
						We can see some solid stacks with some major frameworks like{" "}
						<strong>Hono</strong> or <strong>Elysia</strong>, which work very
						when associated with <strong>Bun</strong>.
					</p>
					<p>JSXPine uses a very complex integration of these 3 technologies, specifically <em>alpinejs</em> by leverage the advanced concept of extending data.</p>
					<p>In <a href="/usecases" class={"link link-primary dark:link-warning"}>the usecases section</a>, you will see some real cases using these 3 major technologies.</p>
				</CoreSection>
			</CorePresentation>
		</MainLayout>
	);
}
