import {
	ComponentPresentation,
	ComponentSection
} from "$views/components.view";
import { MainLayout } from "$views/layouts.view";

/**
 * Buttons page props
 * @type {import("$common/props").JSXComponent<import("$components/page.component").PageContext<{}>>}
 */
export function ButtonsPage(props) {
	return (
		<MainLayout {...props}>
			<ComponentPresentation name="Buttons" source="button">
				<ComponentSection heading="Overview" examples={["buttons/overview"]}>
					<p>
						Buttons are clickable components aimed to trigger an action. Used
						for many reasons, it appears frequently in a form.
					</p>
				</ComponentSection>

				<ComponentSection
					heading="Alpine Interop"
					examples={["buttons/alpine-interop"]}
				>
					<p>
						We can use alpine properties such as <em>@click</em> or{" "}
						<em>x:on-click</em>.
					</p>
				</ComponentSection>

				<ComponentSection
					heading="Primary Button"
					examples={["buttons/primary"]}
				>
					<p>
						We use the primary button for main actions like saving a form or
						creating a new item.
					</p>
				</ComponentSection>

				<ComponentSection
					heading="Secondary Button"
					examples={["buttons/secondary"]}
				>
					<p>
						Secondary buttons accompany primary buttons to provide additional
						actions.
					</p>
					<p>
						For example, cancel buttons can be considered as secondary buttons.
					</p>
				</ComponentSection>

				<ComponentSection
					heading="Success Button"
					examples={["buttons/success"]}
				>
					<p>Success buttons give positive attempt to actions.</p>
				</ComponentSection>

				<ComponentSection heading="Danger Button" examples={["buttons/danger"]}>
					<p>Danger buttons are useful to prevent/cancel actions.</p>
				</ComponentSection>

				<ComponentSection heading="Info Button" examples={["buttons/info"]}>
					<p>Info buttons are mostly used for informative actions.</p>
				</ComponentSection>

				<ComponentSection
					heading="Warning Button"
					examples={["buttons/warning"]}
				>
					<p>Warning buttons are often used for risky actions.</p>
				</ComponentSection>
			</ComponentPresentation>
		</MainLayout>
	);
}
