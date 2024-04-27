import { MainLayout } from "$views/layouts.view";
import { ComponentPresentation } from "$views/component-presentation.view";
import { ComponentPreview } from "$views/component-preview.view";

/**
 * Sidebar page props
 * @type {import("$common/props").JSXComponent<import("$components/page.component").PageContext<{}>>}
 */
export function SidebarPage({ ...restProps }) {
	return (
		<MainLayout {...restProps}>
			<ComponentPresentation>
				<section class="text-center">
					<h1>Sidebar</h1>
				</section>

				<section id="overview">
					<h2>Overview</h2>
					<p>
						Sidebar is a slide-over component which mainly has same purpose as
						modal.
					</p>
					<p>
						Very often, we display menu (common usecase for mobile web
						application) or a form without take too much places in the main
						context.
					</p>
				</section>

				<section id="default-sidebar">
					<h2>Default Sidebar</h2>
					<p>
						This example shows where to put your content when using Sidebar.
					</p>
					<ComponentPreview filename="sidebar/default" />
				</section>

				<section id="full-example">
					<h2>Full Example</h2>
					<p>
						Here an example with a pratical case, display a form in sidebar.
					</p>
					<ComponentPreview filename="sidebar/form" />
				</section>

				<section id="sidebar-inside-content">
					<h2>Sidebar Inside Content</h2>
					<p>
						So far so good with our Sidebar, you can display it in a specific
						content by passing to selector props its id.
					</p>
					<p>
						But notice that you have to somehow adjust classes to fit Sidebar in
						the concerned content. Check code from example below.
					</p>
					<ComponentPreview filename="sidebar/inside-content" />
				</section>
			</ComponentPresentation>
		</MainLayout>
	);
}
