/**
 * @typedef {Object} GroupAccordionDataOutput
 * @property {string} activeAccordion
 * @property {(id: string) => void} setActiveAccordion
 * @property {(id: string) => boolean} isActive
 */

/**
 * Group Accordion alpine data
 * @returns {import("alpinejs").AlpineComponent<GroupAccordionDataOutput>}
 */
export function groupAccordionData() {
  return {
    activeAccordion: "",
    setActiveAccordion(id) {
      this.activeAccordion = this.activeAccordion == id ? "" : id;
    },
    isActive(id) {
      return this.activeAccordion === id;
    },
  };
}