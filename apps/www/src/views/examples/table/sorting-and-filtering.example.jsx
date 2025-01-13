import { Table } from "$components/table.component";
import {
    items,
    sortAndFilterColumns
} from "$views/examples/table";

export function SortingAndFilteringTableExample() {
	return (
		<Table
			class="bg-white rounded-lg border [&_table]:text-slate-900"
			columns={sortAndFilterColumns}
			items={items}
		/>
	);
}
