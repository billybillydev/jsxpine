import { MainLayout } from "$views/layouts.view";
import { ComponentPresentation } from "$views/component-presentation.view";
import { ComponentPreview } from "$views/component-preview.view";

/**
 * Tabs page props
 * @type {import("$common/props").JSXComponent<import("$components/page.component").PageContext<{}>>}
 */
export function TabsPage({ ...restProps }) {
	return (
		<MainLayout {...restProps}>
			<ComponentPresentation>
				<section class="text-center">
					<h1>Tabs</h1>
				</section>

				<section id="overview">
					<h2>Overview</h2>
					<p>
						Tabs enable you to display contents in same place but with different
						way to show it.
					</p>
					<p>
						Usually, clickable element are shown above (the tabs), and each one
						switch to some content related to it. Tabs can be display vertically
						by default or horizontally. See examples below.
					</p>
				</section>

				<section id="default-tabs">
					<h2>Default Tabs</h2>
					<ComponentPreview filename="tabs/default" />
				</section>

				<section id="horizontal-tabs">
					<h2>Horizontal Tabs</h2>
					<ComponentPreview filename="tabs/horizontal" />
				</section>
			</ComponentPresentation>
		</MainLayout>
	);
}
