class TreeNode {
    val: number
    data: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(data?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.data = (data === undefined ? 0 : data)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
    show() {
        return this.data
    }
}

export default TreeNode