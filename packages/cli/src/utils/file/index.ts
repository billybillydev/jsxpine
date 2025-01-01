import path from "path";
import { fileURLToPath } from "url";
import fs from "fs-extra";
import { JsonObject, PackageJson, TsConfigJson } from "type-fest";
import { detect } from "@antfu/ni";
import { handleError } from "../handle-error";


export class FileUtils {
	static getFilePath(filePath: string) {
		let distPath = fileURLToPath(new URL(`.`, import.meta.url));

		return path.resolve(distPath, filePath);
	}

	static getJson<T extends JsonObject>(path: string) {
		const jsonPath = this.getFilePath(path);

		return fs.readJSONSync(jsonPath) as T;
	}

	static async writeInComponentJSON(cwd: string, data: Object) {
		try {
			const targetPath = path.resolve(cwd, "components.json");

			// Write to file.
			await fs.writeFile(
				targetPath,
				JSON.stringify(data, null, 2),
				"utf8"
			);
		} catch (error) {
			handleError("An error occured when writing to components.json.");
		}
	}

	static findTsConfigFile(cwd: string) {
		const file = FileUtils.getJson<TsConfigJson>(
			path.resolve(cwd, "tsconfig.json")
		);

		if (!file) {
			throw new Error("No tsconfig.json found.");
		}

		return file;
	}

	static getPackageInfo() {
		return FileUtils.getJson<PackageJson>("../package.json");
	}

	static async getPackageManager(
		targetDir: string
	): Promise<"yarn" | "pnpm" | "bun" | "npm"> {
		const packageManager = await detect({
			programmatic: true,
			cwd: targetDir
		});

		if (packageManager === "yarn@berry") return "yarn";
		if (packageManager === "pnpm@6") return "pnpm";
		if (packageManager === "bun") return "bun";

		return packageManager ?? "npm";
	}
}