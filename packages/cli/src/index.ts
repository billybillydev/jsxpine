#!/usr/bin/env node
// Credit to @shadcn for the original code. It has been slightly modified to fit the needs of this project.
import { Command } from "commander";
import { init, add } from "./commands";
import { FileUtils } from "./utils/file";

process.on("SIGINT", () => process.exit(0));
process.on("SIGTERM", () => process.exit(0));

async function main() {
	const packageInfo = FileUtils.getPackageInfo();

	const program = new Command()
		.name("jsx")
		.description("Add jsx components to your project")
		.version(
			packageInfo.version || "1.0.0",
			"-v, --version",
			"display the version number"
		);

	program.addCommand(init).addCommand(add);

	program.parse();
}

main();
