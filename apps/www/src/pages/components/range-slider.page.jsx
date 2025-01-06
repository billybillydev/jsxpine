import {
	ComponentInstallation,
	ComponentPresentation,
	ComponentSection
} from "$views/components.view";
import { MainLayout } from "$views/layouts.view";

/**
 * Radio page props
 * @type {import("$common/props").JSXComponent<import("$components/page.component").PageContext<{}>>}
 */
export function RangeSliderPage({ ...restProps }) {
	return (
		<MainLayout {...restProps}>
			<ComponentPresentation name="Range Slider" source="range-slider">
				<ComponentSection heading="Overview" />

				<ComponentSection heading="Installation">
					<ComponentInstallation name="range-slider" />
				</ComponentSection>

				<ComponentSection
					heading="Default Range Slider"
					examples={["range-slider/default"]}
				/>
			</ComponentPresentation>
		</MainLayout>
	);
}
