import { MainLayout } from "$views/layouts.view";
import { ComponentPresentation } from "$views/component-presentation.view";
import { ComponentPreview } from "$views/component-preview.view";

/**
 * Select page props
 * @type {import("$common/props").JSXComponent<import("$components/page.component").PageContext<{}>>}
 */
export function SelectPage({...restProps}) {
    return (
			<MainLayout {...restProps}>
				<ComponentPresentation>
					<section class="text-center">
						<h1>Select</h1>
					</section>

					<section id="overview">
						<h2>Overview</h2>
						<p>
							Select component is actually a dropdown component with select
							input behaviour. It takes almost all select input props.
						</p>
						<p>
							The main difference is that select input design depends on browser
							/ OS, it means that, for instance, Mac OS and Windows don't
							display some web elements same way.
						</p>
						<p>
							This rule doesn't apply to this <em>Select</em> component. Here
							below is an example:
						</p>
						<ComponentPreview filename="select/default" />
					</section>
				</ComponentPresentation>
			</MainLayout>
		);
}