/**
 * @typedef {Object} ModalDataOutput
 * @property {boolean} show
 * @property {Function} close
 * @property {Function} open
 * @property {Record<string, () => boolean>} shower
 * @property {Record<string, Function>} trigger
 * @property {Record<string, Function>} closerClick
 * @property {Record<string, Function>} closerKeydown
 */

/**
 * Modal alpine data
 * @returns {import("alpinejs").AlpineComponent<ModalDataOutput>}
 */
export function modalData() {
  return {
    init() {
      this.$watch("show", function (value) {
        if (value === true) {
          document.body.classList.add("overflow-hidden");
        } else {
          document.body.classList.remove("overflow-hidden");
        }
      });
    },
    destroy() {
      this.show = false;
    },
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
    closerKeydown: {
      ["@keydown.escape.window"]() {
        this.close();
      },
    },
  };
}
