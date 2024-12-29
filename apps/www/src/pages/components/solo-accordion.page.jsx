
import { ComponentPresentation, ComponentSection } from "$views/components.view";
import { MainLayout } from "$views/layouts.view";

/**
 * Accordions page props
 * @param {import("$components/page.component").PageContext<{ description: string }>} props
 */
export function SoloAccordionPage({ seo, isHTMX, description, ...restProps }) {
	return (
		<MainLayout seo={seo} isHTMX={isHTMX} {...restProps}>
			<ComponentPresentation name="Solo Accordion" source="solo-accordion">
				<ComponentSection
					heading="Overview"
					examples={["solo-accordion/default"]}
				>
					<p>{description}</p>
				</ComponentSection>
			</ComponentPresentation>
		</MainLayout>
	);
}
