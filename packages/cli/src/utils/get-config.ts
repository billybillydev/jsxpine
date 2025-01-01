import { existsSync } from "fs";
import { readFile } from "fs/promises";
import path from "path";
import { execa } from "execa";
import { loadConfig } from "tsconfig-paths";
import * as z from "zod";
import { getPackageManager } from "./get-package-manager";
import { resolveImport } from "./resolve-imports";


export const DEFAULT_STYLE = "default";
export const DEFAULT_COMPONENTS_DIRECTORY = "src/ui/components";
export const DEFAULT_ALPINEJS_FILE = "src/ui/scripts/alpine/index";
export const DEFAULT_APP_SCRIPT_DIRECTORY = "src/ui/scripts";
export const DEFAULT_TAILWIND_CSS_FILE = "src/styles/index.css";
export const DEFAULT_TAILWIND_CONFIG_FILE = "tailwind.config.js";
// export const DEFAULT_TAILWIND_BASE_COLOR = "slate";

export const rawConfigSchema = z
	.object({
		$schema: z.string().optional(),
		// style: z.string(),
		tailwind: z.object({
			config: z.string(),
			css: z.string()
			// baseColor: z.string()
			// cssVariables: z.boolean().default(true)
		}),
		aliases: z.object({
			components: z
				.string()
				.transform((v) => v.replace(/[\u{0080}-\u{FFFF}]/gu, "")),
			scripts: z
				.string()
				.transform((v) => v.replace(/[\u{0080}-\u{FFFF}]/gu, "")),
			alpine: z
				.string()
				.transform((v) => v.replace(/[\u{0080}-\u{FFFF}]/gu, ""))
		}),
		tsConfigAliases: z.optional(
			z.union([
				z.object({ global: z.string() }),
				z.object({
					components: z.string(),
					scripts: z.string(),
					alpine: z.string()
				})
			])
		)
	})
	.strict();

export type RawConfig = z.infer<typeof rawConfigSchema>;

export const configSchema = rawConfigSchema.extend({
	resolvedPaths: z.object({
		tailwindConfig: z.string(),
		tailwindCss: z.string(),
		scripts: z.string(),
		alpine: z.string(),
		components: z.string()
	})
});

export type Config = z.infer<typeof configSchema>;

export async function getConfig(cwd: string) {
	const config = await getRawConfig(cwd);

	if (!config) {
		return null;
	}

	return await resolveConfigPaths(cwd, config);
}

// export async function getAliases() {
// 	const SVELTE_CONFIG_PATH = path.resolve(process.cwd(), "svelte.config.js");
// 	const IMPORT_SVELTE_CONFIG_PATH = "file://" + SVELTE_CONFIG_PATH;

// 	const { default: svelteConfig } = await import(IMPORT_SVELTE_CONFIG_PATH);

// 	const aliases: Record<string, string> | undefined = svelteConfig.kit.alias;

// 	return aliases;
// }

export async function resolveConfigPaths(cwd: string, config: RawConfig) {
	const TSCONFIG_PATH = "tsconfig.json";
	if (!existsSync(TSCONFIG_PATH)) {
		const packageManager = await getPackageManager(cwd);
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
	const alpinePath = await resolveImport(config.aliases["alpine"], tsConfig);
	const componentsPath = await resolveImport(
		config.aliases["components"],
		tsConfig
	);

	return configSchema.parse({
		...config,
		resolvedPaths: {
			tailwindConfig: path.resolve(cwd, config.tailwind.config),
			tailwindCss: path.resolve(cwd, config.tailwind.css),
			scripts: jsScriptsPath,
			alpine: alpinePath,
			components: componentsPath
		}
	});
}

async function getRawConfig(cwd: string): Promise<RawConfig | null> {
	try {
		const configPath = path.resolve(cwd, "components.json");
		const configResult = await readFile(configPath, {
			encoding: "utf8"
		}).catch((e) => null);

		// no predefined config exists
		if (!configResult) {
			return null;
		}
		const { resolvedPaths, ...config } = JSON.parse(configResult);

		return rawConfigSchema.parse(config);
	} catch (error) {
		throw new Error(
			`Invalid configuration found in ${cwd}/components.json.`
		);
	}
}