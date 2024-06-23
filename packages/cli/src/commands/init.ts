import { existsSync, promises as fs } from "fs";
import path from "path";
import type { Config } from "../utils/get-config";
import chalk from "chalk";
import { Command } from "commander";
import { execa } from "execa";
import ora from "ora";
import prompts from "prompts";
import { DEFAULT_APP_SCRIPT_DIRECTORY, DEFAULT_COMPONENTS_DIRECTORY, DEFAULT_TAILWIND_CONFIG_FILE, DEFAULT_TAILWIND_CSS_FILE, getConfig, rawConfigSchema, resolveConfigPaths } from "../utils/get-config";
import { getPackageManager } from "../utils/get-package-manager";
import { handleError } from "../utils/handle-error";
import { logger } from "../utils/logger";
import { baseUrl, transformObjectToDirectory } from "../utils/registry";
import * as templates from "../utils/templates";


const PROJECT_DEPENDENCIES = [
	"@kitajs/html",
	"@kitajs/ts-html-plugin",
	"@iconify/utils",
	"@iconify-json/ri",
	"@alpinejs/collapse",
	"@alpinejs/focus",
	"alpinejs-manage",
	"laravel-mix",
	"tailwind",
	"clsx",
	"tailwindcss-mosiui-mini",
	"alpinejs"
] as const;

const PROJECT_DEV_DEPENDENCIES = [] as const;

export const init = new Command()
	.command("init")
	.description("Configure your Node.JS project.")
	.option("-y, --yes", "Skip confirmation prompt.")
	.option(
		"-c, --cwd <cwd>",
		"the working directory. defaults to the current directory.",
		process.cwd()
	)
	.action(async (options) => {
		const cwd = path.resolve(options.cwd);

		logger.warn(
			"This command assumes a Node.JS project with at least AlpineJS and Tailwind CSS."
		);
		logger.warn(
			"If you don't have these, follow the manual steps at https://jsxpine.com/docs/installation."
		);
		logger.warn("");

		if (!options.yes) {
			const { proceed } = await prompts([
				{
					type: "confirm",
					name: "proceed",
					message:
						"Running this command will install dependencies and overwrite your existing tailwind.config.[cjs|js|ts]. Proceed?",
					initial: true
				}
			]);

			if (!proceed) {
				process.exitCode = 0;
				return;
			}
		}

		try {
			// Ensure target directory exists.
			if (!existsSync(cwd)) {
				logger.error(
					`The path ${cwd} does not exist. Please try again.`
				);
				process.exitCode = 1;
				return;
			}

			// Read config.
			const existingConfig = await getConfig(cwd);
			const config = await promptForConfig(
				cwd,
				existingConfig,
				options.yes
			);

			await runInit(cwd, config);
			logger.info("");
			logger.info(
				`${chalk.green("Success!")} Project initialization completed.`
			);
			logger.info("");
			logger.info(
				"Don't forget to add the aliases you configured in your tsconfig.json !"
			);
			logger.info("");
		} catch (e) {
			handleError(e);
		}
	});

async function promptForConfig(
	cwd: string,
	defaultConfig: Config | null = null,
	skip = false
) {
	const highlight = (text: string) => chalk.cyan(text);
	// const styles = await getRegistryStyles();
	// const baseColors = await getRegistryBaseColors();

	const options = await prompts([
		// {
		// 	type: "select",
		// 	name: "style",
		// 	message: `Which ${highlight("style")} would you like to use?`,
		// 	choices: styles.map((style) => ({
		// 		title: style.label,
		// 		value: style.name
		// 	}))
		// },
		// {
		// 	type: "select",
		// 	name: "tailwindBaseColor",
		// 	message: `Which color would you like to use as ${highlight(
		// 		"base color"
		// 	)}?`,
		// 	choices: baseColors.map((color) => ({
		// 		title: color.label,
		// 		value: color.name
		// 	}))
		// },
		{
			type: "text",
			name: "tailwindCss",
			message: `Where is your ${highlight("global CSS")} file?`,
			initial: defaultConfig?.tailwind.css ?? DEFAULT_TAILWIND_CSS_FILE,
			validate: (value) => {
				if (existsSync(value)) {
					return true;
				}
				logger.error(
					`${value} does not exist. Please enter a valid path.`
				);
				return false;
			}
		},
		{
			type: "text",
			name: "tailwindConfig",
			message: `Where is your ${highlight(
				"tailwind.config.[cjs|js|ts]"
			)} located?`,
			initial:
				defaultConfig?.tailwind.config ?? DEFAULT_TAILWIND_CONFIG_FILE,
			validate: (value) => {
				if (existsSync(value)) {
					return true;
				}
				logger.info("");
				logger.error(
					`${value} does not exist. Please enter a valid path.`
				);
				logger.info("");
				return false;
			}
		},
		{
			type: "text",
			name: "components",
			message: `Configure the import alias for ${highlight(
				"components"
			)}:`,
			initial:
				defaultConfig?.aliases["components"] ??
				DEFAULT_COMPONENTS_DIRECTORY
		},
		{
			type: "text",
			name: "scripts",
			message: `Configure the import alias for ${highlight("scripts")}:`,
			initial:
				defaultConfig?.aliases["scripts"] ??
				DEFAULT_APP_SCRIPT_DIRECTORY
		}
	]);

	const config = rawConfigSchema.parse({
		$schema: "https://jsxpine.com/public/schema.json",
		// style: options.style,
		tailwind: {
			config: options.tailwindConfig,
			css: options.tailwindCss
			// baseColor: options.tailwindBaseColor
		},
		aliases: {
			scripts: options.scripts,
			alpine: options.scripts + "/alpine",
			components: options.components
		}
	});

	if (!skip) {
		const { proceed } = await prompts({
			type: "confirm",
			name: "proceed",
			message: `Write configuration to ${highlight(
				"components.json"
			)}. Proceed?`,
			initial: true
		});

		if (!proceed) {
			process.exitCode = 0;
		}
	}

	if (config.tailwind.config.endsWith(".cjs")) {
		logger.info(
			"Your tailwind.config.cjs has been renamed to tailwind.config.js."
		);
		const renamedTailwindConfigPath = config.tailwind.config.replace(
			".cjs",
			".js"
		);
		config.tailwind.config = renamedTailwindConfigPath;
	}

	// Write to file.
	logger.info("");
	const spinner = ora(`Writing components.json...`).start();
	const targetPath = path.resolve(cwd, "components.json");
	await fs.writeFile(targetPath, JSON.stringify(config, null, 2), "utf8");
	spinner.succeed();

	return await resolveConfigPaths(cwd, config);
}

async function runInit(cwd: string, config: Config) {
	const spinner = ora(`Initializing project...`)?.start();
	// Ensure all resolved paths directories exist.
	for (const [key, resolvedPath] of Object.entries(config.resolvedPaths)) {
		// Determine if the path is a file or directory.
		let dirname = path.extname(resolvedPath)
			? path.dirname(resolvedPath)
			: resolvedPath;
		if (!existsSync(dirname)) {
			await fs.mkdir(dirname, { recursive: true });
		}
		if (key === "components") {
			const commonDirName = dirname.replace("components", "common");
			if (!existsSync(commonDirName)) {
				await fs.mkdir(commonDirName, { recursive: true });
			}
			const commonRes = await fetch(baseUrl + "/registry/common.json");
			const common = await commonRes.json();
			await Promise.all(
				await transformObjectToDirectory(common, commonDirName)
			);
		}
		if (key === "alpine") {
			const alpineRes = await fetch(baseUrl + "/registry/alpine.json");
			const alpineDependencies = await alpineRes.json();
			for await (const directory of ["directive", "magic"]) {
				const alpineDependencyPath = path.join(dirname, directory);
				if (!existsSync(alpineDependencyPath)) {
					await fs.mkdir(alpineDependencyPath);
				}
				await Promise.all(
					await transformObjectToDirectory(
						alpineDependencies[directory],
						alpineDependencyPath
					)
				);
			}
		}
	}

	// Write app.ts script
	await fs.writeFile(
		`${config.resolvedPaths.scripts}/app.js`,
		templates.APP_SCRIPT,
		"utf8"
	);

	// Write tailwind config.
	await fs.writeFile(
		config.resolvedPaths.tailwindConfig,
		templates.TAILWIND_CONFIG,
		"utf8"
	);

	// Delete tailwind.config.cjs, if present
	const cjsConfig = config.resolvedPaths.tailwindConfig.replace(
		".js",
		".cjs"
	);
	await fs.unlink(cjsConfig).catch((e) => e); // throws when it DNE

	// Write to global css file
	await fs.writeFile(
		config.resolvedPaths.tailwindCss,
		templates.STYLES,
		"utf8"
	);

	// Write alpinejs file.
	await fs.writeFile(
		`${config.resolvedPaths.alpine}/index.js`,
		templates.ALPINE_JS,
		"utf8"
	);

	spinner?.succeed();

	// Install dependencies.
	const dependenciesSpinner = ora(`Installing dependencies...`)?.start();
	const packageManager = await getPackageManager(cwd);

	await execa(
		packageManager,
		[packageManager === "npm" ? "install" : "add", ...PROJECT_DEPENDENCIES],
		{
			cwd
		}
	);
	await execa(
		packageManager,
		[
			packageManager === "npm" ? "install" : "add",
			"--dev",
			...PROJECT_DEV_DEPENDENCIES
		],
		{
			cwd
		}
	);
	dependenciesSpinner?.succeed();
}