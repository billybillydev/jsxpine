import { existsSync, promises as fs } from "fs";
import path from "path";
import fetch from "node-fetch";
import * as z from "zod";
import { Config } from "../config/schema";
import { BASE_URL } from "./constants";
import {
	registryAlpineSchema,
	registryIndexSchema,
	registryItemSchema,
	registryItemWithComponentSchema,
	registryWithComponentSchema
} from "./schema";

export type RegistryAlpine = z.infer<typeof registryAlpineSchema>;
export type RegistryItem = z.infer<typeof registryItemSchema>;
export type RegistryComponentItem = z.infer<
	typeof registryItemWithComponentSchema
>;

export class RegistryUtils {
	static async getRegistryIndex() {
		try {
			const [result] = await this.fetchRegistry(["index.json"]);
			return registryIndexSchema.parse(result);
		} catch (error) {
			throw new Error(`Failed to fetch components from registry.`);
		}
	}

	static async resolveTree(
		index: z.infer<typeof registryIndexSchema>,
		names: string[]
	) {
		const tree: z.infer<typeof registryIndexSchema> = [];

		for (const name of names) {
			const entry = index.find((entry) => entry.name === name);

			if (!entry) {
				continue;
			}

			tree.push(entry);

			if (entry.registryDependencies) {
				const dependencies = await this.resolveTree(
					index,
					entry.registryDependencies
				);
				tree.push(...dependencies);
			}
		}

		return tree.filter(
			(component, index, self) =>
				self.findIndex((c) => c.name === component.name) === index
		);
	}

	static async fetchTree(
		tree: z.infer<typeof registryIndexSchema>
	): Promise<RegistryComponentItem[]> {
		try {
			const paths = tree.map((item) => `components/${item.name}.json`);
			const result = await this.fetchRegistry(paths);
			return registryWithComponentSchema.parse(result);
		} catch (error) {
			throw new Error(`Failed to fetch tree from registry.`);
		}
	}

	static async fetchAlpineData() {
		try {
			const [result] = await this.fetchRegistry<RegistryAlpine>(["alpine.json"]);
			return result.data;
		} catch (error) {
			throw new Error(`Failed to fetch alpine data from registry.`);
		}
	}

	static async getComponentTargetPath(config: Config, item: string) {
		return path.join(config.resolvedPaths["components"], item);
	}

	static async fetchRegistry<T extends Object>(paths: string[]): Promise<T[]> {
		try {
			const results = await Promise.all(
				paths.map(async (path) => {
					const url = `${BASE_URL}/registry/${path}`;
					const res = await fetch(url);
					const json = await res.json();
					return json as T;
				})
			);

			return results;
		} catch (error) {
			console.log("In fetchRegistry : ", error);
			throw new Error(`Failed to fetch registry from ${BASE_URL}.`);
		}
	}

	static async transformObjectToDirectory(obj: any, rootPath: string) {
		return Object.entries(obj).map(async ([key, value]) => {
			const dirPath = path.join(rootPath, key);
			if (typeof value === "object") {
				if (!existsSync(dirPath)) {
					await fs.mkdir(dirPath);
				}
				await this.transformObjectToDirectory(value, dirPath);
			} else {
				await fs.writeFile(dirPath, String(value), "utf8");
			}
		});
	}
}

// export async function getRegistryStyles() {
// 	try {
// 		const [result] = await fetchRegistry(["styles/index.json"]);
// 		return stylesSchema.parse(result);
// 	} catch (error) {
// 		throw new Error(`Failed to fetch styles from registry.`);
// 	}
// }

// export async function getRegistryBaseColors() {
// 	return [
// 		{
// 			name: "slate",
// 			label: "Slate"
// 		},
// 		{
// 			name: "gray",
// 			label: "Gray"
// 		},
// 		{
// 			name: "zinc",
// 			label: "Zinc"
// 		},
// 		{
// 			name: "neutral",
// 			label: "Neutral"
// 		},
// 		{
// 			name: "stone",
// 			label: "Stone"
// 		}
// 	];
// }

// export async function getRegistryBaseColor(baseColor: string) {
// 	try {
// 		const [result] = await fetchRegistry([`colors/${baseColor}.json`]);
// 		return registryBaseColorSchema.parse(result);
// 	} catch (error) {
// 		throw new Error(`Failed to fetch base color from registry.`);
// 	}
// }
