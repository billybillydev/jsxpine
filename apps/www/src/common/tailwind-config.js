import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config.js";

export const tailwindThemeConfig = resolveConfig(tailwindConfig).theme;
