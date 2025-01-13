import { Ratings } from "$components/ratings.component";

export function DefaultRatingsExample() {
	const value = 3.2;
	return (
		<div class="p-4 border rounded bg-white text-slate-900">
			<div class="flex gap-x-2 items-end">
				<span>{value}</span>
				<Ratings value={value} applyDefsId="default-ratings-example" />
			</div>
		</div>
	);
}
