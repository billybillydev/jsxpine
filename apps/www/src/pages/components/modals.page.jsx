import {
	ComponentInstallation,
	ComponentPresentation,
	ComponentPreview,
	ComponentSection
} from "$views/components.view";
import { MainLayout } from "$views/layouts.view";

/**
 * Modal page props
 * @type {import("$common/props").JSXComponent<import("$components/page.component").PageContext<{}>>}
 */
export function ModalsPage({ ...restProps }) {
	return (
		<MainLayout {...restProps}>
			<ComponentPresentation name="Modals" source="modal">
				<ComponentSection heading="Overview">
					<p>
						Modal allows you to show content of certain size without the need to
						leave current url.
					</p>
					<p>
						See the two types of modal below: simple modal and full screen
						modal.
					</p>
				</ComponentSection>

				<ComponentSection heading="Installation">
					<ComponentInstallation name="modal" />
				</ComponentSection>

				<ComponentSection heading="Simple Modal">
					<div class="space-y-6">
						<p>
							Simple modal shows you a dynamic content to perform an action or
							to give you an information staying at same time in your current
							page.
						</p>
						<ComponentPreview filename="/modals/simple" />
						<p>
							An interesting thing is to trigger modal within a particular html
							content via <em>selector</em> props. Check example below to get
							the hint.
						</p>
						<ComponentPreview filename="/modals/simple-button-trigger" />
						<p>
							Also, you can use a lighter overlay with <em>overlay</em> props
						</p>
						<ComponentPreview filename="/modals/simple-overlay" />
					</div>
				</ComponentSection>

				<ComponentSection heading="Full Screen Modal">
					<p>
						With full screen, content take the entire window screen. Great way
						to keep user's focus and display a larger content.
					</p>
					<p>
						Modal takes children as props, so you can provide your own trigger.
						Simply put{" "}
						<b>
							<em>x-bind="trigger"</em>
						</b>{" "}
						on it
					</p>
					<div class="flex flex-col gap-y-6 py-4">
						<ComponentPreview filename="/modals/full-screen" />
						<p>
							Also, you can use as well <em>selector</em> props and customise
							your modal trigger as you want.
						</p>
						<ComponentPreview filename="/modals/full-screen-button-trigger" />
					</div>
				</ComponentSection>
			</ComponentPresentation>
		</MainLayout>
	);
}
