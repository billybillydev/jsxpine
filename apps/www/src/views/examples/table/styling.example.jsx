import { Table } from "$components/table.component";
import { columns, items } from "$views/examples/table";

export function StylingTableExample() {
	return (
		<div class="flex flex-col gap-y-8">
			<div>
				<Table
					class="bg-white rounded-lg border"
					columns={columns}
					items={items}
					theadClass="divide-x"
					tbodyClass="[&>*]:divide-x"
				/>
			</div>
			<div>
				<Table
					class="bg-white rounded-lg border"
					columns={columns}
					items={items}
					tbodyClass="[&>*:nth-child(even)]:bg-slate-100 divide-y-0"
				/>
			</div>
		</div>
	);
}
