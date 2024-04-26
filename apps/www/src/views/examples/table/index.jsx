import { raw } from "hono/html";

/**
 * @type {import("$components/table.component").TableHeadColumnType[]}
 */
export const columns = [
	{
		index: "name",
		label: "Name"
	},
	{
		index: "age",
		label: "Age"
	},
	{ index: "address", label: "Address" },
	{ index: "action", label: "Action" }
];

/**
 * @type {Array<import("$components/table.component").TableSelectFilterOperatorOptionType>}
 */
export const selectOptions = [
	{
		value: "",
		label: "All age"
	},
	{
		operator: "GreaterThan",
		value: 32,
		label: "age > 32"
	},
	{
		operator: "LesserThanOrEqual",
		value: 35,
		label: "age <= 35"
	}
];

/**
 * @type {Array<import("$components/table.component").TableHeadColumnType>}
 */
export const sortColumns = [
	{
		index: "name",
		label: "Name",
		sort: "string"
	},
	{
		index: "age",
		label: "Age",
		sort: "number"
	},
	{ index: "address", label: "Address" },
	{ index: "action", label: "Action" }
];

/**
 * @type {Array<import("$components/table.component").TableHeadColumnType>}
 */
export const sortAndFilterColumns = [
	{
		index: "name",
		label: "Name",
		sort: "string",
		filter: {
			type: "search",
			placeholder: "Type here to filter by name",
			operator: "Like"
		}
	},
	{
		index: "age",
		label: "Age",
		sort: "number",
		filter: {
			type: "select",
			placeholder: "Select age",
			operators: selectOptions
		}
	},
	{ index: "address", label: "Address" },
	{ index: "action", label: "Action" }
];

/**
 * @type {Array<import("$components/table.component").TableHeadColumnType>}
 */
export const filterColumns = [
	{
		index: "name",
		label: "Name",
		filter: {
			type: "search",
			placeholder: "Type here to filter by name",
			operator: "Like"
		}
	},
	{
		index: "age",
		label: "Age",
		filter: {
			type: "select",
			placeholder: "Select age",
			operators: selectOptions
		}
	},
	{ index: "address", label: "Address" },
	{ index: "action", label: "Action" }
];

/**
 * @type {import("$components/table.component").TableBodyItemRowType[]}
 */
export const items = [
	{
		name: { text: "Richard Hendricks" },
		age: { text: 30 },
		address: {
			component: raw(<AddressComponent text="Pied Piper HQ, Palo Alto" />)
		},
		action: {
			component: raw(<EditButtonComponent />)
		}
	},
	{
		name: { text: "Erlich Bachman" },
		age: { text: 40 },
		address: {
			component: raw(
				<AddressComponent text="5230 Penfield Ave, Woodland Hills" />
			)
		},
		action: {
			component: raw(<EditButtonComponent />)
		}
	},
	{
		name: { text: "Monica Hall" },
		age: { text: 35 },
		address: {
			component: raw(<AddressComponent text="2030 Stewart Drive, Sunnyvale" />)
		},
		action: {
			component: raw(<EditButtonComponent />)
		}
	},
	{
		name: { text: "Dinesh Chugtai" },
		age: { text: 28 },
		address: {
			component: raw(<AddressComponent text="Pied Piper HQ, Palo Alto" />)
		},
		action: {
			component: raw(<EditButtonComponent />)
		}
	},
	{
		name: { text: "Gilfoyle" },
		age: { text: 32 },
		address: {
			component: raw(<AddressComponent text="Pied Piper HQ, Palo Alto" />)
		},
		action: {
			component: raw(<EditButtonComponent />)
		}
	}
];

/**
 * @type {import("$common/props").JSXComponent<{ text: string }>}
 */
export function AddressComponent(props) {
	const { text } = props;
	return <p class="text-slate-600 italic">{text}</p>;
}

/**
 * @type {import("$common/props").JSXComponent<{ text: string }>}
 */
export function ButtonComponent(props) {
	const { text } = props;
	return (
		<button class="btn btn-info-outlined rounded py-1 px-2 text-center w-full">
			{text}
		</button>
	);
}

export function EditButtonComponent() {
	return <ButtonComponent text="Edit" />;
}
