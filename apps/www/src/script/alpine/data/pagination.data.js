/**
 * @typedef {Object} PaginationDataOutput
 * @property {number} selectedPage
 * @property {number} pages
 * @property {Function} selectFirstPage
 * @property {Function} selectLastPage
 * @property {Function} selectPreviousPage
 * @property {Function} selectNextPage
 * @property {(page: number) => void} selectPage
 * @property {() => boolean} isFirstPage
 * @property {() => boolean} isLastPage
 */

/**
 * Pagination alpine data
 * @param {number} pages 
 * @param {number} selectedPage 
 * @returns {import("alpinejs").AlpineComponent<PaginationDataOutput>}
 */
export function paginationData(pages, selectedPage = 1) {
  return {
    selectedPage,
    pages,
    selectFirstPage() {
      this.selectedPage = 1;
    },
    selectLastPage() {
      this.selectedPage = this.pages;
    },
    selectPreviousPage() {
      this.selectedPage -= 1;
    },
    selectNextPage() {
      this.selectedPage += 1;
    },
    selectPage(page) {
      if (page > this.pages) {
        this.selectLastPage();
      } else if (page < 1) {
        this.selectFirstPage();
      } else {
        this.selectedPage = page;
      }
    },
    isFirstPage() {
      return this.selectedPage === 1;
    },
    isLastPage() {
      return this.selectedPage === this.pages;
    },
  };
}
