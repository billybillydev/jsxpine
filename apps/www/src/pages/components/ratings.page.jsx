import { ComponentPresentation, ComponentSection } from "$views/components.view";
import { MainLayout } from "$views/layouts.view";

/**
 * Radio page props
 * @type {import("$common/props").JSXComponent<import("$components/page.component").PageContext<{}>>}
 */
export function RatingsPage({ ...restProps }) {
	return (
		<MainLayout {...restProps}>
			<ComponentPresentation name="Ratings">
				<ComponentSection heading="Overview">
					<p>
						Ratings, a meaningful way to show how much an item (mostly product
						from online store) is appreciated...or not.
					</p>
					<p>
						It is showed very often with stars and average value of reviewers'
						ratings. Examples below show you how you can use JSXPine's Rating
						component.
					</p>
				</ComponentSection>

				<ComponentSection
					heading="Default Ratings"
					examples={["ratings/default"]}
				>
					<p>
						By default, Ratings displays one star as icon and _value_ props is a
						integer / float number between 0 and 5. Under the hood, Ratings
						turns value in percentage.
					</p>
				</ComponentSection>

				<ComponentSection
					heading="Number Stars Ratings"
					examples={["ratings/five-stars"]}
				>
					<p>
						By using <em>nb</em> props, number of total ratings icon will be
						different than 1.
					</p>
				</ComponentSection>

				<ComponentSection
					heading="Custom Icon Ratings"
					examples={["ratings/custom-icon"]}
				>
					<p>
						The <em>icon</em> props takes an astro component and replace the
						current one which is StarIcon. Pay attention to color.
					</p>
					<p>
						By using <em>color</em> props, you can show any color you want. It's
						an object with two properties: fill and empty.
					</p>
				</ComponentSection>
			</ComponentPresentation>
		</MainLayout>
	);
}
