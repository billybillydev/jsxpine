import { MainLayout } from "$views/layouts.view";
import { ComponentPresentation } from "$views/component-presentation.view";
import { ComponentPreview } from "$views/component-preview.view";

/**
 * Buttons page props
 * @type {import("$common/props").JSXComponent<import("$components/page.component").PageContext<{}>>}
 */
export function ButtonsPage(props) {
	return (
		<MainLayout {...props}>
			<ComponentPresentation>
				<section class="text-center">
					<h1>Buttons</h1>
				</section>

				<section id="overview">
					<h2>Overview</h2>
					<p>
						This page is an example on how to document your button components.
					</p>
					<p>
						Find the code for this page in the <em>src/pages/components/buttons/index.astro</em> file.
					</p>
					<ComponentPreview filename="buttons/overview" />
				</section>

				<section id="alpine-interop">
					<h2>Alpine Interop</h2>
					<p>We can use alpine properties such as <em>@click</em> or <em>x:on-click</em>.</p>
					<ComponentPreview filename="buttons/alpine-interop" />
				</section>

				<section id="primary-button">
					<h2>Primary Button</h2>
					<p>
						We use the primary button for main actions like saving a form or
						creating a new item.
					</p>
					<ComponentPreview filename="buttons/primary" />
				</section>

				<section id="secondary-button">
					<h2>Secondary Button</h2>
					<p>
						Secondary buttons accompany primary buttons to provide additional
						actions.
					</p>
					<p>
						For example, cancel buttons can be considered as secondary buttons.
					</p>
					<ComponentPreview filename="buttons/secondary" />
				</section>

				<section id="success-button">
					<h2>Success Button</h2>
					<p>Success buttons give positive attempt to actions.</p>
					<ComponentPreview filename="buttons/success" />
				</section>

				<section id="danger-button">
					<h2>Danger Button</h2>
					<p>Danger buttons are useful to prevent/cancel actions.</p>
					<ComponentPreview filename="buttons/danger" />
				</section>

				<section id="info-button">
					<h2>Info Button</h2>
					<p>Info buttons are mostly used for informative actions.</p>
					<ComponentPreview filename="buttons/info" />
				</section>

				<section id="warning-button">
					<h2>Warning Button</h2>
					<p>Warning buttons are often used for risky actions.</p>
					<ComponentPreview filename="buttons/warning" />
				</section>
			</ComponentPresentation>
		</MainLayout>
	);
}
