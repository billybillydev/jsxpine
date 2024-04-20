/**
 * @typedef {Object} ImagePickerDataOutput
 * @property {Array<{ src: string, alt?: string }>} selectedImages
 * @property {Function} open
 * @property {Record<string, Function>} trigger
 * @property {(files: File[]) => Promise<void>} selectFile
 */

/**
 * ImagePicker alpine data
 * @returns {import("alpinejs").AlpineComponent<ImagePickerDataOutput>}
 */
export function imagepickerData() {
  return {
    selectedImages: [],
    open() {
      this.$refs.filepicker.click();
    },
    trigger: {
      ["@click"]() {
        this.open();
      },
    },
    async selectFile(files) {
      for await (const file of files) {
				const reader = new FileReader();
				/**
				 *
				 * @param {ProgressEvent<FileReader>} event
				 */
				reader.onload = (event) => {
					this.selectedImages.push({
						src: event.target?.result ? String(event.target.result) : "",
						alt: file.name
					});
				};
				await reader.readAsDataURL(file);
			}
      this.$dispatch("selected-images", {
        selectedImages: this.selectedImages,
      });
    },
  };
}
