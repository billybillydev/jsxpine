import {
	ComponentInstallation,
	ComponentPresentation,
	ComponentSection
} from "$views/components.view";
import { MainLayout } from "$views/layouts.view";

/**
 * Accordions page props
 * @param {import("$components/page.component").PageContext<{ description: string }>} props
 */
export function AccordionsPage({ seo, isHTMX, description, ...restProps }) {
	return (
		<MainLayout seo={seo} isHTMX={isHTMX} {...restProps}>
			<ComponentPresentation name="Accordions" source="accordion">
				<ComponentSection heading="Overview">
					<p safe>{description}</p>
				</ComponentSection>

				<ComponentSection heading="Installation">
					<ComponentInstallation name="accordion" />
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
