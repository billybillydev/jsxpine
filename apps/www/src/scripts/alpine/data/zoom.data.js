/**
 * @typedef {Object} ZoomDataOutput
 * @property {HTMLImageElement | null} selectedImage
 * @property {boolean} zoom
 * @property {boolean} showNavigation
 * @property {(image: HTMLImageElement) => void} zoomIn
 * @property {Function} zoomOut
 * @property {(image: HTMLImageElement) => void} selectImage
 * @property {Record<string, Function>} closer
 * @property {Record<string, () => boolean>} shower
 * @property {boolean} disablePreviousNavigation
 * @property {boolean} disableNextNavigation
 * @property {(event: Event) => void} previousImage
 * @property {(event: Event) => void} nextImage
 */

/**
 * Zoom alpine data
 * @param {boolean} showNavigation
 * @returns {import("alpinejs").AlpineComponent<ZoomDataOutput>}
 */
export function zoomData(showNavigation = false) {
  return {
    selectedImage: null,
    zoom: false,
    showNavigation,
    zoomIn(image) {
      this.selectImage(image);
      this.zoom = true;
    },
    zoomOut() {
      this.zoom = false;
    },
    selectImage(image) {
      this.selectedImage = image;
    },
    closer: {
      ["@click"]() {
        this.zoomOut();
      },
      ["@keyup.window.escape"]() {
        this.zoomOut();
      },
    },
    shower: {
      ["x-show"]() {
        return this.zoom && !!this.selectedImage;
      },
    },
    disablePreviousNavigation: false,
    disableNextNavigation: false,
    previousImage(event) {
      event.stopPropagation();
      this.$dispatch("previous");
    },
    nextImage(event) {
      event.stopPropagation();
      this.$dispatch("next");
    },
  };
}
