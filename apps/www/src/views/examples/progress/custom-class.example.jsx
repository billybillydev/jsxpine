import { BarProgress } from "$components/progress.component";

export function CustomClassProgressExample() {
	return (
		<div class="w-full flex flex-col gap-y-4 items-center p-8 border rounded-sm bg-white">
			<BarProgress class="[&>span]:bg-slate-400" interval={150} value={76} />
			<BarProgress
				class="h-2 rounded-none [&>span]:bg-blue-300"
				duration={1500}
				value={62}
			/>
		</div>
	);
}
