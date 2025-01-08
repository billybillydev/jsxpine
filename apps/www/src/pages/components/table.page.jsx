import {
	ComponentInstallation,
	ComponentPresentation,
	ComponentSection
} from "$views/components.view";
import { MainLayout } from "$views/layouts.view";

/**
 * Table page props
 * @type {import("$common/props").JSXComponent<import("$components/page.component").PageContext<{}>>}
 */
export function TablePage({ ...props }) {
	return (
		<MainLayout {...props}>
			<ComponentPresentation name="Table">
				<ComponentSection heading="Overview">
					<p>
						Table is a component showing information having same properties. For
						instance, customer orders list in an e-commerce shop.
					</p>
					<p>
						Table component provides you two greats features working
						out of the box: sorting and filtering.
					</p>
					<p>
						We will see in this page the many possibilities you can achieve with
						this component.
					</p>
				</ComponentSection>

				<ComponentSection heading="Installation">
					<ComponentInstallation name="table" />
				</ComponentSection>

				<ComponentSection heading="Basic Table" examples={["table/basic"]}>
					<p>
						Here we have a basic table, taking just two props : columns and
						items.
					</p>
					<p class="italic">
						P.S: Notice that columns is an array of items keys.
					</p>
				</ComponentSection>

				<ComponentSection heading="Styling Table" examples={["table/styling"]}>
					<p>
						About styling, Table component provides theadClass and tbodyClass
						props, which respectfully stylized thead and tbody tags. Two
						examples below.
					</p>
					<p>
						First is about adding borders between columns. Second applied class
						only on even rows.
					</p>
				</ComponentSection>

				<ComponentSection heading="Sorting Table" examples={["table/sorting"]}>
					<p>
						Table can be sorted. When enabling sorting, an icon will appear
						aside column label.
					</p>
					<p class="italic">
						P.S: Just remember one rule, sorting applies to only one column.
					</p>
				</ComponentSection>

				<ComponentSection
					heading="Filtering Table"
					examples={["table/filtering"]}
				>
					<p>
						About filtering, a set of predefined filtering are provided to
						handle most cases. Check code part to see how this example handles
						filtering.
					</p>
					<p class="italic">
						P.S: Multiple criterias are accepted when it comes to filter.
					</p>
				</ComponentSection>

				<ComponentSection
					heading="Sorting and Filtering"
					examples={["table/sorting-and-filtering"]}
				>
					<p>
						Table This example is just a combination of sorting and filtering.
					</p>
				</ComponentSection>
			</ComponentPresentation>
		</MainLayout>
	);
}
