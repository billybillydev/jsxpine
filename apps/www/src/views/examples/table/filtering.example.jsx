import { Table } from "$components/table.component";
import { filterColumns, items } from "$views/examples/table";

export function FilteringTableExample() {

	return (
		<Table
			class="bg-white rounded-lg border [&_table]:text-slate-900"
			columns={filterColumns}
			items={items}
		/>
	);
}
