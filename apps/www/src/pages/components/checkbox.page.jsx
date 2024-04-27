import { MainLayout } from "$views/layouts.view";
import { ComponentPresentation } from "$views/component-presentation.view";
import { ComponentPreview } from "$views/component-preview.view";

/**
 * Checkbox page props
 * @type {import("$common/props").JSXComponent<import("$components/page.component").PageContext<{}>>}
 */
export function CheckboxPage({ ...restProps }) {
	return (
		<MainLayout {...restProps}>
			<ComponentPresentation>
				<section class="text-center">
					<h1>Checkbox</h1>
				</section>

				<section id="overview">
					<h2>Overview</h2>
					<p>
						Checkbox is only a wrapper component which contains an hidden
						checkbox input.
					</p>
					<p>
						It gives you benefit of checked props from a checkbox input and let
						you customize your component style based on this checked props.
					</p>
					<ComponentPreview filename="checkbox/default" />
				</section>
			</ComponentPresentation>
		</MainLayout>
	);
}
