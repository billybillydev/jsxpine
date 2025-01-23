import { Table } from "$components/table.component";
import { sortColumns, items } from "$views/examples/table";

export function SortingTableExample() {
	return (
		<Table
			class="rounded-lg border"
			columns={sortColumns}
			items={items}
		/>
	);
}
