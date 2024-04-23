import { Select } from "$components/select.component";

export function DefaultSelectExample() {
	/**
	 * @type {import("$components/inputs.component").SelectOptionType[]}
	 */
	const items = [
		{
			label: "Milk",
			value: "milk",
			disabled: true
		},
		{
			label: "Eggs",
			value: "eggs",
			disabled: false
		},
		{
			label: "Cheese",
			value: "cheese",
			disabled: true
		},
		{
			label: "Bread",
			value: "bread",
			disabled: false
		},
		{
			label: "Apples",
			value: "apples",
			disabled: false
		},
		{
			label: "Bananas",
			value: "bananas",
			disabled: false
		},
		{
			label: "Yogurt",
			value: "yogurt",
			disabled: false
		},
		{
			label: "Sugar",
			value: "sugar",
			disabled: false
		},
		{
			label: "Salt",
			value: "salt",
			disabled: false
		},
		{
			label: "Coffee",
			value: "coffee",
			disabled: false
		},
		{
			label: "Tea",
			value: "tea",
			disabled: true
		}
	];
	return (
		<Select
			id="dropdown-select"
			name="dropdown-select"
			items={items}
			placeholder="Select an item"
			class="w-64 border rounded-md shadow-sm border-neutral-200/70"
			x-on:select="console.log($event.detail)"
		/>
	);
}
