// import {
//   TableBodyItemRowType,
//   TableFilterOperatorType,
//   TableFilterType,
//   TableHeadColumnType,
//   TableSortingOrderType,
// } from "$components/table/types";

// export type TableOutput = AlpineDataOutput<{
//   columns: TableHeadColumnType[];
//   items: TableBodyItemRowType[];
//   filters: TableBodyItemRowType[];
//   order?: TableSortingOrderType;
//   currentSortKey?: TableHeadColumnType["key"];
//   setSortKey(key: TableHeadColumnType["key"]): void;
//   sortItemsByKey(): TableBodyItemRowType[];
//   filterByOperatorType(
//     type: TableFilterType,
//     operator: TableFilterOperatorType,
//     key: string,
//     value: string | number | (string | number)[]
//   ): void;
// }>;

// function sortByString(
// 	a: string,
// 	b: string,
// 	order?: TableSortingOrderType
// ) {
// 	if (order === "ASC") {
// 		return a.toLocaleLowerCase().localeCompare(b.toLocaleLowerCase());
// 	}
// 	if (order === "DESC") {
// 		return b.toLocaleLowerCase().localeCompare(a.toLocaleLowerCase());
// 	}
// 	return 0;
// }
// function sortByNumber(
// 	a: number,
// 	b: number,
// 	order?: TableSortingOrderType
// ) {
// 	if (order === "ASC") {
// 		return a - b;
// 	}
// 	if (order === "DESC") {
// 		return b - a;
// 	}
// 	return 0;
// }


// const filterByLike = (key: string, value: string, items: unknown[]) => {
// 	return items.filter((item) =>
// 		item[key].text.toLowerCase().includes(value.toLowerCase())
// 	);
// };

// const filterByNotLike = (
// 	key: string,
// 	value: string,
// 	items: unknown[]
// ) => {
// 	return items.filter(
// 		(item) => !item[key].text.toLowerCase().includes(value.toLowerCase())
// 	);
// };

// const filterByEqual = (key: string, value: number, items: unknown[]) => {
// 	return items.filter((item) => Number(item[key].text) === value);
// };

// const filterByNotEqual = (
// 	key: string,
// 	value: number,
// 	items: unknown[]
// ) => {
// 	return items.filter((item) => Number(item[key].text) !== value);
// };

// const filterByLesserThan = (
// 	key: string,
// 	value: number,
// 	items: unknown[]
// ) => {
// 	return items.filter((item) => Number(item[key].text) < value);
// };

// const filterByLesserThanOrEqual = (
// 	key: string,
// 	value: number,
// 	items: unknown[]
// ) => {
// 	return items.filter((item) => Number(item[key].text) <= value);
// };

// const filterByGreaterThan = (
// 	key: string,
// 	value: number,
// 	items: unknown[]
// ) => {
// 	return items.filter((item) => Number(item[key].text) > value);
// };

// const filterByGreaterThanOrEqual = (
// 	key: string,
// 	value: number,
// 	items: unknown[]
// ) => {
// 	return items.filter((item) => Number(item[key].text) >= value);
// };

// const filterByIn = (
// 	key: string,
// 	values: (string | number)[],
// 	items: unknown[]
// ) => {
// 	return items.filter((item) => values.includes(item[key].text));
// };

// const filterByNotIn = (
// 	key: string,
// 	values: (string | number)[],
// 	items: unknown[]
// ) => {
// 	return items.filter((item) => values.includes(item[key].text));
// };


// export function tableData(
//   columns: TableHeadColumnType[] = [],
//   items: TableBodyItemRowType[] = []
// ): TableOutput {
//   return {
//     init() {},
//     columns,
//     items,
//     order: "",
//     currentSortKey: "",
//     setSortKey(key: TableHeadColumnType["key"]) {
//       if (this.currentSortKey !== key) {
//         this.order = "ASC";
//         this.currentSortKey = key;
//       } else if (this.order === "ASC") {
//         this.order = "DESC";
//       } else if (this.order === "DESC") {
//         this.order = "";
//         this.currentSortKey = "";
//       } else {
//         this.order = "ASC";
//       }
//     },
//     sortItemsByKey() {
//       const column = this.columns.find(
//         (column) => column.key === this.currentSortKey
//       );

//       if (!column) {
//         return this.items;
//       }
//       if (column.sort === "STRING") {
//         return [...this.items].sort((a, b) =>
//           sortByString(a[column.key].text, b[column.key].text, this.order)
//         );
//       }
//       if (column.sort === "NUMBER") {
//         return [...this.items].sort((a, b) =>
//           sortByNumber(a[column.key].text, b[column.key].text, this.order)
//         );
//       }
//     },
//     filters: [],
//     filterByOperatorType(
//       type: TableFilterType,
//       operator: TableFilterOperatorType,
//       key: string,
//       value: string | number | (string | number)[]
//     ) {
//       const filterOperatorFunctionMap = new Map<
//         TableFilterOperatorType,
//         Function
//       >([
//         ["Like", filterByLike],
//         ["Equal", filterByEqual],
//         ["LesserThan", filterByLesserThan],
//         ["GreaterThan", filterByGreaterThan],
//         ["LesserThanOrEqual", filterByLesserThanOrEqual],
//         ["GreaterThanOrEqual", filterByGreaterThanOrEqual],
//         ["In", filterByIn],
//         ["NotEqual", filterByNotEqual],
//         ["NotLike", filterByNotLike],
//         ["NotIn", filterByNotIn],
//       ]);
//       const matchedFilterIndex = this.filters.findIndex(
//         (filter) => filter.type === type
//       );
//       if (matchedFilterIndex > -1) {
//         if (this.filters[matchedFilterIndex].value !== value) {
//           this.filters[matchedFilterIndex].value = value;
//           this.filters[matchedFilterIndex].operator = operator;
//         }
//       } else {
//         this.filters.push({ type, operator, key, value });
//       }
//       if (!value || Number(value) < 0) {
//         this.filters = this.filters.filter((filter) => filter.type !== type);
//       }
//       let filteredItems = items;
//       this.filters.forEach((filter) => {
//         if (filter.value) {
//           filteredItems = filterOperatorFunctionMap.get(filter.operator)(
//             filter.key,
//             filter.value,
//             [...filteredItems]
//           );
//         }
//       });
//       this.items = filteredItems;
//     },
//   };
// }
