import { existsSync } from "fs";
import chalk from "chalk";
import ora from "ora";
import prompts from "prompts";
import { DEFAULT_APP_SCRIPT_DIRECTORY, DEFAULT_COMMON_DIRECTORY, DEFAULT_COMPONENTS_DIRECTORY, DEFAULT_TAILWIND_CONFIG_FILE, DEFAULT_TAILWIND_CSS_FILE } from "../../utils/config/constants";
import { Config, RawConfig, rawConfigSchema } from "../../utils/config/schema";
import { FileUtils } from "../../utils/file";
import { LoggerUtils } from "../../utils/logger/index";


export class InitConfig {
	constructor(
		private readonly cwd: string,
		private readonly defaultConfig: Config | null,
		private readonly skip: boolean,
		private readonly logger: LoggerUtils
	) {}

	public async setConfigFromPrompts() {
		// const styles = await getRegistryStyles();
		// const baseColors = await getRegistryBaseColors();
		const defaultOptions = {
			tailwindCss:
				this.defaultConfig?.tailwind.css ?? DEFAULT_TAILWIND_CSS_FILE,
			tailwindConfig:
				this.defaultConfig?.tailwind.config ??
				DEFAULT_TAILWIND_CONFIG_FILE,
			common:
				this.defaultConfig?.aliases["common"] ??
				DEFAULT_COMMON_DIRECTORY,
			components:
				this.defaultConfig?.aliases["components"] ??
				DEFAULT_COMPONENTS_DIRECTORY,
			scripts:
				this.defaultConfig?.aliases["scripts"] ??
				DEFAULT_APP_SCRIPT_DIRECTORY
		};

		const options = this.skip
			? defaultOptions
			: await prompts([
					// {
					// 	type: "select",
					// 	name: "style",
					// 	message: `Which ${this.highlight("style")} would you like to use?`,
					// 	choices: styles.map((style) => ({
					// 		title: style.label,
					// 		value: style.name
					// 	}))
					// },
					// {
					// 	type: "select",
					// 	name: "tailwindBaseColor",
					// 	message: `Which color would you like to use as ${this.highlight(
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
						message: `Where is your ${this.highlight(
							"global CSS"
						)} file?`,
						initial: defaultOptions.tailwindCss,
						validate: (value) => {
							if (existsSync(value)) {
								return true;
							}
							this.logger.error(
								`${value} does not exist. Please enter a valid path.`
							);
							return false;
						}
					},
					{
						type: "text",
						name: "tailwindConfig",
						message: `Where is your ${this.highlight(
							"tailwind.config.[cjs|js|ts]"
						)} located?`,
						initial: defaultOptions.tailwindConfig,
						validate: (value) => {
							if (existsSync(value)) {
								return true;
							}
							this.logger.info("");
							this.logger.error(
								`${value} does not exist. Please enter a valid path.`
							);
							this.logger.info("");
							return false;
						}
					},
					{
						type: "text",
						name: "common",
						message: `Configure the import alias for ${this.highlight(
							"common"
						)}:`,
						initial: defaultOptions.common
					},
					{
						type: "text",
						name: "components",
						message: `Configure the import alias for ${this.highlight(
							"components"
						)}:`,
						initial: defaultOptions.components
					},
					{
						type: "text",
						name: "scripts",
						message: `Configure the import alias for ${this.highlight(
							"scripts"
						)}:`,
						initial: defaultOptions.scripts
					}
			  ]);

		return rawConfigSchema.parse({
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
				components: options.components,
				common: options.common
			}
		});
	}

	public async confirmProceed() {
		if (!this.skip) {
			const { proceed } = await prompts({
				type: "confirm",
				name: "proceed",
				message: `Write configuration to ${this.highlight(
					"components.json"
				)}. Proceed?`,
				initial: true
			});

			if (!proceed) {
				process.exitCode = 0;
			}
		}
	}

	public async removeTailwindConfigCJS(config: RawConfig) {
		if (config.tailwind.config.endsWith(".cjs")) {
			this.logger.info(
				"Your tailwind.config.cjs has been renamed to tailwind.config.js."
			);
			const renamedTailwindConfigPath = config.tailwind.config.replace(
				".cjs",
				".js"
			);
			config.tailwind.config = renamedTailwindConfigPath;
		}

		this.logger.info("");
	}

	public async writeInComponentJSON(config: RawConfig) {
		const promptForConfigSpinner = ora(
			`Writing components.json...`
		).start();

		await FileUtils.writeInComponentJSON(this.cwd, config);

		promptForConfigSpinner.succeed("Successfully written components.json.");
	}

	private highlight(text: string) {
		return chalk.cyan(text);
	}
}