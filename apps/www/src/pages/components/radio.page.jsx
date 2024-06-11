import { ComponentPresentation, ComponentSection } from "$views/components.view";
import { MainLayout } from "$views/layouts.view";

/**
 * Radio page props
 * @type {import("$common/props").JSXComponent<import("$components/page.component").PageContext<{}>>}
 */
export function RadioPage({ ...restProps }) {
    return (
			<MainLayout {...restProps}>
				<ComponentPresentation name="Radio">
					<ComponentSection
						heading="Overview"
						examples={["radio/default", "radio/another"]}
					>
						<p>
							Radio is only a wrapper component which contains an hidden radio
							input.
						</p>
						<p>
							It gives you benefit of checked props from a radio input and let
							you customize your component style based on this checked props.
						</p>
					</ComponentSection>
				</ComponentPresentation>
			</MainLayout>
		);
}