import { BarProgress } from "$components/progress.component";

export function NoAnimationBarProgressExample() {
	return (
		<div
			x-data="{ progressValue: 0 }"
			class="w-full flex items-center gap-x-2 p-8 border rounded-sm bg-white text-slate-900"
		>
			<BarProgress
				value={92}
				x-on:track="progressValue = $event.detail.value;"
				noAnimation
			/>
			<span x-text="`${progressValue}%`" x-log="progressValue"></span>
		</div>
	);
}
