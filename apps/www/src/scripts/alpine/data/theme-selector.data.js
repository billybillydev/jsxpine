import { toKebabCase } from "@kitajs/html";
import { ColorTranslator } from "colortranslator";

/**
 * @typedef {Object} ThemeSelectorVariables
 * @property {Object} background
 * @property {string} background.light
 * @property {string} background.dark
 * @property {Object} foreground
 * @property {string} foreground.light
 * @property {string} foreground.dark
 * @property {Object} accent
 * @property {string} accent.light
 * @property {string} accent.dark
 * @property {Object} accentForeground
 * @property {string} accentForeground.light
 * @property {string} accentForeground.dark
 * @property {Object} muted
 * @property {string} muted.light
 * @property {string} muted.dark
 * @property {Object} mutedForeground
 * @property {string} mutedForeground.light
 * @property {string} mutedForeground.dark
 * @property {string} primary
 * @property {string} primaryDark1
 * @property {string} primaryDark2
 * @property {string} primaryLight1
 * @property {string} primaryLight2
 * @property {string} primaryForeground
 * @property {string} secondary
 * @property {string} secondaryDark
 * @property {string} secondaryLight
 * @property {string} secondaryForeground
 * @property {string} success
 * @property {string} successDark
 * @property {string} successLight
 * @property {string} successForeground
 * @property {string} danger
 * @property {string} dangerDark
 * @property {string} dangerLight
 * @property {string} dangerForeground
 * @property {string} info
 * @property {string} infoDark
 * @property {string} infoLight
 * @property {string} infoForeground
 * @property {string} warning
 * @property {string} warningDark
 * @property {string} warningLight
 * @property {string} warningForeground
 * @property {string} overlayDark
 * @property {string} overlayLight
 */

/**
 * @typedef {Object} ThemeSelectorDataOutput
 * @property {ThemeSelectorVariables[]} palettes
 * @property {ThemeSelectorVariables | null} selectedPalette
 * @property {(palette: ThemeSelectorVariables) => void} choosePalette
 * @property {(palette: ThemeSelectorVariables) => boolean} isSelected
 * @property {(key1: keyof ThemeSelectorVariables) => string} getHSLColor
 * @property {Record<string, Function>} styler
 */

/**
 * Theme Picker alpine data
 * @param {ThemeSelectorVariables[]} palettes
 * @returns {import("alpinejs").AlpineComponent<ThemeSelectorDataOutput>}
 */
export function themeSelectorData(palettes) {
	return {
		init() {
			this.selectedPalette = this.palettes[0];
		},
		palettes,
		selectedPalette: null,
		choosePalette(palette) {
			this.selectedPalette = palette;
		},
		isSelected(palette) {
			return JSON.stringify(this.selectedPalette) === JSON.stringify(palette);
		},
		getHSLColor(colorVariable) {
			if (!this.selectedPalette) {
				return "";
			}

			const variableFromPalette = this.selectedPalette[colorVariable];

			const color =
				typeof variableFromPalette === "object"
					? variableFromPalette[this.$store.darkMode ? "dark" : "light"]
					: variableFromPalette;

			const hslColor = new ColorTranslator(color).HSLObject;

			return `${hslColor.H}, ${hslColor.S}%, ${hslColor.L}%`;
		},
		styler: {
			[":style"]() {
				if (!this.selectedPalette) {
					return "";
				}

                return Object.keys(this.selectedPalette).map(
                    (key) => `--${toKebabCase(key)}: ${this.getHSLColor(/** @type {keyof ThemeSelectorVariables} */(key))};`
                ).join("\n");
			}
		}
	};
}
