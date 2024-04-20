/**
 * @typedef {Object} CarouselDataInput
 * @property {boolean} loop
 * @property {number} slidesToShow
 */

/**
 * @typedef {Object} CarouselOutput
 * @property {HTMLElement[]} items
 * @property {number} activeIndex
 * @property {HTMLElement | null} activeItem
 * @property {boolean} loop
 * @property {number} slidesToShow
 * @property {(index: number) => boolean} isActive
 * @property {(index: number) => void} setActiveIndex
 * @property {Function} [previous]
 * @property {Function} [next]
 * @property {() => boolean} areFirstSlidesToShow
 * @property {() => boolean} areLastSlidesToShow
 */

/**
 * Carousel alpine data
 * @param {CarouselDataInput} carouselInputs 
 * @returns {import("alpinejs").AlpineComponent<CarouselOutput>}
 */
export function carouselData(carouselInputs) {
  return {
    items: this.$refs.carousel.children,
    activeIndex: 0,
    activeItem: null,
    loop: carouselInputs?.loop ?? false,
    slidesToShow: carouselInputs?.slidesToShow ?? 1,
    init() {
      this.activeItem = this.items[this.activeIndex];
      this.$refs.carousel.style.height = this.activeItem.clientHeight + "px";
      window.addEventListener("resize", () => {
        this.$refs.carousel.style.height = this.activeItem?.clientHeight + "px";
      });
      this.$watch("activeIndex", (value) => {
        this.$dispatch("selected-slide", { selectedIndex: value });
        this.activeItem = this.items[value];
        const activeItemBoundingClientRect =
          this.activeItem.getBoundingClientRect();
        const carouselBoundingClientRect =
          this.$refs.carousel.getBoundingClientRect();

        const xDistance =
          activeItemBoundingClientRect.x - carouselBoundingClientRect.x;
        const yDistance =
          activeItemBoundingClientRect.y - carouselBoundingClientRect.y;

        this.$refs.carousel.scrollBy(xDistance, yDistance);
      });
    },
    setActiveIndex(index) {
      this.activeIndex = index;
    },
    previous() {
      if (this.loop && this.areFirstSlidesToShow()) {
        this.activeIndex = this.items.length - this.slidesToShow;
      } else {
        this.activeIndex -= this.slidesToShow;
      }
    },
    next() {
      if (this.loop && this.areLastSlidesToShow()) {
        this.activeIndex = 0;
      } else {
        this.activeIndex +=
          this.activeIndex + this.slidesToShow < this.items.length
            ? this.slidesToShow
            : this.items.length % this.slidesToShow;
      }
    },
    isActive(index) {
      return this.activeIndex === index;
    },
    areFirstSlidesToShow() {
      return this.activeIndex < this.slidesToShow;
    },
    areLastSlidesToShow() {
      return this.activeIndex + this.slidesToShow >= this.items.length;
    },
  };
}
