import { Table } from "$components/table.component";
import {
    items,
    sortAndFilterColumns
} from "$views/examples/table";

export function SortingAndFilteringTableExample() {
	return (
		<Table
			class="rounded-lg border"
			columns={sortAndFilterColumns}
			items={items}
		/>
	);
}
