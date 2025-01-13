/**
 * @typedef {Object} ThemeToggleDataOutput
 * @property {boolean} darkMode
 * @property {Function} toggle
 * @property {Function} switchToDark
 * @property {Function} switchToLight
 */

/**
 * Theme Toggle alpine data
 * @returns {import("alpinejs").AlpineComponent<ThemeToggleDataOutput>}
 */
export function themeToggleData() {
	return {
		init() {
			const darkMode = localStorage.getItem("darkMode");
			if (darkMode) {
				this.darkMode = Boolean(JSON.parse(darkMode));
			} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
				this.darkMode = true;
			}
            this.$store.darkMode = this.darkMode;

			this.$watch("darkMode", (value) => {
				localStorage.setItem("darkMode", String(value));
				this.$store.darkMode = value;
			});
		},
		darkMode: false,
		toggle() {
			this.darkMode = !this.darkMode;
		},
		switchToDark() {
			this.darkMode = true;
		},
		switchToLight() {
			this.darkMode = false;
		}
	};
}
