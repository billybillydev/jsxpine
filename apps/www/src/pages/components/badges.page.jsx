import { MainLayout } from "$views/layouts.view";
import { capitalize } from "$lib";
import { ComponentPresentation } from "$views/component-presentation.view";
import { ComponentPreview } from "$views/component-preview.view";

/**
 * Badges page props
 * @type {import("$common/props").JSXComponent<import("$components/page.component").PageContext<{}>>}
 */
export function BadgesPage(props) {
	return (
		<MainLayout {...props}>
			<ComponentPresentation>
				<section class="text-center">
					<h1>Badges</h1>
				</section>

				<section>
					<h2 id="overview">Overview</h2>
					<p>
						Badges are pretty component made to emphasis some information,
						generally a word (e.g: hashtag).
					</p>
					<p>See below different types of badges AstroPine provides.</p>
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
						<section id={`${type}-page`}>
							<h2>{capitalize(type)} Badge</h2>
							<ComponentPreview filename={`badges/${type}`} />
						</section>
					);
				})}
			</ComponentPresentation>
		</MainLayout>
	);
}
