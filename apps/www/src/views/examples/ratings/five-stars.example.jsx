import { Ratings } from "$components/ratings.component";

export function FiveStarsRatingsExample() {
	return (
		<div class="p-4 border rounded bg-white">
			<Ratings
				nb={5}
				size={7}
				value={3.6}
				applyDefsId="five-stars-ratings-example"
			/>
		</div>
	);
}
