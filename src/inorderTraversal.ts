import TreeNode from "./TreeNode"
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function inorderTraversal(root: TreeNode | null): number[] {
    let arr: number[] = []
    inorder(root, arr)
    return arr
};
function inorder(node: TreeNode | null, arr: number[]) {
    if (node == null) {
        return
    }
    inorder(node.left, arr)
    arr.push(node.val)
    inorder(node.right, arr)
}