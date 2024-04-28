import { existsSync, mkdirSync, writeFileSync } from "fs";
import path from "path";
import { directoryToObject } from "./utils";

/**
 * 
 * @param {string} dirPath 
 */
export async function buildCommonRegistry(dirPath) {
	// Create directory if it doesn't exist.
	if (!existsSync(dirPath)) {
		mkdirSync(dirPath, { recursive: true });
	}

	const sourceCommonPath = path.join(
		process.cwd(),
		"src/common",
	);
	const result = await directoryToObject(sourceCommonPath);

	await Bun.write(
		path.join(dirPath, `common.json`),
		JSON.stringify(result, null, 2),
	);
}