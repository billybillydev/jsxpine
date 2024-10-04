import { directoryToObject } from "build-scripts/utils";
import { existsSync, mkdirSync, writeFileSync } from "fs";
import path from "path";

/**
 * 
 * @param {string[]} types 
 * @param {string} directoryPath 
 * @returns {Promise<import("build-scripts/utils").DirectoryContent>}
 */
async function buildDependencies(types, directoryPath) {
	/**
	 * @type {import("build-scripts/utils").DirectoryContent}
	 */
	const alpineDependencies = {};
	for await (const dependency of types) {
		const pathDependency = path.join(directoryPath, dependency);
		if (!existsSync(pathDependency)) {
			throw new Error(`Dependency ${dependency} does not exist`);
		}
		
		alpineDependencies[dependency] = await directoryToObject(pathDependency);
	}
	return alpineDependencies;
}

/**
 * 
 * @param {string} dirPath 
 */
export async function buildAlpineRegistry(dirPath) {
	const alpineFolderPath = path.resolve(process.cwd(), `src/scripts/alpine`);
	const payload = await buildDependencies(["data", "directive", "magic"], alpineFolderPath);
	if (!existsSync(dirPath)) {
		mkdirSync(dirPath);
	}
	await Bun.write(
		path.join(dirPath, `alpine.json`),
		JSON.stringify(payload, null, 2),
	);
}
