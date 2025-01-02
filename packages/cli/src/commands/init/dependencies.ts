import { existsSync, promises as fs } from "fs";
import path from "path";
import { execa } from "execa";
import ora from "ora";
import prompts from "prompts";
import * as templates from "../../templates";
import { Config } from "../../utils/config/schema";
import { FileUtils } from "../../utils/file";
import { handleError } from "../../utils/handle-error";
import { LoggerUtils } from "../../utils/logger/index";
import { BASE_URL } from "../../utils/registry/constants";
import { RegistryUtils } from "../../utils/registry";

export class InitDependencies {
	private readonly DEPENDENCIES = [
		"@kitajs/html",
		"@iconify/utils",
		"@iconify-json/ri",
		"@alpinejs/collapse",
		"@alpinejs/focus",
		"alpinejs-manage",
		"tailwindcss",
		"clsx",
		"tailwindcss-mosiui-mini",
		"alpinejs"
	] as const;

	private readonly DEV_DEPENDENCIES = [
		"@types/alpinejs",
		"@kitajs/ts-html-plugin",
		"esbuild"
	] as const;

	private readonly cwd!: string;
	private readonly config!: Config;
	private readonly skip!: boolean;
	private readonly logger!: LoggerUtils;

	private isAliasPathUsed!: boolean;

	constructor(
		cwd: string,
		config: Config,
		skip: boolean = false,
		logger: LoggerUtils
	) {
		this.cwd = cwd;
		this.config = config;
		this.skip = skip;
		this.logger = logger;
	}

	/**
	 * Prompts the user whether to use the alias path from the tsconfig file for
	 * component and script imports.
	 */
	public async askToUseAliasPath() {
		const option = this.skip
			? { isAliasPathUsed: true }
			: await prompts({
					type: "confirm",
					name: "isAliasPathUsed",
					message: `Do you want to use alias path from tsconfig file for component and script imports ?`,
					initial: true
			  });

		this.isAliasPathUsed = option.isAliasPathUsed;
	}

	/**
	 * Initialize a new project in runInit() by doing the following steps:
	 * - Ensure that all resolved paths directories exist, if not, create them.
	 */
	public async initialize() {
		const spinner = ora(`Initializing project...`)?.start();

		// Ensure all resolved paths directories exist.
		await this.ensureDirectoriesExist(this.config.resolvedPaths);

		// Create the necessary files.
		await this.createRegistryFiles(this.config, this.isAliasPathUsed);

		spinner?.succeed("Project initialized. Installation step will start.");
	}

	/**
	 * Installs the dependencies specified in PROJECT_DEPENDENCIES and
	 * PROJECT_DEV_DEPENDENCIES with the package manager specified in the
	 * cwd directory.
	 */
	public async install() {
		await this.installDependencies();

		await this.setKitajsHtmlInTsConfig();

		await this.writeGlobalDTSFile();

		await this.writeAlpineDTSFile();
	}

	/**
	 * Ensures that all specified directories in the config are created.
	 *
	 * @param {Config["resolvedPaths"]} resolvedPaths - The resolved paths object containing by config.
	 *
	 * Iterates over the resolved paths in the provided configuration and
	 * creates any directories that do not exist. If the path is a file,
	 * it creates the parent directory instead. Additionally, for the
	 * components and alpine paths, it fetches and transforms specific
	 * registry data into the corresponding directories.
	 *
	 * - For the "components" path, it also ensures that a "common"
	 *   directory exists and populates it with common registry data.
	 *
	 * - For the "alpine" path, it creates "directive" and "magic"
	 *   subdirectories and fills them with alpine registry data.
	 */
	private async ensureDirectoriesExist(
		resolvedPaths: Config["resolvedPaths"]
	) {
		for (const [key, resolvedPath] of Object.entries(resolvedPaths)) {
			// Determine if the path is a file or directory.
			let dirname = path.extname(resolvedPath)
				? path.dirname(resolvedPath)
				: resolvedPath;
			if (!existsSync(dirname)) {
				await fs.mkdir(dirname, { recursive: true });
			}
			if (key === "common") {
				const commonRes = await fetch(
					BASE_URL + "/registry/common.json"
				);
				const common = await commonRes.json();
				await Promise.all(
					await RegistryUtils.transformObjectToDirectory(common, dirname)
				);
			}

			if (key === "alpine") {
				const alpineRes = await fetch(
					BASE_URL + "/registry/alpine.json"
				);
				const alpineDependencies = await alpineRes.json();
				for await (const directory of ["directive", "magic"]) {
					const alpineDependencyPath = path.join(dirname, directory);
					if (!existsSync(alpineDependencyPath)) {
						await fs.mkdir(alpineDependencyPath);
					}
					await Promise.all(
						await RegistryUtils.transformObjectToDirectory(
							alpineDependencies[directory],
							alpineDependencyPath
						)
					);
				}
			}
		}
	}

	/**
	 * Writes the necessary files for the project registry.
	 *
	 * @param {Config} config - The configuration object.
	 * @param {boolean} [isAliasPathUsed] - Whether the alias path is used in the tsconfig.
	 *
	 * Writes the following files:
	 * - `app.ts` script in the scripts directory.
	 * - tailwind config file in the tailwind config path.
	 * - `index.js` file in the alpine directory, which sets the path to alpinejs.
	 *   If `isAliasPathUsed` is true, it uses the tsconfig alias path, otherwise it uses
	 *   the `aliases.alpine` path in the config.
	 */
	private async createRegistryFiles(config: Config, isAliasPathUsed = false) {
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

		let alpinePath = config.aliases.alpine;

		if (isAliasPathUsed && !config.tsConfigAliases) {
			handleError(
				"No tsconfig aliases found. Check your tsconfig.json if paths are properly set."
			);
		}

		if (isAliasPathUsed && config.tsConfigAliases) {
			if ("global" in config.tsConfigAliases) {
				alpinePath = `${config.tsConfigAliases.global}/scripts/alpine`;
			} else if ("alpine" in config.tsConfigAliases) {
				alpinePath = config.tsConfigAliases.alpine;
			}
		}

		// Write alpinejs file.
		await fs.writeFile(
			`${config.resolvedPaths.alpine}/index.js`,
			templates.setAlpinejsPath(alpinePath),
			"utf8"
		);
	}

	private async installDependencies() {
		const dependenciesSpinner = ora(`Installing dependencies...`)?.start();
		const packageManager = await FileUtils.getPackageManager(this.cwd);

		if (this.DEPENDENCIES.length) {
			await execa(
				packageManager,
				[
					packageManager === "npm" ? "install" : "add",
					...this.DEPENDENCIES
				],
				{
					cwd: this.cwd
				}
			);
		}

		if (this.DEV_DEPENDENCIES.length) {
			await execa(
				packageManager,
				[
					packageManager === "npm" ? "install" : "add",
					"-D",
					...this.DEV_DEPENDENCIES
				],
				{
					cwd: this.cwd
				}
			);
		}

		dependenciesSpinner?.succeed("Dependencies installed successfully.");
	}

	/**
	 * Need to set up kitajs-html in tsconfig.json to enable JSX support
	 */
	private async setKitajsHtmlInTsConfig() {
		const kitajsHTMLSettingUpSpinner = ora(
			"Setting up kitajs-html in tsconfig.json..."
		)?.start();

		const tsConfigFile = FileUtils.findTsConfigFile(this.cwd);

		if (!tsConfigFile.compilerOptions) {
			tsConfigFile.compilerOptions = {};
		}

		const types = tsConfigFile.compilerOptions.types ?? [];
		if (!types.includes("@kitajs/html/htmx.d.ts")) {
			types.push("@kitajs/html/htmx.d.ts");
		}

		if (!types.includes("@kitajs/html/alpine.d.ts")) {
			types.push("@kitajs/html/alpine.d.ts");
		}

		tsConfigFile.compilerOptions = {
			...tsConfigFile.compilerOptions,
			target: "esnext",
			lib: ["ESNext", "DOM"],
			module: "esnext",
			moduleResolution: "bundler",
			jsx: "react-jsx",
			jsxImportSource: "@kitajs/html",
			moduleDetection: "force",
			strict: true,
			allowJs: true,
			checkJs: true,
			types
		};

		await fs.writeFile(
			path.resolve(this.cwd, "tsconfig.json"),
			JSON.stringify(tsConfigFile, null, 2),
			"utf8"
		);

		kitajsHTMLSettingUpSpinner?.succeed("kitajs-html set up successfully.");
	}

	private async writeGlobalDTSFile() {
		const globalDTSFileSpinner = ora("Add global.d.ts file...")?.start();

		await fs.writeFile(
			`${this.cwd}/global.d.ts`,
			templates.globalDTSFile,
			"utf8"
		);

		globalDTSFileSpinner?.succeed("Added global.d.ts file successfully.");
	}

	private async writeAlpineDTSFile() {
		const alpineDTSFileSpinner = ora("Add alpine.d.ts file...")?.start();

		await fs.writeFile(
			`${this.cwd}/alpine.d.ts`,
			templates.alpineDTSFile,
			"utf8"
		);

		alpineDTSFileSpinner?.succeed("Added alpine.d.ts file successfully.");
	}
}
