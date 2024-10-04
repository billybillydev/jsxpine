/**
 * @typedef {Object} TabsDataOutput
 * @property {import("../../../common/types").DirectionType} direction
 * @property {number} tabSelected
 * @property {string} tabId
 * @property {(tabButton: HTMLButtonElement) => void} tabButtonClicked
 * @property {(tabButton: HTMLButtonElement) => void} tabRepositionMarker
 * @property {(tabButton: HTMLElement) => boolean} tabContentActive
 */

/**
 * 
 * @param {import("../../../common/types").DirectionType} direction 
 * @returns {import("alpinejs").AlpineComponent<TabsDataOutput>}
 */
export function tabsData(direction = "vertical") {
	return {
		init() {
			const tabs = this.$refs.tabButtons.children;
			const tabsNb = tabs.length - 1;
			const tabWidth = `${Math.floor(100 / tabsNb)}%`;
			if (this.direction === "vertical") {
				this.$refs.tabButtons.style.gridTemplateColumns = `repeat(${tabsNb}, 1fr)`;
			} else {
				this.$refs.tabButtons.style.gridTemplateRows = `repeat(${tabsNb}, 1fr)`;
			}
			this.$refs.tabMarker.style.width = tabWidth;
			this.tabRepositionMarker(this.$refs.tabButtons.firstElementChild);
		},
		direction,
		tabSelected: 1,
		tabId: this.$id("tabs"),
		tabButtonClicked(tabButton) {
			this.tabSelected = Number(tabButton.id.replace(this.tabId + "-", ""));
			this.tabRepositionMarker(tabButton);
		},
		tabRepositionMarker(tabButton) {
			this.$refs.tabMarker.style.width = tabButton.offsetWidth + "px";
			this.$refs.tabMarker.style.height = tabButton.offsetHeight + "px";
			this.$refs.tabMarker.style.top = tabButton.offsetTop + "px";
			this.$refs.tabMarker.style.left = tabButton.offsetLeft + "px";
		},
		tabContentActive(tabContent) {
			return (
				String(this.tabSelected) == tabContent.id.replace(this.tabId + "-content-", "")
			);
		}
	};
}
