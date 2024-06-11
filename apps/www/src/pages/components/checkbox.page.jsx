import { ComponentPresentation, ComponentSection } from "$views/components.view";
import { MainLayout } from "$views/layouts.view";

/**
 * Checkbox page props
 * @type {import("$common/props").JSXComponent<import("$components/page.component").PageContext<{}>>}
 */
export function CheckboxPage({ ...restProps }) {
	return (
		<MainLayout {...restProps}>
			<ComponentPresentation name="Checkbox">
				<ComponentSection heading="Overview" examples={["checkbox/default"]}>
					<p>
						Checkbox is only a wrapper component which contains an hidden
						checkbox input.
					</p>
					<p>
						It gives you benefit of checked props from a checkbox input and let
						you customize your component style based on this checked props.
					</p>
				</ComponentSection>
			</ComponentPresentation>
		</MainLayout>
	);
}
