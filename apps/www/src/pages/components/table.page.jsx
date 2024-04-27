import { MainLayout } from "$views/layouts.view";
import { ComponentPresentation } from "$views/component-presentation.view";
import { ComponentPreview } from "$views/component-preview.view";

/**
 * Table page props
 * @type {import("$common/props").JSXComponent<import("$components/page.component").PageContext<{}>>}
 */
export function TablePage({ ...props }) {
	return (
		<MainLayout {...props}>
			<ComponentPresentation>
				<section class="text-center">
					<h1>Table</h1>
				</section>

				<section id="overview">
					<h2>Overview</h2>
					<p>
						Table is a component showing information having same properties. For
						instance, customer orders list in an e-commerce shop.
					</p>
					<p>
						Astropine Table component provides you two greats features working
						out of the box: sorting and filtering.
					</p>
					<p>
						We will see in this page the many possibilities you can achieve with
						this component.
					</p>
				</section>

				<section id="basic-table">
					<h2>Basic Table</h2>
					<p>
						Here we have a basic table, taking just two props : columns and
						items.
					</p>
					<p class="italic">
						P.S: Notice that columns is an array of items keys.
					</p>
					<ComponentPreview filename="table/basic" />
				</section>

				<section id="styling-table">
					<h2>Styling Table</h2>
					<p>
						About styling, Table component provides theadClass and tbodyClass
						props, which respectfully stylized thead and tbody tags. Two
						examples below.
					</p>
					<p>
						First is about adding borders between columns. Second applied class
						only on even rows.
					</p>
					<ComponentPreview filename="table/styling" />
				</section>

				<section id="sorting-table">
					<h2>Sorting Table</h2>
					<p>
						Table can be sorted. When enabling sorting, an icon will appear
						aside column label.
					</p>
					<p class="italic">
						P.S: Just remember one rule, sorting applies to only one column.
					</p>
					<ComponentPreview filename="table/sorting" />
				</section>

				<section id="filtering-table">
					<h2>Filtering Table</h2>
					<p>
						About filtering, a set of predefined filtering are provided to
						handle most cases. Check code part to see how this example handles
						filtering.
					</p>
					<p class="italic">
						P.S: Multiple criterias are accepted when it comes to filter.
					</p>
					<ComponentPreview filename="table/filtering" />
				</section>

				<section id="sorting-and-filtering-table">
					<h2>Sorting and Filtering</h2>
					<p>
						Table This example is just a combination of sorting and filtering.
					</p>
					<ComponentPreview filename="table/sorting-and-filtering" />
				</section>
			</ComponentPresentation>
		</MainLayout>
	);
}
