import { Ratings } from "$components/ratings.component";
import { COLORS } from "$config/design";

export function CustomIconRatingsExample() {
	return (
		<div class="p-4 border rounded bg-white">
			<Ratings
				value={2.4}
				nb={3}
				max={3}
				size={12}
				color={{ empty: COLORS.slate[300], fill: COLORS.red[500] }}
				icon="heart-3-fill"
                applyDefsId="custom-icon-ratings-example"
			/>
		</div>
	);
}
