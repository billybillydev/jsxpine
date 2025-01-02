import { existsSync } from "fs";
import path from "path";
import prompts from "prompts";
import { ConfigUtils } from "../../utils/config";
import { LoggerUtils } from "../../utils/logger/index";
import { RegistryItem, RegistryUtils } from "../../utils/registry";


export class AddCheckOptions {
	registryTree: RegistryItem[] = [];

	constructor(
		private readonly cwd: string,
		private readonly components: string[] = [],
		private readonly logger: LoggerUtils
	) {
        this.cwd = path.resolve(this.cwd);
    }
    public async checkPath() {
        if (!existsSync(this.cwd)) {
			this.logger.error(
				`The path ${this.cwd} does not exist. Please try again.`
			);
			process.exitCode = 1;
			return;
		}
    }

	public async getConfig() {
		return await ConfigUtils.getConfig(this.cwd);
	}

	public async checkComponentsInRegistry() {
		const registryIndex = await RegistryUtils.getRegistryIndex();

		let selectedComponents = this.components;

		if (!this.components?.length) {
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
			this.logger.warn("No components selected. Exiting.");
			process.exitCode = 0;
			return;
		}

		this.registryTree = await RegistryUtils.resolveTree(
			registryIndex,
			selectedComponents
		);

        if (!this.registryTree?.length) {
			this.logger.warn("Selected components not found. Exiting.");
			process.exitCode = 0;
			return;
		}
	}

	/**
	 * Fetches the components payload from the registry.
	 * @returns {Promise<RegistryComponentItem[]>} The components payload.
	 */
	public async getComponentsPayload() {
		return await RegistryUtils.fetchTree(this.registryTree);
	}

	/**
	 * Fetches the alpine data payload from the registry.
	 * @returns {Promise<RegistryItem>} The alpine data payload.
	 */
	public async getAlpineDataPayload() {
		return await RegistryUtils.fetchAlpineData();
	}
}