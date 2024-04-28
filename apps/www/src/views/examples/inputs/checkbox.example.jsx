import { CheckboxInput } from "$components/input.component";

export function CheckboxInputExample() {
	return (
		<div class="flex gap-x-4">
			<div class="flex items-center gap-x-2">
				<label for="checkbox-1">Checkbox 1</label>
				<CheckboxInput
					x-on:change={`console.log($event.target.id, $event.target.checked)`}
					name="checkbox-1"
					value="checkbox-1"
					id="checkbox-1"
				/>
			</div>
			<div class="flex items-center gap-x-2">
				<label for="checkbox-2">Checkbox 2</label>
				<CheckboxInput
					x-on:change={`console.log($event.target.id, $event.target.checked)`}
					name="checkbox-2"
					value="checkbox-2"
					id="checkbox-2"
				/>
			</div>
			<div class="flex items-center gap-x-2">
				<label for="checkbox-3">Checkbox 3</label>
				<CheckboxInput
					x-on:change={`console.log($event.target.id, $event.target.checked)`}
					name="checkbox-3"
					value="checkbox-3"
					id="checkbox-3"
				/>
			</div>
		</div>
	);
}
