import { BarProgress } from "$components/progress.component";

export function TrackValueBarProgressExample() {
	return (
		<div
			x-data="{ progressValue: 0 }"
			class="w-full flex items-center gap-x-2 p-8 border rounded-sm bg-white"
		>
			<BarProgress
				value={84}
				duration={3000}
				x-on:track="progressValue = $event.detail.value;"
			/>
			<span x-text="`${progressValue}%`" x-log="progressValue"></span>
		</div>
	);
}
