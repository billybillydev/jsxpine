import { Table } from "$components/table.component";
import { columns, items } from "$views/examples/table";

export function StylingTableExample() {
	return (
		<div class="flex flex-col gap-y-8">
			<div>
				<Table
					class="rounded-lg border"
					columns={columns}
					items={items}
					theadClass="divide-x"
					tbodyClass="[&>*]:divide-x"
				/>
			</div>
			<div>
				<Table
					class="rounded-lg border"
					columns={columns}
					items={items}
					tbodyClass="[&>*:nth-child(even)]:bg-slate-100 [&>*:nth-child(even)]:text-base-dark divide-y-0"
				/>
			</div>
		</div>
	);
}
