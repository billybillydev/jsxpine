import { MainLayout } from "$layouts/main.layout";
import { ComponentPresentation } from "$views/component-presentation";
import { ComponentPreview } from "$views/component-preview.view";
import { DangerBadgeExample } from "$views/examples/badges/danger.example";
import { DefaultBadgeExample } from "$views/examples/badges/default.example";
import { InfoBadgeExample } from "$views/examples/badges/info.example";
import { PrimaryBadgeExample } from "$views/examples/badges/primary.example";
import { SecondaryBadgeExample } from "$views/examples/badges/secondary.example";
import { SuccessBadgeExample } from "$views/examples/badges/success.example";
import { WarningBadgeExample } from "$views/examples/badges/warning.example";

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
					<ComponentPreview filename="badges/default">
						<DefaultBadgeExample />
					</ComponentPreview>
				</section>

				<section>
					<h2 id="primary-badge">Primary Badge</h2>
					<ComponentPreview filename="badges/primary">
						<PrimaryBadgeExample />
					</ComponentPreview>
				</section>

				<section>
					<h2 id="secondary-badge">Secondary Badge</h2>
					<ComponentPreview filename="badges/secondary">
						<SecondaryBadgeExample />
					</ComponentPreview>
				</section>

				<section>
					<h2 id="success-badge">Success Badge</h2>
					<ComponentPreview filename="badges/success">
						<SuccessBadgeExample />
					</ComponentPreview>
				</section>

				<section>
					<h2 id="danger-badge">Danger Badge</h2>
					<ComponentPreview filename="badges/danger">
						<DangerBadgeExample />
					</ComponentPreview>
				</section>

				<section>
					<h2 id="info-badge">Info Badge</h2>
					<ComponentPreview filename="badges/info">
						<InfoBadgeExample />
					</ComponentPreview>
				</section>

				<section>
					<h2 id="warning-badge">Warning Badge</h2>
					<ComponentPreview filename="badges/warning">
						<WarningBadgeExample />
					</ComponentPreview>
				</section>
			</ComponentPresentation>
		</MainLayout>
	);
}
