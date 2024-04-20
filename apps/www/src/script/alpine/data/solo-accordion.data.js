/**
 * @typedef {Object} SoloAccordionDataOutput
 * @property {boolean} show
 * @property {Function} close
 * @property {Function} open
 * @property {Function} toggle
 * @property {Record<string, Function>} trigger
 * @property {Record<string, () => boolean>} display
 */

/**
 * Solo Accordion alpine data
 * @returns {import("alpinejs").AlpineComponent<SoloAccordionDataOutput>}
 */
export function soloAccordionData() {
	return {
		show: false,
		open() {
			this.show = true;
		},
		close() {
			this.show = false;
		},
		toggle() {
			this.show = !this.show;
		},
		trigger: {
			["@click"]() {
				this.toggle();
			}
		},
		display: {
			["x-show"]() {
				return this.show;
			}
		}
	};
}
