import { SelectField } from "$components/fields.component";

export function MultipleSelectInputExample() {
	/**
	 * @type {Array<import("$components/inputs.component").SelectOptionType>}
	 */
	const items = [
		{
			label: "Milk",
			value: "milk",
			disabled: false
		},
		{
			label: "Eggs",
			value: "eggs",
			disabled: false
		},
		{
			label: "Cheese",
			value: "cheese",
			disabled: false
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
			disabled: false
		}
	];

	return (
		<SelectField
			label="Select Field"
			id="select-field"
			name="select-field"
			placeholder="Select an item"
			x-on:change="console.log($event.target.value)"
			items={items}
			multiple="true"
		/>
	);
}
