import {
	ComponentInstallation,
	ComponentPresentation,
	ComponentPreview,
	ComponentSection
} from "$views/components.view";
import { MainLayout } from "$views/layouts.view";

/**
 * Cards page props
 * @type {import("$common/props").JSXComponent<import("$components/page.component").PageContext<{}>>}
 */
export function CardPage(props) {
	return (
		<MainLayout {...props}>
			<ComponentPresentation name="Card">
				<ComponentSection heading="Overview">
					<p>
						Card is a nice way to display generic content such as summary blog
						post or e-commerce product items.
					</p>
					<p>
						Card from JSXPine provides you many features to help you customize
						it based on your needs. Check cases below and find your way.
					</p>
				</ComponentSection>

				<ComponentSection heading="Installation">
					<ComponentInstallation name="card" />
				</ComponentSection>

				<ComponentSection heading="Default Card">
					<p>
						With these props: image, title, text or texts and controls, you can
						achieve a pretty card component design.
					</p>
					<p>
						Look these three examples below and check each example code to see
						how it is done.
					</p>
					<ComponentPreview filename="card/default" />
				</ComponentSection>

				<ComponentSection heading="Horizontal Card">
					<p>
						By setting position props to "horizontal", you can display
						horizontally image and card content. No more needed.
					</p>
					<p>Check this example.</p>
					<ComponentPreview filename="card/horizontal" />
				</ComponentSection>

				<ComponentSection heading="Custom Card">
					<p>
						Do you want to use your own design ? Just ignore all props and set
						your content as slot. As simple as that.
					</p>
					<ComponentPreview filename="card/custom" />
				</ComponentSection>
			</ComponentPresentation>
		</MainLayout>
	);
}
