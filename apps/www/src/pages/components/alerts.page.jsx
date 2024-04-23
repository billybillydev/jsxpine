import { MainLayout } from "$layouts/main.layout";
import { ComponentPresentation } from "$views/component-presentation";
import { ComponentPreview } from "$views/component-preview.view";

/**
 * Alerts page props
 * @type {import("$common/props").JSXComponent<import("$components/page.component").PageContext<{}>>}
 */
export async function AlertsPage(props) {
	return (
		<MainLayout {...props}>
			<ComponentPresentation>
				{[
					"Default",
					"Primary",
					"Secondary",
					"Success",
					"Danger",
					"Info",
					"Warning"
				].map(async (type) => {
					const lowerType = type.toLowerCase();
					const Component = await import(
						`$views/examples/alerts/${lowerType}.example`
					).then((m) => m[`${type}AlertExample`]);
					return (
						<section id={`${lowerType}-alert`}>
							<h2>{type} Alert</h2>
							<ComponentPreview filename={`alerts/${lowerType}`} />
						</section>
					);
				})}
			</ComponentPresentation>
		</MainLayout>
	);
}
