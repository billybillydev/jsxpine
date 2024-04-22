import { MainLayout } from "$layouts/main.layout";
import { ComponentPresentation } from "$views/component-presentation";
import { ComponentPreview } from "$views/component-preview.view";
import { GroupAccordionExample } from "$views/examples/accordions/group.example";
import { SoloAccordionExample } from "$views/examples/accordions/solo.example";

/**
 * Accordions page props
 * @type {import("$common/props").JSXComponent<import("$components/page.component").PageContext<{}>>}
 */
export function AccordionsPage(props) {
	return (
		<MainLayout {...props}>
			<ComponentPresentation>
				<section class="text-center">
					<h1>Accordions</h1>
				</section>
				<section>
					<h2 id="overview">Overview</h2>
					<p>
						Accordions are great way to compact content blocs and display
						required ones by clicking on it.
					</p>
				</section>

				<section>
					<h2 id="solo-accordion">Solo Accordion</h2>
					<p>Enables accordion feature individually</p>
					<ComponentPreview filename="accordions/solo">
						<SoloAccordionExample />
					</ComponentPreview>
				</section>

				<section>
					<h2 id="group-accordion">Group Accordion</h2>
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
