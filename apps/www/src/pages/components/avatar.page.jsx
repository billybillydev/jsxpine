import {
	ComponentInstallation,
	ComponentPresentation,
	ComponentPreview,
	ComponentSection
} from "$views/components.view";
import { ImportantNote } from "$views/important-note.view";
import { MainLayout } from "$views/layouts.view";

/**
 * Avatar page props
 * @type {import("$common/props").JSXComponent<import("$components/page.component").PageContext<{}>>}
 */
export function AvatarPage({ ...restProps }) {
	return (
		<MainLayout {...restProps}>
			<ComponentPresentation name="Avatar">
				<ComponentSection heading="Overview">
					<p>
						Avatar is a pretty useful component showing generally an image. In
						most case, dimensions are not too high, around 300px max.
					</p>
					<p>
						With JSXPine, you can use Avatar with a fallback text in case you
						only want to display text (initial name for instance).
					</p>
					<p>Below are differents examples of this component.</p>
				</ComponentSection>

				<ComponentSection heading="Installation">
					<ComponentInstallation name="avatar" />
				</ComponentSection>

				<ComponentSection heading="Avatar with Image">
					<p>
						Just pass an ImageType object to <em>image</em> props and you good
						to go. Just simply as that.
					</p>
					<ComponentPreview filename="avatar/image" />
				</ComponentSection>

				<ComponentSection heading="Avatar with Text">
					<p>
						The <em>fallbackText</em> props is here in case image doesn't show
						nothing.
					</p>
					<p>
						It's also useful to just showing text. Be aware that your text
						length can break the main purpose display, i.e a full-rounded
						component. So, fallbackText is usually two or three characters.
					</p>
					<ComponentPreview filename="avatar/fallback-text" />
				</ComponentSection>

				<ComponentSection heading="Size Props Avatar">
					<p>
						Size can be defined. As said above, it's not intended to display
						Avatar component in a too big dimension. But it's up to you.
					</p>
					<ComponentPreview filename="avatar/size" />
					<ImportantNote>
						<p>
							Notice that only numeric values betwween 6 and 96 are considered.
							See the{" "}
							<a href="#" class={"link link-primary"}>
								properties section
							</a>{" "}
							to learn more.
						</p>
					</ImportantNote>
				</ComponentSection>
			</ComponentPresentation>
		</MainLayout>
	);
}
