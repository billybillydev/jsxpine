/**
 * @typedef {Object} CodeToCopyDataProps
 * @property {boolean} copied
 * @property {Function} clickToCopy
 * @property {Record<string, Function>} click
 */

/**
 * @param {number} [duration]
 * @returns {import("alpinejs").AlpineComponent<CodeToCopyDataProps>}
 */
export function codeToCopyData(duration = 2000) {
	return {
		copied: false,
		clickToCopy() {
			if (this.$refs.codeToCopyContent.textContent) {
				this.$clipboard(this.$refs.codeToCopyContent.textContent);
			}
			this.copied = true;
			let timeout;
			    timeout = setTimeout(() => {
			        this.copied = false;
			        timeout = null;
			    }, duration);
		},
		click: {
			["@click"]() {
				this.clickToCopy();
			}
		}
	};
}
