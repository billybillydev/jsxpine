import { MainLayout } from "$views/layouts.view";
import { ComponentPresentation } from "$views/component-presentation.view";
import { ComponentPreview } from "$views/component-preview.view";

/**
 * Cards page props
 * @type {import("$common/props").JSXComponent<import("$components/page.component").PageContext<{}>>}
 */
export function CardPage(props) {
	return (
		<MainLayout {...props}>
			<ComponentPresentation>
				<section class="text-center">
					<h1>Card</h1>
				</section>

				<section id="overview">
					<h2>Overview</h2>
					<p>
						Card is a nice way to display generic content such as summary blog
						post or e-commerce product items.
					</p>
					<p>
						Card from JSXPine provides you many features to help you customize
						it based on your needs. Check cases below and find your way.
					</p>
				</section>

				<section id="default-card">
					<h2>Default Card</h2>
					<p>
						With these props: image, title, text or texts and controls, you can
						achieve a pretty card component design.
					</p>
					<p>
						Look these three examples below and check each example code to see
						how it is done.
					</p>
					<ComponentPreview filename="card/default" />
				</section>

				<section id="horizontal-card">
					<h2>Horizontal Card</h2>
					<p>
						By setting position props to "horizontal", you can display
						horizontally image and card content. No more needed.
					</p>
					<p>Check this example.</p>
					<ComponentPreview filename="card/horizontal" />
				</section>

				<section id="custom-card">
					<h2>Custom Card</h2>
					<p>
						Do you want to use your own design ? Just ignore all props and set
						your content as slot. As simple as that.
					</p>
					<ComponentPreview filename="card/custom" />
				</section>
			</ComponentPresentation>
		</MainLayout>
	);
}
