import MagicString from "magic-string";
import { z } from "zod";
import { registryBaseColorSchema } from "./registry/schema";
import { Config } from "./config/schema";

export type TransformOpts = {
	filename: string;
	raw: string;
	config: Config;
	baseColor?: z.infer<typeof registryBaseColorSchema>;
};

export function transformImport(content: string, config: Config) {
	const s = new MagicString(content);
	s.replaceAll(/@\/registry\/[^/]+/g, config.aliases.components);
	s.replaceAll(/\$scripts\/alpine\/app/g, config.aliases.scripts);
	return s.toString();
}
