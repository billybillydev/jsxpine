import { RadioInput } from "$components/inputs.component";

export function RadioInputExample() {
	return (
		<div class="flex gap-x-4">
			<div class="flex items-center gap-x-2">
				<label for="radio-1">Radio 1</label>
				<RadioInput
					x-on:change={`console.log($event.target.id, $event.target.checked)`}
					name="radio"
					value="radio-1"
					id="radio-1"
				/>
			</div>
			<div class="flex items-center gap-x-2">
				<label for="radio-2">Radio 2</label>
				<RadioInput
					x-on:change={`console.log($event.target.id, $event.target.checked)`}
					name="radio"
					value="radio-2"
					id="radio-2"
				/>
			</div>
			<div class="flex items-center gap-x-2">
				<label for="radio-3">Radio 3</label>
				<RadioInput
					x-on:change={`console.log($event.target.id, $event.target.checked)`}
					name="radio"
					value="radio-3"
					id="radio-3"
				/>
			</div>
		</div>
	);
}
