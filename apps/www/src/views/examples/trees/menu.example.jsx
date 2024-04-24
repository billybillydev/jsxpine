import { Button } from "$components/buttons.component";
import { Icon } from "$components/icon.component";
import { MenuTree } from "$components/trees.component";

export function MenuTreeExample() {
	/**
	 * @type {import("$components/trees.component").TreeType}
	 */
	const root = {
		id: "root",
		children: [
			{
				id: "tree-1",
				label: "Tree 1",
				parent: "root",
				children: [
					{
						id: "tree-1-1",
						label: "Tree 1-1",
						parent: "tree-1",
						href: "#"
					},
					{
						id: "tree-1-2",
						label: "Tree 1-2",
						parent: "tree-1",
						children: [
							{
								id: "tree-1-2-1",
								label: "Tree 1-2-2",
								parent: "tree-1-2",
								href: "#"
							},
							{
								id: "tree-1-2-2",
								label: "Tree 1-2-2",
								parent: "tree-1-2",
								href: "#"
							},
							{
								id: "tree-1-2-3",
								label: "Tree 1-2-3",
								parent: "tree-1-2",
								href: "#"
							}
						]
					}
				]
			},
			{
				id: "tree-2",
				label: "Tree 2",
				parent: "root",
				children: [
					{
						id: "tree-2-1",
						label: "Tree 2-1",
						parent: "tree-2",
						href: "#"
					},
					{
						id: "tree-2-2",
						label: "Tree 2-2",
						parent: "tree-2",
						href: "#"
					},
					{
						id: "tree-2-3",
						label: "Tree 2-3",
						parent: "tree-2",
						href: "#"
					},
					{
						id: "tree-2-4",
						label: "Tree 2-4",
						parent: "tree-2",
						href: "#"
					}
				]
			},
			{
				id: "tree-3",
				label: "Tree 3",
				parent: "root",
				href: "#"
			}
		]
	};

	return (
		<MenuTree
			root={root}
			class="bg-white rounded-lg border w-full [&>button]:p-4"
		>
			<template x-if="selectedItem.parent">
				<div class="relative flex items-center justify-center p-4">
					<Button
						class="absolute top-1/2 -translate-y-1/2 left-4"
						text="Back"
						x-on:click="goToParent(selectedItem.parent)"
					/>
					<span x-text="selectedItem.label"></span>
				</div>
			</template>
			<nav class="divide-y-2 opacity-100">
				<template x-for="menu in selectedItem.children">
					<section class="hover:bg-slate-100">
						<button
							class="w-full cursor-default p-4 flex items-center justify-between"
							x-bind:class="{ 'cursor-pointer': menu.children }"
							x-on:click="menu.children && selectItem(menu)"
							x-show="menu.children"
						>
							<span x-text="menu.label"></span>
							<template x-if="menu.children">
								<Icon name="arrow-right-s-line" />
							</template>
						</button>
						<div class="p-4" x-show="!menu.children">
							<a class="text-center hover:underline" x-bind:href="menu.href">
								<span x-text="menu.label"></span>
							</a>
						</div>
					</section>
				</template>
			</nav>
		</MenuTree>
	);
}
