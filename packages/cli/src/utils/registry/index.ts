import { existsSync, promises as fs } from "fs";
import fetch from "node-fetch";
import path from "path";
import * as z from "zod";
import { Config } from "../get-config";
import { registryIndexSchema, registryItemSchema } from "./schema";


export const baseUrl =
	process.env.COMPONENTS_REGISTRY_URL ?? "https://www.astropine-ui.com";

export type RegistryItem = z.infer<typeof registryItemSchema>;

export async function getRegistryIndex() {
	try {
		const [result] = await fetchRegistry(["index.json"]);
		return registryIndexSchema.parse(result);
	} catch (error) {
		throw new Error(`Failed to fetch components from registry.`);
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

export async function resolveTree(
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
			const dependencies = await resolveTree(
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

export async function fetchTree(
	tree: z.infer<typeof registryIndexSchema>
) {
	try {
		const paths = tree.map((item) => `components/${item.name}.json`);
		const result = await fetchRegistry(paths);
		// return registryWithComponentSchema.parse(result);
		return result;
	} catch (error) {
		throw new Error(`Failed to fetch tree from registry.`);
	}
}

export async function fetchAlpineData() {
	try {
		const [result]: any[] = await fetchRegistry(["alpine.json"]);
		return result.data;
	} catch (error) {
		throw new Error(`Failed to fetch alpine data from registry.`);
	}
}

export async function getComponentTargetPath(
	config: Config,
	// item: Pick<z.infer<typeof registryItemWithContentSchema>, "type">,
	item: string,
	override?: string
) {
	// Allow overrides for all items but ui.
	// if (override && item.type !== "components:ui") {
	// 	return override;
	// }

	// const [parent, type] = item.type.split(":");
	// if (!(parent in config.resolvedPaths)) {
	// 	return null;
	// }

	return path.join(
		config.resolvedPaths["components"],
		item
	);
}

async function fetchRegistry(paths: string[]) {
	try {
		const results = await Promise.all(
			paths.map(async (path) => {
				const response = await fetch(`${baseUrl}/registry/${path}`);
				return await response.json();
			})
		);
		
		return results;
	} catch (error) {
		console.log(error);
		throw new Error(`Failed to fetch registry from ${baseUrl}.`);
	}
}

export async function transformObjectToDirectory(obj: any, rootPath: string) {
	return Object.entries(obj).map(async ([key, value]) => {
		const dirPath = path.join(rootPath, key);
		if (typeof value === "object") {
			if (!existsSync(dirPath)) {
				await fs.mkdir(dirPath);
			}
			await transformObjectToDirectory(value, dirPath);
		} else {
			await fs.writeFile(dirPath, String(value), "utf8");
		}
	});
}