import { MainLayout } from "$layouts/main.layout";
import { ComponentPresentation } from "$views/component-presentation";
import { ComponentPreview } from "$views/component-preview.view";

/**
 * Tooltips page props
 * @type {import("$common/props").JSXComponent<import("$components/page.component").PageContext<{}>>}
 */
export function TooltipsPage({ ...restProps }) {
    return (
			<MainLayout {...restProps}>
				<ComponentPresentation>
					<section class="text-center">
						<h1>Tooltips</h1>
					</section>

					<section id="overview">
						<h2>Overview</h2>
						<p>
							Tooltip allows you to give a piece of information, mostly, in the
							shortest way.
						</p>
						<p>
							This component has many props enabling you to customize the
							content you want to show. Here are many examples you can achieve.
						</p>
					</section>

					<section id="tooltip-as-text">
						<h2>Tooltip as Text</h2>
						<p>
							A regular way to tooltip is just to pass to text props a string
							value as message.
						</p>
						<ComponentPreview filename="tooltips/with-text" />
					</section>

					<section id="tooltip-as-component">
						<h2>Tooltip as Component</h2>
						<p>
							Even better, you can pass an astro component to tooltip with
							component props.
						</p>
						<p>
							PS: <em>text</em> props has priority to <em>component</em> props.
						</p>
						<ComponentPreview filename="tooltips/with-component" />
					</section>

					<section id="custom-tooltip-trigger">
						<h2>Custom Tooltip Trigger</h2>
						<p>
							By default, tooltip message is triggered by hovering content. With
							triggerOnHover props, you can disable this mechanism and trigger
							tooltip in your own way.
						</p>
						<p>
                            Below is an example with a trigger on click. By the way, the copy
                            button in code side is a tooltip triggering by click.
                        </p>
						<ComponentPreview filename="tooltips/custom-trigger" />
					</section>
				</ComponentPresentation>
			</MainLayout>
		);
}