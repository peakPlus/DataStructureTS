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
// DFS 深度优先搜索
function mergeTrees(t1: TreeNode | null, t2: TreeNode | null): TreeNode | null {
    if (t1 == null) {
        return t2
    } else if (t2 == null) {
        return t1
    }
    let node: TreeNode | null = new TreeNode(t1.val + t2.val, mergeTrees(t1.left, t2.left), mergeTrees(t1.right, t2.right))
    return node
};