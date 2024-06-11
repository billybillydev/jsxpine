
import { ComponentPresentation, ComponentPreview, ComponentSection } from "$views/components.view";
import { MainLayout } from "$views/layouts.view";

/**
 * Accordions page props
 * @param {import("$components/page.component").PageContext<{}>} props
 */
export function AccordionsPage({ seo, isHTMX, ...restProps }) {
	return (
		<MainLayout seo={seo} isHTMX={isHTMX} {...restProps}>
			<ComponentPresentation name="Accordions" source="accordion">
				<ComponentSection heading="Overview">
					<p>
						Accordions are great way to compact content blocs and display
						required ones by clicking on it.
					</p>
				</ComponentSection>

				<ComponentSection
					heading="Solo Accordion"
					examples={["accordions/solo"]}
				>
					<p>Enables accordion feature individually</p>
				</ComponentSection>

				<ComponentSection
					heading="Group Accordion"
					examples={["accordions/group"]}
				>
					<p>
						Groups accordions and display only one (closing previous opened
						one).
					</p>
				</ComponentSection>
			</ComponentPresentation>
		</MainLayout>
	);
}
