import { promises as fs } from "fs";
import path from "path";
import ora from "ora";
import prompts from "prompts";
import { Config } from "../../utils/config/schema";
import { FileUtils } from "../../utils/file";
import { LoggerUtils } from "../../utils/logger/index";


export class InitPathAlias {
	constructor(
		private readonly cwd: string,
		private readonly config: Config,
		private readonly skip: boolean = false,
		private readonly logger: LoggerUtils
	) {}

	public async setPathAlias() {
		const choice = await this.selectBetweenGlobalOrIndividualAlias();

		let options: Config["tsConfigAliases"] | null = null;

		if (choice === "global") {
			options = await this.setGlobalPathAlias();
		} else {
			options = await this.setIndividualPathAlias();
		}

		return options;
	}

	public async writeInComponentJSON(
		options:
			| { global: string }
			| { components: string; scripts: string; alpine: string }
	) {
		const componentJSONSpinner = ora(
			"Updating components.json..."
		)?.start();

		await FileUtils.writeInComponentJSON(this.cwd, {
			...this.config,
			tsConfigAliases: options
		});

		componentJSONSpinner.succeed("Updated components.json");
	}

	private async selectBetweenGlobalOrIndividualAlias(): Promise<
		"global" | "individual"
	> {
		const { choice } = this.skip
			? { choice: "global" }
			: await prompts({
					type: "select",
					name: "choice",
					message: `Do you want to set global or individual path alias?`,
					hint: "Global path alias will be used for all components and scripts while individual path alias will be used for specific components and scripts.",
					choices: [
						{ title: "global", value: "global" },
						{ title: "individual", value: "individual" }
					]
			  });

		return choice;
	}

	private async setGlobalPathAlias() {
		const defaultOptions = {
			global: "$ui"
		};

		const options = this.skip
			? defaultOptions
			: await prompts({
					type: "text",
					name: "global",
					message: `Set alias for global path:`,
					initial: "$ui"
			  });

		const globalPath = this.config.aliases.components.slice(
			0,
			this.config.aliases.components.lastIndexOf("/")
		);
		await this.setPathsInCompilerOptions(this.cwd, {
			[options.global]: [globalPath],
			[`${options.global}/*`]: [`${globalPath}/*`]
		});

		return options;
	}

	private async setIndividualPathAlias() {
		const defaultOptions = {
			common: "$common",
			components: "$components",
			scripts: "$scripts",
			alpine: "$alpine"
		};

		const options = this.skip
			? defaultOptions
			: await prompts([
					{
						type: "text",
						name: "common",
						message: `Set alias for common path:`,
						initial: "$common"
					},
					{
						type: "text",
						name: "components",
						message: `Set alias for components path:`,
						initial: "$components"
					},
					{
						type: "text",
						name: "scripts",
						message: `Set alias for scripts path:`,
						initial: "$scripts"
					},
					{
						type: "text",
						name: "alpine",
						message: `Set alias for alpine path:`,
						initial: "$alpine"
					}
			  ]);

		await this.setPathsInCompilerOptions(this.cwd, {
			[options.common]: [this.config.aliases.common],
			[`${options.common}/*`]: [
				`${this.config.aliases.common}/*`
			],
			[options.components]: [this.config.aliases.components],
			[`${options.components}/*`]: [
				`${this.config.aliases.components}/*`
			],
			[options.scripts]: [this.config.aliases.scripts],
			[`${options.scripts}/*`]: [`${this.config.aliases.scripts}/*`],
			[options.alpine]: [this.config.aliases.alpine],
			[`${options.alpine}/*`]: [`${this.config.aliases.alpine}/*`]
		});

		return options;
	}

	private async setPathsInCompilerOptions(
		cwd: string,
		paths: Record<string, string[]>
	) {
		const tsConfigPathAliasSpinner = ora(
			"Updating tsconfig.json..."
		)?.start();

		const tsConfigData = FileUtils.findTsConfigFile(cwd);

		if (!tsConfigData.compilerOptions) {
			tsConfigData.compilerOptions = {};
		}

		if (!tsConfigData.compilerOptions.baseUrl) {
			tsConfigData.compilerOptions.baseUrl = "./";
		}

		if (!tsConfigData.compilerOptions.rootDir) {
			tsConfigData.compilerOptions.rootDir = "./";
		}

		tsConfigData.compilerOptions.paths = {
			...tsConfigData.compilerOptions.paths,
			...paths
		};
		
		await fs.writeFile(
			path.resolve(cwd, "tsconfig.json"),
			JSON.stringify(tsConfigData, null, 2),
			"utf8"
		);

		tsConfigPathAliasSpinner.succeed("Updated tsconfig.json");
	}
}