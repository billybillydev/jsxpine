import { CodeToCopy } from "$components/code-to-copy.component";
import { CorePresentation, CoreSection } from "$views/core.view";
import { ImportantNote } from "$views/important-note.view";
import { MainLayout } from "$views/layouts.view";
import { ListWithDecimal } from "$views/lists.view";

/**
 * Core Installation And Usage page props
 * @param {import("$components/page.component").PageContext<{ heading: string, description: string }>} props
 */
export function CoreInstallationAndUsagePage({
	description,
	heading,
	...restProps
}) {
	return (
		<MainLayout {...restProps}>
			<CorePresentation heading={heading} description={description}>
				<ManualInstallationSection />
			</CorePresentation>
		</MainLayout>
	);
}

function ManualInstallationSection() {
	return (
		<CoreSection heading="Manual Installation">
			<p>
				JSXPine is not a UI library. As mentionned in{" "}
				<a href="/core/introduction" class={"link link-primary italic"}>
					introduction
				</a>
				, we provide a set of JSX components boosted with Alpine.js.
			</p>
			<p>
				Those components can be copied simply by following these steps below:
				<ListWithDecimal>
					<li>Going to the corresponding page you want ; </li>
					<li>Click on <strong>Manual Install</strong>, a modal will open showing source code ;</li>
					<li>Click on <strong>Copy</strong> button  et voilà !</li>
				</ListWithDecimal>
			</p>
			<ImportantNote>
				<p>
					Doing this way, you have to know that some components depend on other
					components, and/or some alpinejs functionalities.
				</p>
				<p>Check in the component's page and follow instructions.</p>
			</ImportantNote>
		</CoreSection>
	);
}
