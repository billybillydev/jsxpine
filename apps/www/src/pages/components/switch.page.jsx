import { MainLayout } from "$views/layouts.view";
import { ComponentPresentation } from "$views/component-presentation.view";
import { ComponentPreview } from "$views/component-preview.view";

/**
 * Switch page props
 * @type {import("$common/props").JSXComponent<import("$components/page.component").PageContext<{}>>}
 */
export function SwitchPage({ ...restProps }) {
	return (
		<MainLayout {...restProps}>
			<ComponentPresentation>
				<section class="text-center">
					<h1>Switch</h1>
				</section>

				<section id="overview">
					<h2>Overview</h2>
					<p>
						Switch component has same behaviour than checkbox. You can notice
						that the difference is only the design.
					</p>
					<p>
						The switch listener is <b><em>x-on:change</em></b>. It will give you the checked value
						and the field's name. A pretty good behaviour is the ability to update label.
					</p>
					<p>See examples below to know how to customize it.</p>

					<ComponentPreview filename="switch/default" />
				</section>
			</ComponentPresentation>
		</MainLayout>
	);
}
