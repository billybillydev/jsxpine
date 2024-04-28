import { lstat, readdir } from "node:fs/promises";
import { join, parse } from "node:path";

/**
 * @typedef {Object} DirectoryContent
 * @type {{ [key: string]: string | DirectoryContent }}
 */

/**
 *
 * @param {string} dirPath
 * @returns {Promise<string | DirectoryContent>}
 */
export async function directoryToObject(dirPath) {
	const stats = await lstat(dirPath);
	if (stats.isDirectory()) {
		const items = await readdir(dirPath);
		/**
		 * @type {DirectoryContent}
		 */
		const result = {};

		for (const item of items) {
			const itemPath = join(dirPath, item);
			const itemFile = await lstat(itemPath);
			const { base, name } = parse(itemPath);
			const key = itemFile.isFile() ? base : name;
			result[key] = await directoryToObject(itemPath);
		}

		return result;
	} else {
		return await Bun.file(dirPath).text();
	}
}
