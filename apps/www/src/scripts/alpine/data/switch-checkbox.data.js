/**
 * @typedef {Object} SwitchCheckboxDataOutput
 * @property {boolean} switchOn
 * @property {string} label
 * @property {Function} toggle
 */

/**
 * Switch Checkbox alpine data
 * @param {string} label 
 * @returns {import("alpinejs").AlpineComponent<SwitchCheckboxDataOutput>}
 */
export function switchCheckboxData(label = "") {
  return {
    init() {
      this.$watch("switchOn", (value) => {
        this.$dispatch("change", {
          checked: value,
          name: this.$refs.checkbox.name,
        });
      });
    },
    switchOn: false,
    label,
    toggle() {
      this.switchOn = !this.switchOn;
    },
  };
}
