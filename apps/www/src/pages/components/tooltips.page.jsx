import {
	ComponentInstallation,
	ComponentPresentation,
	ComponentSection
} from "$views/components.view";
import { MainLayout } from "$views/layouts.view";

/**
 * Tooltips page props
 * @type {import("$common/props").JSXComponent<import("$components/page.component").PageContext<{}>>}
 */
export function TooltipsPage({ ...restProps }) {
	return (
		<MainLayout {...restProps}>
			<ComponentPresentation name="Tooltips" source="tooltip">
				<ComponentSection heading="Overview">
					<p>
						Tooltip allows you to give a piece of information, mostly, in the
						shortest way.
					</p>
					<p>
						This component has many props enabling you to customize the content
						you want to show. Here are many examples you can achieve.
					</p>
				</ComponentSection>

				<ComponentSection heading="Installation">
					<ComponentInstallation name="tooltip" />
				</ComponentSection>

				<ComponentSection
					heading="Tooltip as Text"
					examples={["tooltips/with-text"]}
				>
					<p>
						A regular way to tooltip is just to pass to text props a string
						value as message.
					</p>
				</ComponentSection>

				<ComponentSection
					heading="Tooltip as Component"
					examples={["tooltips/with-component"]}
				>
					<p>
						Even better, you can pass an astro component to tooltip with
						component props.
					</p>
					<p>
						PS: <em>text</em> props has priority to <em>component</em> props.
					</p>
				</ComponentSection>

				<ComponentSection
					heading="Custom Tooltip Trigger"
					examples={["tooltips/custom-trigger"]}
				>
					<p>
						By default, tooltip message is triggered by hovering content. With
						triggerOnHover props, you can disable this mechanism and trigger
						tooltip in your own way.
					</p>
					<p>
						Below is an example with a trigger on click. By the way, the copy
						button in code side is a tooltip triggering by click.
					</p>
				</ComponentSection>
			</ComponentPresentation>
		</MainLayout>
	);
}
