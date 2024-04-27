import { MainLayout } from "$views/layouts.view";
import { ComponentPresentation } from "$views/component-presentation.view";
import { ComponentPreview } from "$views/component-preview.view";

/**
 * Modal page props
 * @type {import("$common/props").JSXComponent<import("$components/page.component").PageContext<{}>>}
 */
export function ModalsPage({ ...restProps }) {
	return (
		<MainLayout {...restProps}>
			<ComponentPresentation>
				<section class="text-center">
					<h1>Modals</h1>
				</section>

				<section id="overview">
					<h2>Overview</h2>
					<p>
						Modal allows you to show content of certain size without the need to
						leave current url.
					</p>
					<p>
						See the two types of modal below: simple modal and full screen
						modal.
					</p>
				</section>

				<section id="simple-modal">
					<h2>Simple Modal</h2>
					<p>
						Simple modal shows you a dynamic content to perform an action or to
						give you an information staying at same time in your current page.
					</p>
					<ComponentPreview filename="/modals/simple" />
					<p>
						An interesting thing is to trigger modal within a particular html
						content via <em>selector</em> props. Check example below to get the
						hint.
					</p>
					<ComponentPreview filename="/modals/simple-button-trigger" />
				</section>

				<section id="full-screen">
					<h2>Full Screen Modal</h2>
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
						<hr />
						<ComponentPreview filename="/modals/full-screen-button-trigger" />
					</div>
				</section>
			</ComponentPresentation>
		</MainLayout>
	);
}
