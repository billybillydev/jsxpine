import { MainLayout } from "$views/layouts.view";
import { ComponentPresentation } from "$views/component-presentation.view";
import { ComponentPreview } from "$views/component-preview.view";

/**
 * Radio page props
 * @type {import("$common/props").JSXComponent<import("$components/page.component").PageContext<{}>>}
 */
export function RatingsPage({ ...restProps }) {
	return (
		<MainLayout {...restProps}>
			<ComponentPresentation>
				<section class="text-center">
					<h1>Ratings</h1>
				</section>

				<section id="overview">
					<h2>Overview</h2>
					<p>
						Ratings, a meaningful way to show how much an item (mostly product
						from online store) is appreciated...or not.
					</p>
					<p>
						It is showed very often with stars and average value of reviewers'
						ratings. Examples below show you how you can use AstroPine's Rating
						component.
					</p>
				</section>

				<section id="default-ratings">
					<h2>Default Ratings</h2>
					<p>
						By default, Ratings displays one star as icon and _value_ props is a
						integer / float number between 0 and 5. Under the hood, Ratings
						turns value in percentage.
					</p>
					<ComponentPreview filename="ratings/default" />
				</section>

				<section id="number-stars-ratings">
					<h2>Number Stars Ratings</h2>
					<p>
						By using <em>nb</em> props, number of total ratings icon will be
						different than 1.
					</p>
					<ComponentPreview filename="ratings/five-stars" />
				</section>

				<section id="custom-icon-ratings">
					<h2>Custom Icon Ratings</h2>
					<p>
						The <em>icon</em> props takes an astro component and replace the
						current one which is StarIcon. Pay attention to color.
					</p>
					<p>
						By using <em>color</em> props, you can show any color you want. It's an
						object with two properties: fill and empty.
					</p>
					<ComponentPreview filename="ratings/custom-icon" />
				</section>
			</ComponentPresentation>
		</MainLayout>
	);
}
