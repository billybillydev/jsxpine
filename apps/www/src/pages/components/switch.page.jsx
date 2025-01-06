import {
	ComponentInstallation,
	ComponentPresentation,
	ComponentSection
} from "$views/components.view";
import { MainLayout } from "$views/layouts.view";

/**
 * Switch page props
 * @type {import("$common/props").JSXComponent<import("$components/page.component").PageContext<{}>>}
 */
export function SwitchPage({ ...restProps }) {
	return (
		<MainLayout {...restProps}>
			<ComponentPresentation name="Switch">
				<ComponentSection heading="Overview" examples={["switch/default"]}>
					<p>
						Switch component has same behaviour than checkbox. You can notice
						that the difference is only the design.
					</p>
					<p>
						The switch listener is{" "}
						<b>
							<em>x-on:change</em>
						</b>
						. It will give you the checked value and the field's name. A pretty
						good behaviour is the ability to update label.
					</p>
					<p>See examples below to know how to customize it.</p>
				</ComponentSection>

				<ComponentSection heading="Installation">
					<ComponentInstallation name="switch" />
				</ComponentSection>
			</ComponentPresentation>
		</MainLayout>
	);
}
