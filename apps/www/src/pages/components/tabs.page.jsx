import { ComponentPresentation, ComponentSection } from "$views/components.view";
import { MainLayout } from "$views/layouts.view";

/**
 * Tabs page props
 * @type {import("$common/props").JSXComponent<import("$components/page.component").PageContext<{}>>}
 */
export function TabsPage({ ...restProps }) {
	return (
		<MainLayout {...restProps}>
			<ComponentPresentation name="Tabs">
				<ComponentSection heading="Overview">
					<p>
						Tabs enable you to display contents in same place but with different
						way to show it.
					</p>
					<p>
						Usually, clickable element are shown above (the tabs), and each one
						switch to some content related to it. Tabs can be display vertically
						by default or horizontally. See examples below.
					</p>
				</ComponentSection>

				<ComponentSection heading="Default Tabs" examples={["tabs/default"]} />

				<ComponentSection
					heading="Horizontal Tabs"
					examples={["tabs/horizontal"]}
				/>
			</ComponentPresentation>
		</MainLayout>
	);
}
