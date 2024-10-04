import { existsSync, promises as fs } from "fs";
import path from "path";
import chalk from "chalk";
import { camelCase } from "change-case";
import { Command } from "commander";
import fg from "fast-glob";
import ora from "ora";
import prompts from "prompts";
import { z } from "zod";
import { getConfig } from "../utils/get-config";
import { handleError } from "../utils/handle-error";
import { logger } from "../utils/logger";
import { fetchAlpineData, fetchTree, getRegistryIndex, resolveTree, transformObjectToDirectory } from "../utils/registry";


const addOptionsSchema = z.object({
	components: z.array(z.string()).optional(),
	yes: z.boolean(),
	overwrite: z.boolean(),
	cwd: z.string(),
	path: z.string().optional(),
	nodep: z.boolean()
});

export const add = new Command()
	.command("add")
	.description("add components to your project")
	.argument("[components...]", "name of components")
	.option(
		"--nodep",
		"disable adding & installing dependencies (advanced)",
		false
	)
	.option("-y, --yes", "Skip confirmation prompt.", false)
	.option("-o, --overwrite", "overwrite existing files.", false)
	.option(
		"-c, --cwd <cwd>",
		"the working directory. defaults to the current directory.",
		process.cwd()
	)
	.option("-p, --path <path>", "the path to add the component to.")
	.action(async (components: string[], opts) => {
		logger.warn(
			"Running the following command will overwrite existing files."
		);
		logger.warn(
			"Make sure you have committed your changes before proceeding."
		);
		logger.warn("");

		try {
			const options = addOptionsSchema.parse({
				components,
				...opts
			});

			const cwd = path.resolve(options.cwd);

			if (!existsSync(cwd)) {
				logger.error(
					`The path ${cwd} does not exist. Please try again.`
				);
				process.exitCode = 1;
				return;
			}

			const config = await getConfig(cwd);
			if (!config) {
				logger.warn(
					`Configuration is missing. Please run ${chalk.green(
						`init`
					)} to create a components.json file.`
				);
				process.exitCode = 1;
				return;
			}

			const registryIndex = await getRegistryIndex();
			let selectedComponents = options.components;
			if (!options.components?.length) {
				const { components } = await prompts({
					type: "multiselect",
					name: "components",
					message: "Which components would you like to add?",
					hint: "Space to select. A to toggle all. Enter to submit.",
					instructions: false,
					choices: registryIndex.map((item) => ({
						title: item.name,
						value: item.name
					}))
				});
				selectedComponents = components;
			}

			if (!selectedComponents?.length) {
				logger.warn("No components selected. Exiting.");
				process.exitCode = 0;
				return;
			}

			const registryTree = await resolveTree(
				registryIndex,
				selectedComponents
			);
			const componentPayload = await fetchTree(registryTree);
			const alpineDataPayload = await fetchAlpineData();
			if (!registryTree.length) {
				logger.warn("Selected components not found. Exiting.");
				process.exitCode = 0;
				return;
			}

			if (!options.yes) {
				const { proceed } = await prompts({
					type: "confirm",
					name: "proceed",
					message: `Ready to install components and dependencies. Proceed?`,
					initial: true
				});

				if (!proceed) {
					process.exitCode = 0;
					return;
				}
			}
			const spinner = ora(`Installing components...`).start();
			const componentDir = config.resolvedPaths.components;
			// Install alpine dependencies.
			const alpineDependencies: string[] = [];
			const alpineDataPath = path.join(
				config.resolvedPaths.alpine,
				"data"
			);

			if (!existsSync(componentDir)) {
				await fs.mkdir(componentDir);
			}
			if (!existsSync(alpineDataPath)) {
				await fs.mkdir(alpineDataPath);
			} else {
				const files = await fs.readdir(alpineDataPath, {
					withFileTypes: true
				});
				for (const file of files) {
					if (file.isFile()) {
						alpineDependencies.push(file.name.split(".")[0]);
					}
				}
			}
			for (const item of componentPayload) {
				spinner.text = `\nInstalling ${item.name}...\n`;

				await fs.writeFile(
					path.join(componentDir, `${item.name}.component.jsx`),
					item.component,
					"utf8"
				);

				if (item.alpineDependencies.length) {
					alpineDependencies.push(...item.alpineDependencies);
					const alpineDependenciesObject =
						item.alpineDependencies.reduce((acc, cur) => {
							// Because alpineDataPayload keys are ts file names.
							const dependencyKey = `${cur}.data.js`;
							acc[dependencyKey] =
								alpineDataPayload[dependencyKey];
							return acc;
						}, <Record<string, any>>{});

					await Promise.all(
						await transformObjectToDirectory(
							alpineDependenciesObject,
							alpineDataPath
						)
					);
				}
			}
			// Updated alpine script
			if (alpineDependencies.length) {
				await fs.writeFile(
					path.join(config.resolvedPaths.alpine, "index.js"),
					await updateAlpineScriptWithData(
						[...new Set(alpineDependencies)],
						config.resolvedPaths.alpine
					),
					"utf8"
				);
			}
			logger.info("");
			logger.info("");
			spinner.succeed(`Done.`);
		} catch (error) {
			handleError(error);
		}
	});

type AdditionalAlpineDataComponent = { component: string; path: string };

const updateAlpineScriptWithData = async (
	dataComponents: string[],
	alpineDefaultPath: string
) => {
	try {
		// Searching custom alpine data
		const additionalDataComponents: AdditionalAlpineDataComponent[] =
			await findComponentsFromAdditionalAlpineScriptWithData(
				path.relative(process.cwd(), alpineDefaultPath)
			);

		return `
import Alpine from "alpinejs";
import focus from "@alpinejs/focus";
import collapse from "@alpinejs/collapse";
import manage from "alpinejs-manage";

import { logDirective } from "./directive/log.directive";
import { nowMagic } from "./magic/now.magic";
import { clipboardMagic } from "./magic/clipboard.magic";
import { capitalizeDirective } from "./directive/capitalize.directive";
import { formatDateMagic } from "./magic/format-date.magic";
import { dateFormatDirective } from "./directive/format-date.directive";

${dataComponents
	.map(
		(dataName) =>
			`import { ${camelCase(
				dataName
			)}Data } from "./data/${dataName}.data";`
	)
	.join("\n")}

${additionalDataComponents.map(
	(data) => `import { ${camelCase(data.component)}Data } from "${data.path}"`
).join("\n")}

/* Data */
${dataComponents
	.map(
		(dataName) =>
			`Alpine.data("${camelCase(dataName)}", ${camelCase(dataName)}Data);`
	)
	.join("\n")}

/* Additional Data from project */
${additionalDataComponents
	.map(
		(data) =>
			`Alpine.data("${camelCase(data.component)}", ${camelCase(data.component)}Data);`
	)
	.join("\n")}

/* Directive */
Alpine.directive("capitalize", capitalizeDirective);
Alpine.directive("date-format", dateFormatDirective);
Alpine.directive("log", logDirective);

/* Magic */
Alpine.magic("clipboard", clipboardMagic);
Alpine.magic("formatDate", formatDateMagic);
Alpine.magic("now", nowMagic);

/* Plugins */
Alpine.plugin(collapse);
Alpine.plugin(focus);
Alpine.plugin(manage);

export default Alpine;
`;
	} catch (err) {
		console.error("Error:", err);
		return "";
	}
};

async function findComponentsFromAdditionalAlpineScriptWithData(
	alpineDefaultPath: string
): Promise<AdditionalAlpineDataComponent[]> {
	try {
		const files = await fg([
			"**/scripts/alpine/data/*.data.{js,ts}",
			`!${alpineDefaultPath}/data`
		]);

		return files.map((filePath) => ({
			component: path.basename(filePath, path.extname(filePath)).split(".")[0],
			path: filePath.slice(0, -3)
		}));
	} catch (err) {
		console.error("Error:", err);

		return [];
	}
}