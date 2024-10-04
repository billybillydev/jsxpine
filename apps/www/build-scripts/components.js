import { existsSync, mkdirSync } from "fs";
import { join } from "path";

import { components } from "$registry/components";
import { directoryToObject } from "./utils";

// ----------------------------------------------------------------------------
// Build registry/components/[name].json.
// ----------------------------------------------------------------------------
/**
 *
 * @param {string} dirPath
 */
export async function buildComponentsRegistry(dirPath) {
	const componentRegistryPath = join(dirPath, "components");
	// Create directory if it doesn't exist.
	if (!existsSync(componentRegistryPath)) {
		mkdirSync(componentRegistryPath, { recursive: true });
	}
	await Bun.write(
		join(dirPath, "index.json"),
		JSON.stringify(components, null, 2)
	);
	for (const component of components) {
		const sourceComponentPath = join(
			process.cwd(),
			"src/components",
			`${component.name}.component.jsx`
		);
		const result = {
			...component,
			component: await directoryToObject(sourceComponentPath)
		};

		await Bun.write(
			join(componentRegistryPath, `${component.name}.json`),
			JSON.stringify(result, null, 2)
		);
	}
}
