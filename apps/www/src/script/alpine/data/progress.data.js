/**
 * @typedef {Object} ProgressDataOutput
 * @property {number} progress
 * @property {number} max
 * @property {Timer | null} progressInterval
 * @property {number} interval
 * @property {boolean} noAnimation
 */

/**
 * Progress alpine data
 * @param {number} value 
 * @param {number} interval 
 * @param {boolean} noAnimation 
 * @returns {import("alpinejs").AlpineComponent<ProgressDataOutput>}
 */
export function progressData(
  value = 100,
  interval,
  noAnimation = false
) {
  return {
    async init() {
      if (this.noAnimation) {
        this.interval = 0;
        this.progress = this.max;
        await this.$nextTick();
        this.$dispatch("track", { value: this.progress });
      } else {
        this.progressInterval = setInterval(() => {
          this.progress += 1;
          this.$dispatch("track", { value: this.progress });
          if (this.progress >= this.max && this.progressInterval) {
						clearInterval(this.progressInterval);
					}
        }, this.interval);
      }
    },
    progress: 0,
    max: value,
    progressInterval: null,
    interval,
    noAnimation,
  };
}
