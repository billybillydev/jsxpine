// import { TreeType } from "$components/tree/type";

// export function treeData(root: TreeType) {
//   return {
//     init() {
//       this.recursiveTreeMap(this.root);
//     },
//     root,
//     treeMap: new Map<string, TreeType>([]),
//     selectedItem: root,
//     selectItem(item: TreeType) {
//       this.selectedItem = item;
//       this.items = this.selectedItem.children;
//     },
//     goToParent(parentId: string) {
//       this.selectedItem = this.treeMap.get(parentId);
//     },
//     recursiveTreeMap(treeItem: TreeType) {
//       this.treeMap.set(treeItem.id, treeItem);
//       if (treeItem.children) {
//         [...treeItem.children].forEach((tree) => {
//           this.recursiveTreeMap(tree);
//         });
//       }
//     },
//   };
// }
