import { BarProgress, CounterProgress } from "$components/progress.component";

export function IntervalAndDurationProgressExample() {
	return (
		<div class="w-full flex flex-col gap-y-8 items-center p-8 border rounded-sm bg-white text-slate-900">
			<div class="flex flex-col justify-center items-center w-full gap-y-4">
				<h4>Bar</h4>
				<BarProgress interval={250} value={76} />
				<BarProgress duration={4000} value={76} />
				<BarProgress duration={4000} value={22} />
			</div>
			<div class="flex flex-col justify-center items-center">
				<h4>Counter</h4>
				<CounterProgress interval={250} value={76} />
				<CounterProgress duration={4000} value={76} />
				<CounterProgress duration={4000} value={22} />
			</div>
		</div>
	);
}
