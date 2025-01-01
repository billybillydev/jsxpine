import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "tailwind.config";

const tailwindThemeConfig = resolveConfig(tailwindConfig).theme;

export const COLORS =
	/** @type {import("tailwindcss/types/generated/colors").DefaultColors & Record<import("$common/types").ThemeColorType, import("tailwindcss/types/config").RecursiveKeyValuePair<string, string>>} */ (
		tailwindThemeConfig.colors
	);

export const TYPOGRAPHY = {
	fontFamily: "Inter, system",
	scale: [
		{
			name: "h1",
			size: tailwindThemeConfig.fontSize["3xl"][0],
			weight: "500"
		},
		{
			name: "h2",
			size: tailwindThemeConfig.fontSize["xl"][0],
			weight: "500"
		},
		{
			name: "h3",
			size: tailwindThemeConfig.fontSize["lg"][0],
			weight: "400"
		},
		{
			name: "h4",
			size: tailwindThemeConfig.fontSize["base"][0],
			weight: "500"
		},
		{
			name: "h5",
			size: tailwindThemeConfig.fontSize["sm"][0],
			weight: "400"
		},
		{
			name: "h6",
			size: tailwindThemeConfig.fontSize["xs"][0],
			weight: "400"
		},
		{
			name: "base",
			size: tailwindThemeConfig.fontSize["base"][0],
			weight: "400"
		}
	]
};

export const SHADOWS = {
	types: [
		{ name: "xs", value: "0px 2px 4px rgba(0, 0, 0, 0.08)" },
		{ name: "sm", value: "0px 4px 8px rgba(0, 0, 0, 0.125)" },
		{ name: "md", value: "0px 8px 16px rgba(0, 0, 0, 0.125)" },
		{ name: "lg", value: "0px 16px 32px rgba(0, 0, 0, 0.125)" },
		{ name: "xl", value: "0px 32px 64px rgba(0, 0, 0, 0.125)" },
		{ name: "2xl", value: "0px 64px 128px rgba(0, 0, 0, 0.125)" }
	]
};
