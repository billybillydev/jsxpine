import * as z from "zod";


// TODO: Extract this to a shared package.
export const registryItemSchema = z.object({
	name: z.string(),
	alpineDependencies: z.array(z.string()).optional(),
	registryDependencies: z.array(z.string()).optional(),
});

export const registryIndexSchema = z.array(registryItemSchema);

const componentTreeSchema = z.record([z.string(), z.union([z.string(), componentTreeSchema])]);
export const registryItemWithComponentSchema = registryItemSchema.extend({
	components: componentTreeSchema,
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