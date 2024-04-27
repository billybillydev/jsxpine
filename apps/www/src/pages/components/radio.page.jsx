import { MainLayout } from "$views/layouts.view";
import { ComponentPresentation } from "$views/component-presentation.view";
import { ComponentPreview } from "$views/component-preview.view";

/**
 * Radio page props
 * @type {import("$common/props").JSXComponent<import("$components/page.component").PageContext<{}>>}
 */
export function RadioPage({ ...restProps }) {
    return (
			<MainLayout {...restProps}>
				<ComponentPresentation>
					<section class="text-center">
						<h1>Radio</h1>
					</section>

					<section id="overview">
						<h2>Overview</h2>
						<p>
							Radio is only a wrapper component which contains an hidden radio
							input.
						</p>
						<p>
							It gives you benefit of checked props from a radio input and let
							you customize your component style based on this checked props.
						</p>
						<div class="flex flex-col gap-y-8">
                            <ComponentPreview filename="radio/default" />
                            <ComponentPreview filename="radio/another" />
                        </div>
					</section>
				</ComponentPresentation>
			</MainLayout>
		);
}