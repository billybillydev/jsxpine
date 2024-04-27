import { MainLayout } from "$views/layouts.view";
import { ComponentPresentation } from "$views/component-presentation.view";
import { ComponentPreview } from "$views/component-preview.view";

/**
 * Avatar page props
 * @type {import("$common/props").JSXComponent<import("$components/page.component").PageContext<{}>>}
 */
export function AvatarPage({ ...restProps }) {
	return (
		<MainLayout {...restProps}>
			<ComponentPresentation>
				<section class="text-center">
					<h1>Avatar</h1>
				</section>
				<section id="overview">
					<h2>Overview</h2>
					<p>
						Avatar is a pretty useful component showing generally an image. In
						most case, dimensions are not too high, around 300px max.
					</p>
					<p>
						With AstroPine, you can use Avatar with a fallback text in case you
						only want to display text (initial name for instance).
					</p>
					<p>Below are differents examples of this component.</p>
				</section>

				<section id="avatar-with-image">
					<h2>Avatar with Image</h2>
					<p>
						Just pass an ImageType object to <em>image</em> props and you good
						to go. Just simply as that.
					</p>
					<ComponentPreview filename="avatar/image" />
				</section>

				<section id="avatar-with-text">
					<h2>Avatar with Text</h2>
					<p>
						The <em>fallbackText</em> props is here in case image don't show
						nothing.
					</p>
					<p>
						It's also useful to just showing text. Be aware that your text
						length can break the main purpose display, i.e a full-rounded
						component.
					</p>
					<ComponentPreview filename="avatar/fallback-text" />
				</section>

				<section>
					<h2>Size Props Avatar</h2>
					<p>
						Size can be define. As said above, it's not intended to display
						Avatar in a too big dimension. But it's up to you.
					</p>
					<p>
						Size value comes from SpecificTizeType. You can see all values in
						<a href="#">Specific Size page]</a>.
					</p>
					<p class="italic">
						P.S: Notice that only numeric (integer and float) values and size
						above or equal to 8 from size are considered.
					</p>
					<ComponentPreview filename="avatar/size" />
				</section>
			</ComponentPresentation>
		</MainLayout>
	);
}
