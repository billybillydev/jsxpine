import { camelCase } from "change-case";
import fg from "fast-glob";
import { existsSync, promises as fs } from "fs";
import { Ora } from "ora";
import path from "path";
import { Config } from "../../utils/config/schema";
import { LoggerUtils } from "../../utils/logger/index";
import {
	RegistryAlpine,
	RegistryComponentItem,
	RegistryUtils
} from "../../utils/registry";

type AdditionalAlpineDataComponent = { component: string; path: string };

export class AddComponents {
	private alpineDependencies: string[] = [];

	constructor(
		private readonly config: Config,
		private readonly componentPayload: RegistryComponentItem[],
		private readonly alpineDataPayload: Record<string, string>,
	) {}

	public async installComponentsAndAlpineDependencies(spinner: Ora) {
		const componentDir = this.config.resolvedPaths.components;

		const alpineDataPath = path.join(
			this.config.resolvedPaths.alpine,
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
					this.alpineDependencies.push(file.name.split(".")[0]);
				}
			}
		}
		for await (const item of this.componentPayload) {
			spinner.text = `\nInstalling ${item.name}...\n`;

			await fs.writeFile(
				path.join(componentDir, `${item.name}.component.jsx`),
				item.component,
				"utf8"
			);

			if (item.alpineDependencies.length) {
				this.alpineDependencies.push(...item.alpineDependencies);
				const alpineDependenciesObject = item.alpineDependencies.reduce(
					(acc, cur) => {
						// Because alpineDataPayload keys are ts file names.
						const dependencyKey = `${cur}.data.js`
						;
						acc[dependencyKey] =
							this.alpineDataPayload[dependencyKey];
						return acc;
					},
					<RegistryAlpine["data"]>{}
				);

				await Promise.all(
					await RegistryUtils.transformObjectToDirectory(
						alpineDependenciesObject,
						alpineDataPath
					)
				);
			}
		}
	}

	public async updateAlpineScript() {
		if (this.alpineDependencies.length) {
			await fs.writeFile(
				path.join(this.config.resolvedPaths.alpine, "index.js"),
				await this.updateAlpineScriptWithData(
					[...new Set(this.alpineDependencies)],
					this.config.resolvedPaths.alpine
				),
				"utf8"
			);
		}
	}

	private async updateAlpineScriptWithData(
		dataComponents: string[],
		alpineDefaultPath: string
	) {
		try {
			// Searching custom alpine data
			const additionalDataComponents: AdditionalAlpineDataComponent[] =
				await this.findComponentsFromAdditionalAlpineScriptWithData(
					path.relative(process.cwd(), alpineDefaultPath)
				);

			return `
import Alpine from "alpinejs";
import focus from "@alpinejs/focus";
import collapse from "@alpinejs/collapse";
import manage from "alpinejs-manage";

import { capitalizeDirective } from "./directive/capitalize.directive";
import { logDirective } from "./directive/log.directive";

import { clipboardMagic } from "./magic/clipboard.magic";
import { nowMagic } from "./magic/now.magic";

${dataComponents
	.map(
		(dataName) =>
			`import { ${camelCase(
				dataName
			)}Data } from "./data/${dataName}.data";`
	)
	.join("\n")}

${additionalDataComponents
	.map(
		(data) =>
			`import { ${camelCase(data.component)}Data } from "${data.path}"`
	)
	.join("\n")}

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
			`Alpine.data("${camelCase(data.component)}", ${camelCase(
				data.component
			)}Data);`
	)
	.join("\n")}

/* Directive */
Alpine.directive("capitalize", capitalizeDirective);
Alpine.directive("log", logDirective);

/* Magic */
Alpine.magic("clipboard", clipboardMagic);
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
	}

	private async findComponentsFromAdditionalAlpineScriptWithData(
		alpineDefaultPath: string
	): Promise<AdditionalAlpineDataComponent[]> {
		try {
			const files = await fg([
				"**/scripts/alpine/data/*.data.{js,ts}",
				`!${alpineDefaultPath}/data`
			]);

			return files.map((filePath) => ({
				component: path
					.basename(filePath, path.extname(filePath))
					.split(".")[0],
				path: filePath.slice(0, -3)
			}));
		} catch (err) {
			console.error("Error:", err);

			return [];
		}
	}
}
