import { Table } from "$components/table.component";
import { columns, items } from "$views/examples/table";


export function BasicTableExample() {
	return (
		<Table class="rounded-lg border" columns={columns} items={items} />
	);
}
