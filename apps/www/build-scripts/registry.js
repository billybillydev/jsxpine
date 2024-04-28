import { $ } from 'bun';
import { join } from "path";
import { buildAlpineRegistry } from "./alpine-dependencies";
import { buildCommonRegistry } from "./common";
import { buildComponentsRegistry } from "./components";

const REGISTRY_PATH = join(process.cwd(), "public/registry");

await $`rm -rf ${REGISTRY_PATH}`;
await $`mkdir ${REGISTRY_PATH}`

buildCommonRegistry(REGISTRY_PATH).then(() =>
	console.log("✅ Build Common Registry DONE!")
);
buildComponentsRegistry(REGISTRY_PATH).then(() =>
	console.log("✅ Build Components Registry DONE!")
);
buildAlpineRegistry(REGISTRY_PATH).then(() =>
	console.log("✅ Build Alpine Dependencies DONE!")
);
