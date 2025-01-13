import { BarProgress } from "$components/progress.component";

export function ThemeColorBarProgressExample() {
	return (
		<div class="w-full flex flex-col gap-y-4 items-center p-8 border rounded-sm bg-white text-slate-900">
			<BarProgress class="h-6" value={50} />
			<BarProgress class="h-6" type="primary" value={92} />
			<BarProgress class="h-6" type="secondary" />
			<BarProgress class="h-6" type="success" value={75} />
			<BarProgress class="h-6" type="danger" value={67} />
			<BarProgress class="h-6" type="info" value={39} />
			<BarProgress class="h-6" type="warning" value={84} />
		</div>
	);
}
