import { ComponentPresentation } from "$views/component-presentation.view";
import { ComponentPreview } from "$views/component-preview.view";
import { MainLayout } from "$views/layouts.view";

/**
 * Accordions page props
 * @param {import("$components/page.component").PageContext<{}>} props
 */
export function AccordionsPage({ seo, isHTMX, ...restProps }) {
	return (
		<MainLayout seo={seo} isHTMX={isHTMX} {...restProps}>
			<ComponentPresentation>
				<section class="text-center">
					<h1>Accordions</h1>
				</section>
				<section id="overview">
					<h2>Overview</h2>
					<p>
						Accordions are great way to compact content blocs and display
						required ones by clicking on it.
					</p>
				</section>

				<section id="solo-accordion">
					<h2>Solo Accordion</h2>
					<p>Enables accordion feature individually</p>
					<ComponentPreview filename="accordions/solo" />
				</section>

				<section id="group-accordion">
					<h2>Group Accordion</h2>
					<p>
						Groups accordions and display only one (closing previous opened
						one).
					</p>
					<ComponentPreview filename="accordions/group" />
				</section>
			</ComponentPresentation>
		</MainLayout>
	);
}
