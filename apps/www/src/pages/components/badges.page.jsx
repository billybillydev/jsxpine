import {
	ComponentInstallation,
	ComponentPresentation,
	ComponentPreview,
	ComponentSection
} from "$views/components.view";
import { MainLayout } from "$views/layouts.view";
import { capitalCase } from "change-case";

/**
 * Badges page props
 * @type {import("$common/props").JSXComponent<import("$components/page.component").PageContext<{}>>}
 */
export function BadgesPage(props) {
	return (
		<MainLayout {...props}>
			<ComponentPresentation name="Badges" source="badge">
				<section>
					<h2 id="overview">Overview</h2>
					<p>
						Badges are pretty component made to emphasis some information,
						generally a word (e.g: hashtag).
					</p>
					<p>See below different types of badges JSXPine provides.</p>
				</section>

				<ComponentSection heading="Installation">
					<ComponentInstallation name="badge" />
				</ComponentSection>

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
						<section id={`${type}-page`}>
							<h2 safe>{capitalCase(type)} Badge</h2>
							<ComponentPreview filename={`badges/${type}`} />
						</section>
					);
				})}
			</ComponentPresentation>
		</MainLayout>
	);
}
