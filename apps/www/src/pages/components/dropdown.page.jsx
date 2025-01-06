import {
	ComponentInstallation,
	ComponentPresentation,
	ComponentSection
} from "$views/components.view";
import { MainLayout } from "$views/layouts.view";

/**
 * Dropdown page props
 * @type {import("$common/props").JSXComponent<import("$components/page.component").PageContext<{}>>}
 */
export function DropdownPage({ ...restProps }) {
	return (
		<MainLayout {...restProps}>
			<ComponentPresentation name="Dropdown">
				<ComponentSection heading="Overview">
					<p>
						Dropdown is mostly used for listing items without taking any
						additional space in the main context.
					</p>
					<p>
						For instance, it's common on an ecommerce shop to have in menu, a
						dropdown listing specific categories. The dropdown can adapt its
						display position, i.e if it has to appears at the bottom but doesn't
						have any space, it will come on top.
					</p>
					<p>
						Here below are some examples of what you can achieve with dropdown.
					</p>
				</ComponentSection>

				<ComponentSection heading="Installation">
					<ComponentInstallation name="dropdown" />
				</ComponentSection>

				<ComponentSection
					heading="Dropdown on Click"
					examples={["dropdown/default"]}
				>
					<p>
						Default case is dropdown content displayed when clicking on trigger
						element.
					</p>
				</ComponentSection>

				<ComponentSection
					heading="Dropdown on Hover"
					examples={["dropdown/hover"]}
				>
					<p>Triggering dropdown on hover is also possible.</p>
				</ComponentSection>

				<ComponentSection
					heading="Dropdown Menu Bar Example"
					examples={["dropdown/menu-bar"]}
				>
					<p>
						A practical case. Here, each list item is a dropdown. Notice that
						you can have nested dropdowns.
					</p>
				</ComponentSection>

				<ComponentSection
					heading="Dropdown Menu Hover Example"
					examples={["dropdown/menu"]}
				>
					<p>
						In this example, dropdown is triggered on hover on each list item.
					</p>
					<p class="italic">
						P.S: Notice that as component is at page bottom, dropdown will
						appear on top.
					</p>
				</ComponentSection>
			</ComponentPresentation>
		</MainLayout>
	);
}
