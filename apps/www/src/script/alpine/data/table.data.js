/**
 * @typedef {Object} TableDataOutput
 * @property {import("$components/table.component").TableHeadColumnType[]} columns
 * @property {import("$components/table.component").TableBodyItemRowType[]} items
 * @property {import("$components/table.component").TableBodyItemRowType[]} filters
 * @property {import("$components/table.component").TableSortingOrderType} [order]
 * @property {import("$components/table.component").TableHeadColumnType["index"]} [currentSortIndex]
 * @property {(index: import("$components/table.component").TableHeadColumnType["index"]): void} setSortIndex
 * @property {() => import("$components/table.component").TableBodyItemRowType[]} sortItemsByIndex
 * @property {(type:import("$components/table.component"). TableFilterType, operator: import("$components/table.component").TableFilterOperatorType, index: string, value: string | number | (string | number)[]): void} filterByOperatorType
 */

/**
 * @typedef {Function} SortFunction
 * @param {string} a
 * @param {string} b
 * @param {import("$components/table.component").TableSortingOrderType} [order]
 * @returns {number}
 */

/**
 * @type {SortFunction} 
 */
function sortByString(a, b, order) {
	if (order === "ASC") {
		return a.toLocaleLowerCase().localeCompare(b.toLocaleLowerCase());
	}
	if (order === "DESC") {
		return b.toLocaleLowerCase().localeCompare(a.toLocaleLowerCase());
	}
	return 0;
}

/**
 * @type {SortFunction} 
 */
function sortByNumber(a, b, order) {
	if (order === "ASC") {
		return a - b;
	}
	if (order === "DESC") {
		return b - a;
	}
	return 0;
}

/**
 * @typedef {Function} FilterFunction
 * @param {string} index
 * @param {string | number | (string | number)[]} value
 * @param {unknown[]} items
 * @returns {unknown[]}
 */

/**
 * @type {FilterFunction}
 */
const filterByLike = (index, value, items) => {
	return items.filter((item) =>
		item[index].text.toLowerCase().includes(value.toLowerCase())
	);
};

/**
 * @type {FilterFunction}
 */
const filterByNotLike = (index, value, items) => {
	return items.filter(
		(item) => !item[index].text.toLowerCase().includes(value.toLowerCase())
	);
};

/**
 * @type {FilterFunction}
 */
const filterByEqual = (index, value, items) => {
	return items.filter((item) => Number(item[index].text) === value);
};

/**
 * @type {FilterFunction}
 */
const filterByNotEqual = (index, value, items) => {
	return items.filter((item) => Number(item[index].text) !== value);
};

/**
 * @type {FilterFunction}
 */
const filterByLesserThan = (index, value, items) => {
	return items.filter((item) => Number(item[index].text) < value);
};

/**
 * @type {FilterFunction}
 */
const filterByLesserThanOrEqual = (index, value, items) => {
	return items.filter((item) => Number(item[index].text) <= value);
};

/**
 * @type {FilterFunction}
 */
const filterByGreaterThan = (index, value, items) => {
	return items.filter((item) => Number(item[index].text) > value);
};

/**
 * @type {FilterFunction}
 */
const filterByGreaterThanOrEqual = (index, value, items) => {
	return items.filter((item) => Number(item[index].text) >= value);
};

/**
 * @type {FilterFunction}
 */
const filterByIn = (index, value, items) => {
	return items.filter((item) => value.includes(item[index].text));
};

/**
 * @type {FilterFunction}
 */
const filterByNotIn = (index, value, items) => {
	return items.filter((item) => value.includes(item[index].text));
};

/**
 * Table alpine data
 * @param {import("$components/table.component").TableHeadColumnType[]} columns
 * @param {import("$components/table.component").TableBodyItemRowType[]} items
 * @returns {import("alpinejs").AlpineComponent<TableDataOutput>}
 */
export function tableData(columns = [], items = []) {
	return {
		columns,
		items,
		order: "",
		currentSortIndex: "",
		setSortIndex(index) {
			if (this.currentSortIndex !== index) {
				this.order = "ASC";
				this.currentSortIndex = index;
			} else if (this.order === "ASC") {
				this.order = "DESC";
			} else if (this.order === "DESC") {
				this.order = "";
				this.currentSortIndex = "";
			} else {
				this.order = "ASC";
			}
		},
		sortItemsByIndex() {
			const column = this.columns.find(
				(column) => column.index === this.currentSortIndex
			);

			if (!column) {
				return this.items;
			}
			if (column.sort === "string") {
				return [...this.items].sort((a, b) =>
					sortByString(a[column.index].text, b[column.index].text, this.order)
				);
			}
			if (column.sort === "number") {
				return [...this.items].sort((a, b) =>
					sortByNumber(a[column.index].text, b[column.index].text, this.order)
				);
			}
		},
		filters: [],
		filterByOperatorType(type, operator, index, value) {
			/**
			 * @type {Map<TableFilterOperatorType,Function>}
			 */
			const filterOperatorFunctionMap = new Map([
				["Like", filterByLike],
				["Equal", filterByEqual],
				["LesserThan", filterByLesserThan],
				["GreaterThan", filterByGreaterThan],
				["LesserThanOrEqual", filterByLesserThanOrEqual],
				["GreaterThanOrEqual", filterByGreaterThanOrEqual],
				["In", filterByIn],
				["NotEqual", filterByNotEqual],
				["NotLike", filterByNotLike],
				["NotIn", filterByNotIn]
			]);
			const matchedFilterIndex = this.filters.findIndex(
				(filter) => filter.type === type
			);
			if (matchedFilterIndex > -1) {
				if (this.filters[matchedFilterIndex].value !== value) {
					this.filters[matchedFilterIndex].value = value;
					this.filters[matchedFilterIndex].operator = operator;
				}
			} else {
				this.filters.push({ type, operator, index, value });
			}
			if (!value || Number(value) < 0) {
				this.filters = this.filters.filter((filter) => filter.type !== type);
			}
			let filteredItems = items;
			this.filters.forEach((filter) => {
				if (filter.value) {
					filteredItems = filterOperatorFunctionMap.get(filter.operator)(
						filter.index,
						filter.value,
						[...filteredItems]
					);
				}
			});
			this.items = filteredItems;
		}
	};
}
