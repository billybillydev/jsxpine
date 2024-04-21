import { ComponentPresentation } from "$views/component-presentation";
import { ComponentPreview } from "$views/component-preview.view";
import { GroupAccordionExample } from "$views/examples/accordions/group.example";
import { SoloAccordionExample } from "$views/examples/accordions/solo.example";
import { MainLayout } from "src/layouts/main.layout";

/**
 * Accordions page props
 * @param {import("$components/page.component").PageContext<{}>} props 
 * @returns {string}
 */
export function AccordionsPage(props) {
	return (
		<MainLayout {...props}>
			<ComponentPresentation>
				<section class="text-center">
					<h1>Accordions</h1>
				</section>
				<section>
					<h2>Overview</h2>
					<p>
						Accordions are great way to compact content blocs and display
						required ones by clicking on it.
					</p>
				</section>

				<section>
					<h2>Solo Accordion</h2>
					<p>Enables accordion feature individually</p>
					<ComponentPreview filename="accordions/solo">
						<SoloAccordionExample />
					</ComponentPreview>
				</section>

				<section>
					<h2>Group Accordion</h2>
					<p>
						Groups accordions and display only one (closing previous opened
						one).
					</p>
					<ComponentPreview filename="accordions/group">
						<GroupAccordionExample />
					</ComponentPreview>
				</section>
			</ComponentPresentation>
		</MainLayout>
	);
}
