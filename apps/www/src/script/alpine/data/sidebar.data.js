/**
 * @typedef {Object} SidebarDataOutput
 * @property {boolean} show
 * @property {Function} close
 * @property {Function} open
 * @property {Record<string, () => boolean>} shower
 * @property {Record<string, Function>} trigger
 * @property {Record<string, Function>} closerClick
 * @property {Record<string, Function>} closerEscape
 */

/**
 * Sidebar alpine data
 * @returns {import("alpinejs").AlpineComponent<SidebarDataOutput>}
 */
export function sidebarData() {
  return {
    show: false,
    close() {
      this.show = false;
    },
    open() {
      this.show = true;
    },
    shower: {
      ["x-show"]() {
        return this.show;
      },
    },
    trigger: {
      ["@click"]() {
        this.open();
      },
    },
    closerClick: {
      ["@click"]() {
        this.close();
      },
    },
    closerEscape: {
      ["@keydown.escape.window"]() {
        this.close();
      },
    },
  };
}
