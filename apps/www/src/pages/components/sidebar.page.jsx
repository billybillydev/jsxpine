import { ComponentPresentation, ComponentSection } from "$views/components.view";
import { MainLayout } from "$views/layouts.view";

/**
 * Sidebar page props
 * @type {import("$common/props").JSXComponent<import("$components/page.component").PageContext<{}>>}
 */
export function SidebarPage({ ...restProps }) {
	return (
		<MainLayout {...restProps}>
			<ComponentPresentation name="Sidebar">
				<ComponentSection heading="Overview">
					<p>
						Sidebar is a slide-over component which mainly has same purpose as
						modal.
					</p>
					<p>
						Very often, we display menu (common usecase for mobile web
						application) or a form without take too much places in the main
						context.
					</p>
				</ComponentSection>

				<ComponentSection
					heading="Default Sidebar"
					examples={["sidebar/default"]}
				>
					<p>
						This example shows where to put your content when using Sidebar.
					</p>
				</ComponentSection>

				<ComponentSection heading="Full Example" examples={["sidebar/form"]}>
					<p>
						Here an example with a pratical case, display a form in sidebar.
					</p>
				</ComponentSection>

				<ComponentSection
					heading="Sidebar Inside Content"
					examples={["sidebar/inside-content"]}
				>
					<p>
						So far so good with our Sidebar, you can display it in a specific
						content by passing to selector props its id.
					</p>
					<p>
						But notice that you have to somehow adjust classes to fit Sidebar in
						the concerned content. Check code from example below.
					</p>
				</ComponentSection>
			</ComponentPresentation>
		</MainLayout>
	);
}
