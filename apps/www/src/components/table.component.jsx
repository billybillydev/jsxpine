import { Icon } from "./icon.component";
import { TextInput } from "./input.component";
import { Select } from "./select.component";
import clsx from "clsx";

/**
 * @typedef {"ASC" | "DESC"} TableSortingOrderType
 */

/**
 * @typedef {"string" | "number"} TableSortingType
 */

/**
 * @typedef {"search" | "select" | "multiple-select"} TableFilterType
 */

/**
 * @typedef { "Like" | "Equal" | "LesserThan" | "LesserThanOrEqual" | "GreaterThan" | "GreaterThanOrEqual" | "In" | "NotEqual" | "NotLike" | "NotIn" } TableFilterOperatorType
 */

/**
 * @typedef {Object} TableSearchFilterType
 * @property {"search"} type
 * @property {TableFilterOperatorType} operator
 * @property {string} [placeholder]
 */

/**
 * @typedef {Object} TableSelectFilterOperatorOptionType
 * @property {string} label
 * @property {string | number} value
 * @property {TableFilterOperatorType} [operator]
 */

/**
 * @typedef {Object} TableSelectFilterType
 * @property {"select" | "multiple-select"} type
 * @property {string} [placeholder]
 * @property {TableSelectFilterOperatorOptionType[]} operators
 */

/**
 * @typedef {Object} TableHeadColumnType
 * @property {string} index
 * @property {string} [label]
 * @property {TableSortingType} [sort]
 * @property {TableSearchFilterType | TableSelectFilterType} [filter]
 */

/**
 * @typedef {Object} TableBodyCellContentTextType
 * @property {string | number} text
 */

/**
 * @typedef {Object} TableBodyCellContentComponentType
 * @property {string} component
 */

/**
 * @typedef TableBodyCellType
 * @type {TableBodyCellContentTextType | TableBodyCellContentComponentType}
 */

/**
 * @typedef {Object} TableBodyItemRowType
 * @type {Record<string, TableBodyCellType>}
 */

/**
 * @typedef {Object} TableSearchFilterProps
 * @type {{ index: string, operator: TableFilterOperatorType } & import("./input.component").InputProps}
 */

/**
 * @typedef {Object} TableSelectFilterProps
 * @type {{ index: string, items: TableSelectFilterOperatorOptionType[] } & Omit<import("./select.component").SelectProps, "items">}
 */

/**
 * @typedef {Object} TableHeadProps
 * @type {{ columns: TableHeadColumnType[] } & import("../common/props").HTMLTagWithChildren}
 */

/**
 * @typedef {Object} TableBodyProps
 * @type {{ items?: unknown[] } & import("../common/props").HTMLTagWithChildren}
 */

/**
 * @typedef {Object} TableProps
 * @type {{ columns?: TableHeadColumnType[], items?: unknown[], theadClass?: string, tbodyClass?: string } & import("../common/props").HTMLTagWithChildren}
 */

/**
 * Search Input Filter Table component props
 * @type {import("../common/props").JSXComponent<TableSearchFilterProps>}
 */
export function SearchInputFilterTable(props) {
	const {
		index,
		operator,
		placeholder = "Type here to filter table",
		id = "search-filter",
		name = "search-filter",
		class: className
	} = props;
	return (
		<div class="w-full min-w-xs mx-auto">
			<TextInput
				x-on:input={`filterByOperatorType("search", "${operator}", "${index}", $event.target.value)`}
				placeholder={placeholder}
				id={id}
				name={name}
				class={clsx(
					"flex w-full h-10 px-3 py-2 text-sm border rounded-md",
					className
				)}
			/>
		</div>
	);
}

/**
 * Select Filter Table component props
 * @type {import("../common/props").JSXComponent<TableSelectFilterProps>}
 */
export function SelectFilterTable(props) {
	const {
		index,
		placeholder = "Select item",
		id = "select-filter",
		name = "select-filter",
		items,
		class: className
	} = props;
	return (
		<div class="w-full min-w-xs mx-auto">
			<Select
				x-on:select={`filterByOperatorType("select", event.detail.operator, "${index}", event.detail.value)`}
				class={clsx(
					"flex w-full h-10 px-3 py-2 text-sm border rounded-md",
					className
				)}
				placeholder={placeholder}
				id={id}
				name={name}
				items={items}
			/>
		</div>
	);
}

/**
 * Table Head component props
 * @type {import("../common/props").JSXComponent<TableHeadProps>}
 */
export function TableHead(props) {
	const { class: className, columns, ...restProps } = props;
	return (
		<thead>
			<tr x-ref="thead" class={clsx("border-b", className)}>
				<template x-for="column in columns">
					<th
						x-on:click={`column.sort && setSortIndex(column.index)`}
						class="px-3 py-1 text-xs font-medium"
					>
						<div class="flex items-center justify-between gap-x-2">
							<span x-text="column.label" class="uppercase"></span>
							<template x-if="column.sort">
								<div class="flex flex-col">
									<Icon
										name="arrow-up-s-fill"
										size={5}
										fill="currentColor"
										x-bind:class="order === 'DESC' && column.index === currentSortIndex ? 'text-danger' : 'text-foreground'"
										class="translate-y-2"
									/>
									<Icon
										name="arrow-down-s-fill"
										size={5}
										fill="currentColor"
										x-bind:class="order === 'ASC' && column.index === currentSortIndex ? 'text-danger' : 'text-foreground'"
										class="mb-2"
									/>
								</div>
							</template>
						</div>
					</th>
				</template>
			</tr>
			{columns.some((column) => column.filter) ? (
				<tr class={clsx("border-b", className)}>
					{columns.map((column) => {
                        switch (column.filter?.type) {
                            case "search":
								return (
									<td class="p-1">
										<SearchInputFilterTable
											placeholder={column.filter.placeholder}
											operator={column.filter.operator}
											index={column.index}
											class="w-full"
										/>
									</td>
								);

							case "select":
								return (
									<td class="p-1">
										<SelectFilterTable
											placeholder={column.filter.placeholder}
											items={column.filter.operators}
											index={column.index}
											class="w-full"
										/>
									</td>
								);

							default:
								return <td class="p-1" />;
						}
					})}
				</tr>
			) : null}
		</thead>
	);
}

/**
 * Table Body component props
 * @type {import("../common/props").JSXComponent<TableBodyProps>}
 */
export function TableBody(props) {
	const { class: className, ...restProps } = props;
	return (
		<tbody class={clsx("divide-y divide-base-light", className)}>
			<template x-for="item in sortItemsByIndex()">
				<tr class="">
					<template x-for="column in columns">
						<template x-if="item[column.index]">
							<td class="px-5 py-4 text-sm whitespace-nowrap">
								<template x-if="item[column.index].text">
									<span x-text="item[column.index].text"></span>
								</template>
								<template x-if="item[column.index].component">
									<div x-html="item[column.index].component"></div>
								</template>
							</td>
						</template>
					</template>
				</tr>
			</template>
			<template x-if="!items.length">
				<tr class="shrink">
					<td colspan="100%" class="text-center p-4">
						<p>No data to display</p>
					</td>
				</tr>
			</template>
		</tbody>
	);
}

/**
 * Table component props
 * @type {import("../common/props").JSXComponent<TableProps>}
 */
export function Table(props) {
	const {
		children,
		class: className,
		columns,
		items,
		theadClass,
		tbodyClass,
		...restProps
	} = props;

	return (
		<div class={clsx("divide-y divide-base-light", className)}>
			<table
				x-data={`table(${JSON.stringify(columns)}, ${JSON.stringify(items)})`}
				class="min-w-full"
                {...restProps}
			>
				{children ?? (
					<>
						{columns ? (
							<TableHead columns={columns} class={theadClass} />
						) : null}
						{items ? <TableBody class={tbodyClass} /> : null}
					</>
				)}
			</table>
		</div>
	);
}
