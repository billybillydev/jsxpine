/**
 * @typedef {Object} TooltipDataOutput
 * @property {boolean} visible
 * @property {Function} show
 * @property {Function} hide
 * @property {Record<string, Function>} toggle
 */

/**
 * Tooltip alpine data
 * @param {boolean} [triggerOnHover]
 * @returns {import("alpinejs").AlpineComponent<TooltipDataOutput>}
 */

export function tooltipData(triggerOnHover = true) {
  return {
    visible: false,
    init() {
      if (triggerOnHover) {
        this.$refs.tooltipContent.addEventListener("mouseenter", () => {
          this.visible = true;
        });
        this.$refs.tooltipContent.addEventListener("mouseleave", () => {
          this.visible = false;
        });
      }
    },
    show() {
      this.visible = true;
    },
    hide() {
      this.visible = false;
    },
    toggle: {
      ["@mouseenter"]() {
        if (!triggerOnHover) {
          this.show();
        }
      },
      ["@mouseleave"]() {
        if (!triggerOnHover) {
          this.hide();
        }
      },
    },
  };
}
