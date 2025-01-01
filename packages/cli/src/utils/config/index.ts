import { execa } from "execa";
import { existsSync } from "fs";
import { readFile } from "fs/promises";
import path from "path";
import { loadConfig } from "tsconfig-paths";
import { FileUtils } from "../file";
import { resolveImport } from "../resolve-imports";
import { Config, RawConfig, configSchema, rawConfigSchema } from "./schema";

export class ConfigUtils {
	static async getConfig(cwd: string) {
		const config = await this.getRawConfig(cwd);

		if (!config) {
			return null;
		}

		return await this.resolveConfigPaths(cwd, config);
	}

	static async getRawConfig(cwd: string): Promise<RawConfig | null> {
		try {
			const configPath = path.resolve(cwd, "components.json");
			const configResult = await readFile(configPath, {
				encoding: "utf8"
			}).catch((e) => null);

			// no predefined config exists
			if (!configResult) {
				return null;
			}
			const { resolvedPaths, ...config } = JSON.parse(
				configResult
			) as Config;

			return rawConfigSchema.parse(config);
		} catch (error) {
			throw new Error(
				`Invalid configuration found in ${cwd}/components.json.`
			);
		}
	}

	static async resolveConfigPaths(cwd: string, config: RawConfig) {
		const TSCONFIG_PATH = "tsconfig.json";
		if (!existsSync(TSCONFIG_PATH)) {
			const packageManager = await FileUtils.getPackageManager(cwd);
			await execa(
				packageManager === "npm" ? "npx" : packageManager,
				["astro", "sync"],
				{
					cwd
				}
			);
		}

		const tsconfigPath = path.resolve(cwd, TSCONFIG_PATH);
		const tsConfig = loadConfig(tsconfigPath);

		if (tsConfig.resultType === "failed") {
			throw new Error(
				`Failed to load tsconfig.json. Error: ${
					tsConfig.message ?? ""
				}`.trim()
			);
		}

		const jsScriptsPath = await resolveImport(
			config.aliases["scripts"],
			tsConfig
		);
		const alpinePath = await resolveImport(
			config.aliases["alpine"],
			tsConfig
		);
		const componentsPath = await resolveImport(
			config.aliases["components"],
			tsConfig
		);
		const commonPath = await resolveImport(
			config.aliases["common"],
			tsConfig
		);

		return configSchema.parse({
			...config,
			resolvedPaths: {
				tailwindConfig: path.resolve(cwd, config.tailwind.config),
				tailwindCss: path.resolve(cwd, config.tailwind.css),
				scripts: jsScriptsPath,
				alpine: alpinePath,
				components: componentsPath,
				common: commonPath
			}
		});
	}
}