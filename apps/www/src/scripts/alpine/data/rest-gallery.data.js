/**
 * @typedef {Object} RestGalleryDataOutput
 * @property {import("../../../components/image.component").ImageType[]} images
 * @property {number} nbDisplayedImages
 * @property {number} nbRestImages
 * @property {import("../../../components/image.component").ImageType[]} displayedImages
 * @property {Function} showAllImages
 * @property {Function} updateRestImageHeight
 * @property {(images: import("../../../components/image.component").ImageType[]) => Promise<void>} initializeImage
 */

/**
 * Rest Gallery data props
 * @param {import("../../../components/image.component").ImageType[]} images
 * @param {number} nbDisplayedImages
 * @param {import("../../../components/galleries.component").RestGalleryRestEffectType} restEffect
 * @returns {import("alpinejs").AlpineComponent<RestGalleryDataOutput>}
 */
export function restGalleryData(
	images = [],
	nbDisplayedImages = 3,
	restEffect = "show-all"
) {
	return {
		async init() {
			this.initializeImage(this.images);

			this.$watch("images", async (imagesValue) => {
				this.initializeImage(imagesValue);
			});
		},
		images,
		nbDisplayedImages,
		nbRestImages: 0,
		displayedImages: [],
		showAllImages() {
			this.displayedImages = this.images;
		},
		clickOnRestImage() {
			switch (restEffect) {
				case "zoom":
					break;
				case "show-all":
				default:
					this.showAllImages();
					break;
			}
		},
		updateRestImageHeight() {
			const firstChildrenHeight =
				this.$refs.restGallery.children[1].getBoundingClientRect().height;
			if (this.$refs.restImage) {
				this.$refs.restImage.style.height = firstChildrenHeight + "px";
			}
		},
		async initializeImage(images) {
			this.displayedImages = images.slice(0, this.nbDisplayedImages);
			this.nbRestImages = images.length - this.nbDisplayedImages;
			await this.$nextTick();
			this.updateRestImageHeight();
			window.addEventListener("resize", async () => {
				await this.$nextTick();
				this.updateRestImageHeight();
			});
		}
	};
}
