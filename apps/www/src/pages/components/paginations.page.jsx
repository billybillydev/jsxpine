import { MainLayout } from "$layouts/main.layout";
import { ComponentPresentation } from "$views/component-presentation";
import { ComponentPreview } from "$views/component-preview.view";

/**
 * Paginations page props
 * @type {import("$common/props").JSXComponent<import("$components/page.component").PageContext<{}>>}
 */
export function PaginationsPage({ ...restProps }) {
	return (
		<MainLayout {...restProps}>
			<ComponentPresentation>
				<section class="text-center">
					<h1>Paginations</h1>
				</section>

				<section id="overview">
					<h2>Overview</h2>
					<p>
						Pagination helps to chunk a massive data from server which can
						decrease your website performance.
					</p>
					<p>
						JSXPine has two types of pagination: input and select. Discover what
						you can achieve below.
					</p>
				</section>

				<section id="input-pagination">
					<h2>Input Pagination</h2>
					<p>Input Pagination is a set of input type number and buttons.</p>
					<p>
						By changing the intput number, you get back this value and can
						perform a navigation.
					</p>
					<ComponentPreview filename="paginations/input" />
				</section>

				<section id="select-pagination">
					<h2>Select Pagination</h2>
					<p>
						Select Pagination is Select component instead of input. The pages
						number is display in the select list.
					</p>
					<ComponentPreview filename="paginations/select" />
				</section>

				<section id="custom-button-label">
					<h2>Custom Button Label</h2>
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
					<ComponentPreview filename="paginations/custom-label" />
				</section>

				<section id="custom-button">
					<h2>Custom Button</h2>
					<p>
						You can even change the 4 buttons design. Check example below to
						know how to do it.
					</p>
					<ComponentPreview filename="paginations/custom-button" />
				</section>
			</ComponentPresentation>
		</MainLayout>
	);
}
