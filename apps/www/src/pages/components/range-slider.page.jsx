import { MainLayout } from "$views/layouts.view";
import { ComponentPresentation } from "$views/component-presentation.view";
import { ComponentPreview } from "$views/component-preview.view";

/**
 * Radio page props
 * @type {import("$common/props").JSXComponent<import("$components/page.component").PageContext<{}>>}
 */
export function RangeSliderPage({ ...restProps }) {
	return (
		<MainLayout {...restProps}>
			<ComponentPresentation>
				<section>
					<h1>Range Slider</h1>
				</section>

                <section id="overview">
                    <h2>Overview</h2>
                    <p></p>
                </section>

                <section id="default-range-slider">
                    <h2>Default Range Slider</h2>
                    <p></p>
                    <ComponentPreview filename="range-slider/default" />
                </section>
			</ComponentPresentation>
		</MainLayout>
	);
}
