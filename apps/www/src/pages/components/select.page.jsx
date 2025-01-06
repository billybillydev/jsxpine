import {
	ComponentInstallation,
	ComponentPresentation,
	ComponentSection
} from "$views/components.view";
import { MainLayout } from "$views/layouts.view";

/**
 * Select page props
 * @type {import("$common/props").JSXComponent<import("$components/page.component").PageContext<{}>>}
 */
export function SelectPage({ ...restProps }) {
	return (
		<MainLayout {...restProps}>
			<ComponentPresentation name="Select">
				<ComponentSection heading="Overview" examples={["select/default"]}>
					<p>
						Select component is actually a dropdown component with select input
						behaviour. It takes almost all select input props.
					</p>
					<p>
						The main difference is that select input design depends on browser /
						OS, it means that, for instance, Mac OS and Windows don't display
						some web elements same way.
					</p>
					<p>
						This rule doesn't apply to this <em>Select</em> component. Here
						below is an example:
					</p>
				</ComponentSection>

				<ComponentSection heading="Installation">
					<ComponentInstallation name="select" />
				</ComponentSection>
			</ComponentPresentation>
		</MainLayout>
	);
}
