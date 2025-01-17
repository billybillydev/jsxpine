/**
 * @typedef {Object} TabsDataOutput
 * @property {import("../../../common/types").DirectionType} direction
 * @property {number} tabSelected
 * @property {string} tabId
 * @property {(tabButton: HTMLButtonElement) => void} tabButtonClicked
 * @property {(tabButton: HTMLButtonElement) => boolean} tabButtonActive
 * @property {(tabButton: HTMLElement) => boolean} tabContentActive
 */

/**
 * 
 * @param {import("../../../common/types").DirectionType} direction 
 * @returns {import("alpinejs").AlpineComponent<TabsDataOutput & { $refs?: { tabButtons: HTMLDivElement, tabContents: HTMLDivElement } }>}
 */
export function tabsData(direction = "vertical") {
	return {
		init() {
			const tabs = Array.from(this.$refs.tabButtons.children);
			const tabsNb = tabs.length;
			if (this.direction === "vertical") {
				this.$refs.tabButtons.style.gridTemplateColumns = `repeat(${tabsNb}, 1fr)`;
			} else {
				this.$refs.tabButtons.style.gridTemplateRows = `repeat(${tabsNb}, 1fr)`;
			}
			this.tabId = this.$id("tabs");
			this.tabSelected = 0;
		},
		direction,
		tabSelected: -1,
		tabId: "",
		tabButtonClicked(tabButton) {
			this.tabSelected = Array.from(this.$refs.tabButtons.children).findIndex(
				(tab) => tab.id === tabButton.id
			);
		},
		tabButtonActive(tabButton) {
			return (
				this.tabSelected ===
				Array.from(this.$refs.tabButtons.children).findIndex(
					(tab) => tab.id === tabButton.id
				)
			);
		},
		tabContentActive(tabContent) {
			return (
				this.tabSelected ===
				Array.from(this.$refs.tabContents.children).findIndex(
					(tab) => tab.id === tabContent.id
				)
			);;
		}
	};
}
