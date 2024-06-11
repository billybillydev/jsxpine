import { ComponentPresentation, ComponentSection } from "$views/components.view";
import { MainLayout } from "$views/layouts.view";

/**
 * Paginations page props
 * @type {import("$common/props").JSXComponent<import("$components/page.component").PageContext<{}>>}
 */
export function PaginationsPage({ ...restProps }) {
	return (
		<MainLayout {...restProps}>
			<ComponentPresentation name="Paginations" source="pagination">
				<ComponentSection heading="Overview">
					<p>
						Pagination helps to chunk a massive data from server which can
						decrease your website performance.
					</p>
					<p>
						JSXPine has two types of pagination: input and select. Discover what
						you can achieve below.
					</p>
				</ComponentSection>

				<ComponentSection
					heading="Input Pagination"
					examples={["paginations/input"]}
				>
					<p>Input Pagination is a set of input type number and buttons.</p>
					<p>
						By changing the intput number, you get back this value and can
						perform a navigation.
					</p>
				</ComponentSection>

				<ComponentSection
					heading="Select Pagination"
					examples={["paginations/select"]}
				>
					<p>
						Select Pagination is Select component instead of input. The pages
						number is display in the select list.
					</p>
				</ComponentSection>

				<ComponentSection
					heading="Custom Button Label"
					examples={["paginations/custom-label"]}
				>
					<p>
						Pagination Pagination has 4 props to change the 4 buttons label:
						<b>
							<em>firstButtonlabel</em>
						</b>
						,{" "}
						<b>
							<em>previousButtonLabel</em>
						</b>
						,{" "}
						<b>
							<em>nextButtonLabel</em>
						</b>{" "}
						and{" "}
						<b>
							<em>lastButtonLabel</em>
						</b>
						.
					</p>
					<p>By default, icons are displayed.</p>
				</ComponentSection>

				<ComponentSection
					heading="Custom Button"
					examples={["paginations/custom-button"]}
				>
					<p>
						You can even change the 4 buttons design. Check example below to
						know how to do it.
					</p>
				</ComponentSection>
			</ComponentPresentation>
		</MainLayout>
	);
}
