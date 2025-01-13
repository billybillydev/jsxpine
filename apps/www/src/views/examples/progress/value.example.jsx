import { BarProgress, CounterProgress } from "$components/progress.component";

export function VallueProgressExample() {
	return (
		<div class="w-64 p-8 border flex flex-col gap-y-4 rounded-sm bg-white text-slate-900">
			<div class="flex items-center gap-x-4">
				<h4>Bar</h4>
				<BarProgress value={84} />
			</div>
			<div class="flex items-center gap-x-4">
				<h4>Counter</h4>
				<CounterProgress value={76} />
			</div>
		</div>
	);
}
