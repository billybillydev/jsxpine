/**
 * @typedef {Object} DropdownSelectDataOutput
 * @property {boolean} selectOpen
 * @property {import("$components/input.component").SelectOptionType | null} selectedItem
 * @property {import("$components/input.component").SelectOptionType[]} selectableItems
 * @property {import("$components/input.component").SelectOptionType | null} selectableItemActive
 * @property {string} selectId
 * @property {string} selectKeydownValue
 * @property {number} selectKeydownTimeout
 * @property {Timer | null} selectKeydownClearTimeout
 * @property {"top" | "bottom"} selectDropdownPosition
 * @property {(item: import("$components/input.component").SelectOptionType) => boolean} selectableItemIsActive
 * @property {Function} selectableItemActiveNext
 * @property {Function} selectableItemActivePrevious
 * @property {(event: KeyboardEvent) => void} selectKeydown
 * @property {() => import("$components/input.component").SelectOptionType | null} selectItemsFindBestMatch
 * @property {Function} selectPositionUpdate
 * @property {Function} selectScrollToActiveItem
 */

/**
 * Dropdown-select alpine data
 * @param {import("$components/input.component").SelectOptionType[]} selectableItems 
 * @returns {import("alpinejs").AlpineComponent<DropdownSelectDataOutput>}
 */
export function dropdownSelectData(selectableItems = []) {
  return {
    init() {
      this.$watch("selectOpen", () => {
        if (!this.selectedItem) {
          this.selectableItemActive = this.selectableItems.find(
            (item) => !item.disabled
          ) ?? null;
        } else {
          this.selectableItemActive = this.selectedItem;
        }
        setTimeout(() => {
          this.selectScrollToActiveItem();
        }, 10);
        this.selectPositionUpdate();
        window.addEventListener("resize", (event) => {
          this.selectPositionUpdate();
        });
      });
    },
    selectOpen: false,
    selectedItem: null,
    selectableItems,
    selectableItemActive: null,
    selectId: this.$id("select"),
    selectKeydownValue: "",
    selectKeydownTimeout: 1000,
    selectKeydownClearTimeout: null,
    selectDropdownPosition: "bottom",
    selectableItemIsActive(item) {
      return this.selectableItemActive?.value == item.value;
    },
    selectableItemActiveNext() {
      let index = this.selectableItems.findIndex(
        (item) => item.value === this.selectableItemActive?.value
      );
      if (index < this.selectableItems.length - 1) {
        if (index + 1 < this.selectableItems.length - 1) {
          if (this.selectableItems[index + 1].disabled) {
            this.selectableItemActive = this.selectableItems[index + 2];
          } else {
            this.selectableItemActive = this.selectableItems[index + 1];
          }
        } else if (!this.selectableItems[index + 1].disabled) {
          this.selectableItemActive = this.selectableItems[index + 1];
        }
        this.selectScrollToActiveItem();
      }
    },
    selectableItemActivePrevious() {
      let index = this.selectableItems.findIndex(
        (item) => item.value === this.selectableItemActive?.value
      );
      if (index > 0) {
        if (index - 1 > 0) {
          if (this.selectableItems[index - 1].disabled) {
            this.selectableItemActive = this.selectableItems[index - 2];
          } else {
            this.selectableItemActive = this.selectableItems[index - 1];
          }
        } else if (!this.selectableItems[index - 1].disabled) {
          this.selectableItemActive = this.selectableItems[index - 1];
        }
        this.selectScrollToActiveItem();
      }
    },
    selectScrollToActiveItem() {
      if (this.selectableItemActive) {
        const activeElement = document.getElementById(
          this.selectableItemActive.value + "-" + this.selectId
        );
        if (activeElement) {
          let newScrollPos =
						activeElement.offsetTop +
						activeElement.offsetHeight -
						this.$refs.selectableItemsList.offsetHeight;
					if (newScrollPos > 0) {
						this.$refs.selectableItemsList.scrollTop = newScrollPos;
					} else {
						this.$refs.selectableItemsList.scrollTop = 0;
					}
        }
      }
    },
    selectKeydown(event) {
      if (Number(event.key) >= 65 && Number(event.key) <= 90) {
        this.selectKeydownValue = event.key;
        const selectedItemBestMatch = this.selectItemsFindBestMatch();
        if (selectedItemBestMatch) {
          if (this.selectOpen) {
            this.selectableItemActive = selectedItemBestMatch;
            this.selectScrollToActiveItem();
          } else {
            this.selectedItem = this.selectableItemActive =
              selectedItemBestMatch;
          }
        }

        if (this.selectKeydownValue != "" && this.selectKeydownClearTimeout) {
					clearTimeout(this.selectKeydownClearTimeout);
					this.selectKeydownClearTimeout = setTimeout(() => {
						this.selectKeydownValue = "";
					}, this.selectKeydownTimeout);
				}
      }
    },
    selectItemsFindBestMatch() {
      const typedValue = this.selectKeydownValue.toLowerCase();
      var bestMatch = null;
      var bestMatchIndex = -1;
      for (var i = 0; i < this.selectableItems.length; i++) {
        var label = this.selectableItems[i].label.toLowerCase();
        var index = label.indexOf(typedValue);
        if (
          index > -1 &&
          (bestMatchIndex == -1 || index < bestMatchIndex) &&
          !this.selectableItems[i].disabled
        ) {
          bestMatch = this.selectableItems[i];
          bestMatchIndex = index;
        }
      }
      return bestMatch;
    },
    selectPositionUpdate() {
      const selectDropdownBottomPos =
        this.$refs.selectButton.getBoundingClientRect().top +
        this.$refs.selectButton.offsetHeight +
        parseInt(
          window.getComputedStyle(this.$refs.selectableItemsList).maxHeight
        );
      if (window.innerHeight < selectDropdownBottomPos) {
        this.selectDropdownPosition = "top";
      } else {
        this.selectDropdownPosition = "bottom";
      }
    },
  };
}
