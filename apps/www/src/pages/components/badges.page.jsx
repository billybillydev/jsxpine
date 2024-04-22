import { MainLayout } from "$layouts/main.layout";
import { ComponentPresentation } from "$views/component-presentation";
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

				<section>
					<h2 id="default-page">Default Badge</h2>
					<ComponentPreview filename="badges/default" />
				</section>

				<section>
					<h2 id="primary-badge">Primary Badge</h2>
					<ComponentPreview filename="badges/primary" />
				</section>

				<section>
					<h2 id="secondary-badge">Secondary Badge</h2>
					<ComponentPreview filename="badges/secondary" />
				</section>

				<section>
					<h2 id="success-badge">Success Badge</h2>
					<ComponentPreview filename="badges/success" />
				</section>

				<section>
					<h2 id="danger-badge">Danger Badge</h2>
					<ComponentPreview filename="badges/danger" />
				</section>

				<section>
					<h2 id="info-badge">Info Badge</h2>
					<ComponentPreview filename="badges/info" />
				</section>

				<section>
					<h2 id="warning-badge">Warning Badge</h2>
					<ComponentPreview filename="badges/warning" />
				</section>
			</ComponentPresentation>
		</MainLayout>
	);
}
