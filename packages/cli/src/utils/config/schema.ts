import * as z from "zod";

export const rawConfigSchema = z
	.object({
		$schema: z.string().optional(),
		// style: z.string(),
		tailwind: z.object({
			config: z.string(),
			css: z.string()
			// baseColor: z.string()
			// cssVariables: z.boolean().default(true)
		}),
		aliases: z.object({
			common: z
				.string()
				.transform((v) => v.replace(/[\u{0080}-\u{FFFF}]/gu, "")),
			components: z
				.string()
				.transform((v) => v.replace(/[\u{0080}-\u{FFFF}]/gu, "")),
			scripts: z
				.string()
				.transform((v) => v.replace(/[\u{0080}-\u{FFFF}]/gu, "")),
			alpine: z
				.string()
				.transform((v) => v.replace(/[\u{0080}-\u{FFFF}]/gu, ""))
		}),
		tsConfigAliases: z.optional(
			z.union([
				z.object({ global: z.string() }),
				z.object({
					common: z.string(),
					components: z.string(),
					scripts: z.string(),
					alpine: z.string()
				})
			])
		)
	})
	.strict();

export type RawConfig = z.infer<typeof rawConfigSchema>;

export const configSchema = rawConfigSchema.extend({
	resolvedPaths: z.object({
		tailwindConfig: z.string(),
		tailwindCss: z.string(),
		scripts: z.string(),
		alpine: z.string(),
		components: z.string(),
		common: z.string()
	})
});

export type Config = z.infer<typeof configSchema>;
