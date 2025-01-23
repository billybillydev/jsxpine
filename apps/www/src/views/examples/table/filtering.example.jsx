import { Table } from "$components/table.component";
import { filterColumns, items } from "$views/examples/table";

export function FilteringTableExample() {

	return (
		<Table
			class="rounded-lg border"
			columns={filterColumns}
			items={items}
		/>
	);
}
