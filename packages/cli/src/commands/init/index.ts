import { existsSync } from "fs";
import path from "path";
import chalk from "chalk";
import { Command } from "commander";
import prompts from "prompts";
import { ConfigUtils } from "../../utils/config";
import { Config } from "../../utils/config/schema";
import { FileUtils } from "../../utils/file";
import { handleError } from "../../utils/handle-error";
import { LoggerUtils } from "../../utils/logger/index";
import { InitConfig } from "./config";
import { InitDependencies } from "./dependencies";
import { InitPathAlias } from "./path-alias";


type InitOptions = {
	yes?: boolean;
	cwd?: string;
};

class InitCommand {
	constructor(
		private readonly options: InitOptions,
		private readonly logger: LoggerUtils
	) {}

	public static createCommand(): Command {
		return new Command()
			.command("init")
			.description(
				"Configure and initialize your Node.JS project with dependencies and tooling required to develop with JSXPine."
			)
			.option("-y, --yes", "Skip confirmation prompt.")
			.option("-c, --cwd <cwd>", "Working directory", process.cwd())
			.action(async (options: InitOptions) => {
				const initCommand = new InitCommand(options, new LoggerUtils());
				await initCommand.execute();
			});
	}

	public async execute(): Promise<void> {
		const cwd = path.resolve(this.options.cwd || process.cwd());

		this.logger.warningMessage(
			"This command assumes a Node.JS project with at least AlpineJS and Tailwind CSS.",
			"If you don't have these, follow the manual steps at https://jsxpine.com/core/installation."
		);

		try {
			await this.confirmProceed(this.options.yes);

			if (!existsSync(cwd)) {
				this.logger.error(
					`The path ${cwd} does not exist. Please try again.`
				);
				process.exitCode = 1;
				return;
			}

			const existingConfig = await ConfigUtils.getConfig(cwd);
			const config = await this.promptForConfig(
				cwd,
				existingConfig,
				this.options.yes
			);

			const tsConfigPathAliasResult = await this.setTsConfigPathAlias(
				cwd,
				config,
				this.options.yes
			);

			await this.runInit(cwd, config, this.options.yes);

			this.logger.prettifyMessage(
				`${chalk.green("Success!")} Project completed.`
			);

			this.recommendedScripts(cwd, config);

			if (!tsConfigPathAliasResult) {
				this.logger.info(
					"Don't forget to add the aliases you configured in your tsconfig.json!"
				);
				this.logger.info("");
			}
		} catch (e) {
			handleError(e);
		}
	}

	/**
	 * Asks the user if they want to proceed with running the command.
	 * If --yes is not specified, this function will prompt the user to confirm.
	 * If the user does not want to proceed, this function will exit with a 0 exit code.
	 *
	 * @param {boolean} [yesOption = false] - If true, it will not prompt the user.
	 * @returns {Promise<void>} - A promise that resolves when the user confirms
	 *   or when --yes is specified.
	 */
	private async confirmProceed(yesOption: boolean = false): Promise<void> {
		if (!yesOption) {
			const { proceed } = await prompts({
				type: "confirm",
				name: "proceed",
				message: [
					"Running this command will install dependencies and overwrite your existing tailwind.config.[cjs|js|ts] and tsconfig.json.",
					"Note that about tsconfig.json, you have to remove comments before running this command.",
					"Proceed?"
				].join("\n"),
				initial: true
			});

			if (!proceed) {
				process.exitCode = 0;
				return;
			}
		}
	}

	/**
	 * Prompt the user to fill in the configuration.
	 *
	 * @param {string} cwd The working directory.
	 * @param {Config | null} [defaultConfig] The default configuration.
	 * @param {boolean} [skip] Whether to skip the prompt.
	 * @returns {Promise<Config>} The configuration.
	 */
	private async promptForConfig(
		cwd: string,
		defaultConfig: Config | null = null,
		skip: boolean = false
	): Promise<Config> {
		const initConfig = new InitConfig(
			cwd,
			defaultConfig,
			skip,
			this.logger
		);

		const config = await initConfig.setConfigFromPrompts();

		await initConfig.confirmProceed();

		initConfig.removeTailwindConfigCJS(config);

		await initConfig.writeInComponentJSON(config);

		return await ConfigUtils.resolveConfigPaths(cwd, config);
	}

	/**
	 * Prompts user to set path alias for components and scripts in their tsconfig.json file.
	 * If the user chooses to set path alias, it will update the tsconfig.json file.
	 * If the user chooses not to set path alias, it will return false.
	 *
	 * @param {string} cwd - The current working directory.
	 * @param {Config} config - The configuration object.
	 * @param {boolean} [skip] - Whether to skip the prompt and use default values. Defaults to false.
	 * @returns {Promise<boolean>} Whether the path alias was set or not.
	 */
	private async setTsConfigPathAlias(
		cwd: string,
		config: Config,
		skip: boolean = false
	): Promise<boolean> {
		const { tsconfigChoice } = skip
			? { tsconfigChoice: true }
			: await prompts({
					type: "select",
					name: "tsconfigChoice",
					message: `Do you want to set path alias for components and scripts in your tsconfig.json file ?`,
					choices: [
						{ title: "yes", value: true },
						{ title: "no", value: false }
					]
			  });

		if (!tsconfigChoice) {
			return false;
		}

		const initPathAlias = new InitPathAlias(cwd, config, skip, this.logger);

		const options = await initPathAlias.setPathAlias();

		await initPathAlias.writeInComponentJSON(options);

		config.tsConfigAliases = options;

		return true;
	}

	/**
	 * Creates the necessary directories, installs dependencies and writes the
	 * files for each tooling.
	 *
	 * @param {string} cwd - The current working directory.
	 * @param {Config} config - The configuration object.
	 * @param {boolean} [skip] - Whether the alias path is used in the tsconfig.
	 */
	private async runInit(cwd: string, config: Config, skip: boolean = false) {
		const dependenciesStep = new InitDependencies(
			cwd,
			config,
			skip,
			this.logger
		);

		await dependenciesStep.askToUseAliasPath();

		await dependenciesStep.initialize();

		await dependenciesStep.install();

		this.logger.success("Dependencies successfully installed.");
	}

	/**
	 * Log recommended scripts for the user to use in their package.json scripts field.
	 *
	 * These scripts are intended to be used as examples to properly use the main JSXPine tools: tailwindcss (to handle your css styling) and esbuild (to handle your JS code).
	 */
	private async recommendedScripts(cwd: string, config: Config) {
		const packageManager = await FileUtils.getPackageManager(cwd);
		const scriptRunnerMap = new Map<typeof packageManager, string>([
			["npm", "npm run"],
			["pnpm", "pnpm"],
			["yarn", "yarn"],
			["bun", "bun"]
		]);
		this.logger.info(
			`We recommend you the following scripts in ${chalk.yellow(
				"your package.json"
			)} scripts field as example to properly use the main JSXPine tools:`
		);
		this.logger.info(
			"tailwindcss (to handle your css styling) and esbuild (to bundle your JS code)."
		);
		this.logger.info(`
		"${chalk.green("dev")}": "${
			packageManager === "bun" ? "bun run --hot" : "nodemon"
		} src/index.tsx",
		"${chalk.green("tailwind:dev")}": "${scriptRunnerMap.get(
			packageManager
		)} tailwindcss -i ${
			config.tailwind.css
		} -o ./public/styles/index.css --watch",
		"${chalk.green("tailwind:prod")}": "${scriptRunnerMap.get(
			packageManager
		)} tailwindcss -i ${config.tailwind.css} -o ./public/styles/index.css",
		"${chalk.green("build:watch")}": "${scriptRunnerMap.get(
			packageManager
		)} esbuild --bundle --minify ${
			config.aliases.scripts
		}/app.js --outfile=./public/script/app.js --watch",
		"${chalk.green("build:prod")}": "${scriptRunnerMap.get(
			packageManager
		)} esbuild --bundle --minify ${
			config.aliases.scripts
		}/app.js --outfile=./public/script/app.js",
		"${chalk.green("start:dev")}": "concurrently \\"${scriptRunnerMap.get(
			packageManager
		)} dev\\" \\"${scriptRunnerMap.get(
			packageManager
		)} tailwind:dev\\" \\"${scriptRunnerMap.get(
			packageManager
		)} build:watch\\"",
		"${chalk.green("jsx:test")}": "xss-scan"
		`);
		this.logger.info(
			`This requires you to have ${chalk.yellow("concurrently")} installed.`,
			"Feel free to adapt it to your needs."
		);
	}
}

export const init = InitCommand.createCommand();