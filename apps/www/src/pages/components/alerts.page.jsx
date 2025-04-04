import { capitalCase } from "change-case";
import {
	ComponentInstallation,
	ComponentPresentation,
	ComponentSection
} from "$views/components.view";
import { MainLayout } from "$views/layouts.view";

/**
 * Alerts page props
 * @type {import("$common/props").JSXComponent<import("$components/page.component").PageContext<{}>>}
 */
export async function AlertsPage(props) {
	return (
		<MainLayout {...props}>
			<ComponentPresentation name="Alerts" source="alert">
				<ComponentSection heading="Installation">
					<ComponentInstallation name="alert" />
				</ComponentSection>

				{[
					"default",
					"primary",
					"secondary",
					"success",
					"danger",
					"info",
					"warning"
				].map((type) => {
					return (
						<ComponentSection
							heading={`${capitalCase(type)} Alert`}
							examples={[`alerts/${type}`]}
						/>
					);
				})}
			</ComponentPresentation>
		</MainLayout>
	);
}
