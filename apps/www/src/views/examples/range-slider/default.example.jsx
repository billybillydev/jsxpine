import { RangeSlider } from "$components/range-slider.component";

export function DefaultRangeSlider() {
	return (
		<RangeSlider
			value={20}
			step={10}
			x-on:input="console.log('input listener : ', $event.target.value)"
			x-on:change="console.log('change listener : ', $event.target.value)"
			backgroundThumbColor="bg-info-600"
			backgroundProgressColor="bg-info-400"
		/>
	);
}
