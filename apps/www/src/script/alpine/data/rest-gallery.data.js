// import { ImageType } from "$common/types";
// import { RestGalleryRestEffectType } from "$components/gallery/rest/types";

// export function restGalleryData(
//   images: ImageType[] = [],
//   nbDisplayedImages: number = 3,
//   restEffect: RestGalleryRestEffectType = "show-all"
// ) {
//   return {
//     async init() {
//       this.initializeImage(this.images);

//       this.$watch("images", async (imagesValue) => {
//         this.initializeImage(imagesValue);
//       });
//     },
//     images,
//     nbDisplayedImages,
//     nbRestImages: 0,
//     displayedImages: [],
//     showAllImages() {
//       this.displayedImages = this.images;
//     },
//     clickOnRestImage() {
//       switch (restEffect) {
//         case "zoom":
//           break;
//         case "show-all":
//         default:
//           this.showAllImages();
//           break;
//       }
//     },
//     updateRestImageHeight() {
//       const firstChildrenHeight =
//         this.$refs.restGallery.children[1].getBoundingClientRect().height;
//       if (this.$refs.restImage) {
//         this.$refs.restImage.style.height = firstChildrenHeight + "px";
//       }
//     },
//     async initializeImage(images) {
//       this.displayedImages = images.slice(0, this.nbDisplayedImages);
//       this.nbRestImages = images.length - this.nbDisplayedImages;
//       await this.$nextTick();
//       this.updateRestImageHeight();
//       window.addEventListener("resize", async () => {
//         await this.$nextTick();
//         this.updateRestImageHeight();
//       });
//     },
//   };
// }
