import chalk from "chalk";
import { Command } from "commander";
import ora from "ora";
import { z } from "zod";
import { Config } from "../../utils/config/schema";
import { handleError } from "../../utils/handle-error";
import { LoggerUtils } from "../../utils/logger/index";
import { RegistryAlpine, RegistryComponentItem } from "../../utils/registry";
import { AddComponents } from "./components";
import { AddCheckOptions } from "./options";

export const addOptionsSchema = z.object({
	components: z.array(z.string()).optional(),
	yes: z.boolean(),
	// overwrite: z.boolean(),
	cwd: z.string(),
	path: z.string().optional()
	// nodep: z.boolean()
});

export type AddOptions = z.infer<typeof addOptionsSchema>;

class AddCommand {
	private config!: Config | null;
	private componentsPayload: RegistryComponentItem[] = [];
	private alpineDataPayload!: RegistryAlpine["data"];

	constructor(
		private readonly options: AddOptions,
		private readonly logger: LoggerUtils
	) {}

	static createCommand(): Command {
		return new Command()
			.command("add")
			.description("add components to your project")
			.argument("[components...]", "name of components")
			.option("-y, --yes", "Skip confirmation prompt.", false)
			.option("-o, --overwrite", "overwrite existing files.", false)
			.option(
				"-c, --cwd <cwd>",
				"the working directory. defaults to the current directory.",
				process.cwd()
			)
			.option("-p, --path <path>", "the path to add the component to.")
			.action(async (components: string[], opts: Object) => {
				const options = addOptionsSchema.parse({
					components,
					...opts
				});

				const addCommand = new AddCommand(options, new LoggerUtils());
				await addCommand.execute();
			});
	}

	public async execute() {
		try {
			this.logger.warn(
				"Running the following command will overwrite existing files."
			);
			this.logger.warn(
				"Make sure you have committed your changes before proceeding."
			);
			this.logger.warn("");

			await this.checkOptionsAndSelectComponents();
			await this.installComponents();
		} catch (error) {
			handleError(error);
		}
	}

	private async checkOptionsAndSelectComponents() {
		const addCheckOptions = new AddCheckOptions(
			this.options.cwd,
			this.options.components,
			this.logger
		);

		await addCheckOptions.resolveComponentsInRegistry()
		await addCheckOptions.checkPath();

		this.config = await addCheckOptions.getConfig();
		this.componentsPayload = await addCheckOptions.getComponentsPayload();
		this.alpineDataPayload = await addCheckOptions.getAlpineDataPayload();
	}

	private async installComponents() {
		const spinner = ora(`Installing components...`).start();

		if (!this.config) {
			this.logger.warn(
				`Configuration is missing. Please run ${chalk.green(
					`init`
				)} to create a components.json file.`
			);
			process.exitCode = 0;
			return;
		}

		const addComponents = new AddComponents(
			this.config,
			this.componentsPayload,
			this.alpineDataPayload
		);

		await addComponents.installComponentsAndAlpineDependencies(spinner);
		await addComponents.updateAlpineScript();

		this.logger.info("");
		this.logger.info("");
		spinner.succeed(`Done.`);

		this.logger.prettifyMessage(
			[
				"The components below have been successfully installed:",
				...this.componentsPayload.map(
					(component) => `- ${component.name}`
				)
			].join("\n")
		);
		this.logger.success("Thanks for using JSXPine and happy coding !!!");
	}
}

export const add = AddCommand.createCommand();
