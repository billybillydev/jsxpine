import { capitalize } from "$lib";
import { ComponentPresentation } from "$views/component-presentation.view";
import { ComponentPreview } from "$views/component-preview.view";
import { MainLayout } from "$views/layouts.view";

/**
 * Alerts page props
 * @type {import("$common/props").JSXComponent<import("$components/page.component").PageContext<{}>>}
 */
export async function AlertsPage(props) {
	return (
		<MainLayout {...props}>
			<ComponentPresentation>
				<section class="text-center">
					<h1>Alerts</h1>
				</section>
				{[
					"default",
					"primary",
					"secondary",
					"success",
					"danger",
					"info",
					"warning"
				].map((type) => {
					return (
						<section id={`${type}-alert`}>
							<h2 safe>{capitalize(type)} Alerts</h2>
							<ComponentPreview filename={`alerts/${type}`} />
						</section>
					);
				})}
			</ComponentPresentation>
		</MainLayout>
	);
}
