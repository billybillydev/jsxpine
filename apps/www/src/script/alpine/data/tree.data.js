/**
 * @typedef {Object} TreeOutputData
 * @property {import("$components/trees.component").TreeType}
 * @property {Map<string, TreeType>} treeMap
 * @property {(item: import("$components/trees.component").TreeType) => void} selectedItem
 * @property {(parentId: string) => void} goToParent
 * @property {(treeItem: import("$components/trees.component").TreeType) => void} recursiveTreeMap
 */

/**
 * Tree alpine data
 * @param {import("$components/trees.component").TreeType} root 
 * @returns {import("alpinejs").AlpineComponent<TreeOutputData>}
 */
export function treeData(root) {
  return {
    init() {
      this.recursiveTreeMap(this.root);
    },
    root,
    treeMap: new Map([]),
    selectedItem: root,
    selectItem(item) {
      this.selectedItem = item;
      this.items = this.selectedItem.children;
    },
    goToParent(parentId) {
      this.selectedItem = this.treeMap.get(parentId);
    },
    recursiveTreeMap(treeItem) {
      this.treeMap.set(treeItem.id, treeItem);
      if (treeItem.children) {
        [...treeItem.children].forEach((tree) => {
          this.recursiveTreeMap(tree);
        });
      }
    },
  };
}
