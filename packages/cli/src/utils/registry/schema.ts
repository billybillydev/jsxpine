import * as z from "zod";

export const registryAlpineSchema = z.object({
	data: z.record(z.string(), z.string()),
	directive: z.record(z.string(), z.string()),
	magic: z.record(z.string(), z.string()),
})

export const registryItemSchema = z.object({
	name: z.string(),
	alpineDependencies: z.array(z.string()),
	registryDependencies: z.array(z.string()),
});

export const registryIndexSchema = z.array(registryItemSchema);

export const registryItemWithComponentSchema = registryItemSchema.extend({
	component: z.string(),
});
export const registryWithComponentSchema = z.array(registryItemWithComponentSchema);

export const stylesSchema = z.array(
	z.object({
		name: z.string(),
		label: z.string()
	})
);

export const registryBaseColorSchema = z.object({
	inlineColors: z.object({
		light: z.record(z.string(), z.string()),
		dark: z.record(z.string(), z.string())
	}),
	cssVars: z.object({
		light: z.record(z.string(), z.string()),
		dark: z.record(z.string(), z.string())
	}),
	inlineColorsTemplate: z.string(),
	cssVarsTemplate: z.string()
});