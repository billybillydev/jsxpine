/**
 * @typedef {Object} CodeToCopyDataProps
 * @property {boolean} copied
 * @property {Function} clickToCopy
 * @property {Record<string, Function>} click
 */

/**
 * @param {number} [duration=2000]
 * @returns {import("alpinejs").AlpineComponent<CodeToCopyDataProps>}
 */
export function codeToCopyData(duration) {
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
