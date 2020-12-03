import TreeNode from "./TreeNode"
class BST {
    root: TreeNode | null
    constructor(root?: TreeNode | null) {
        this.root = (root === undefined ? null : root)
    }
    insert(data: number) {
        let node = new TreeNode(data, null, null)
        if (this.root == null) {
            this.root = node
        } else {
            let current: TreeNode | null = this.root
            let parent: TreeNode | null
            while (true) {
                parent = current
                if (data < current.data) {
                    current = current.left
                    if (current == null) {
                        parent.left = node
                        break
                    }
                } else {
                    current = current.right
                    if (current == null) {
                        parent.right = node
                        break
                    }
                }
            }
        }
    }
    // BST的中序遍历
    inOrder(node: TreeNode | null = this.root) {
        if (!(node == null)) {
            this.inOrder(node.left)
            console.log(node.show())
            this.inOrder(node.right)
        }
    }
    // BST的先序遍历
    preOrder(node: TreeNode | null = this.root) {
        if (!(node == null)) {
            console.log(node.show())
            this.inOrder(node.left)
            this.inOrder(node.right)
        }
    }
    // BST的后序遍历
    postOrder(node: TreeNode | null = this.root) {
        if (!(node == null)) {
            this.inOrder(node.left)
            this.inOrder(node.right)
            console.log(node.show())
        }
    }
    // 查找最小值
    getMin() {
        let current: TreeNode | null = this.root
        while (current.left != null) {
            current = current.left
        }
        return current.data
    }
    // 查找最大值
    getMax() {
        let current: TreeNode | null = this.root
        while (current.right != null) {
            current = current.right
        }
        return current.data
    }
    // 查找指定值
    find(data: number) {
        let current: TreeNode | null = this.root
        while (current != null) {
            if (current.data == data) {
                return current
            } else if (current.data > data) {
                current = current.left
            } else {
                current = current.right
            }
        }
        return null
    }
    // 删除节点
    remove(data: number) {
        this.root = this.removeNode(this.root, data)
    }
    getSmallest(node: TreeNode | null) {
        if (node.left == null) {
            return node;
        }
        else {
            return this.getSmallest(node.left);
        }
    }
    removeNode(node: TreeNode | null, data: number): TreeNode | null {
        if (node == null) {
            return null
        }
        if (data == node.data) {
            // 没有左右节点
            if (node.left == null && node.right == null) {
                return null
            }
            // 有左节点
            if (node.left == null) {
                return node.right
            }
            // 有右节点
            if (node.right == null) {
                return node.left
            }
            // 有左右节点 
            // 获取最右边最小的节点 同当前删除的节点交换
            let tempNode: TreeNode | null = this.getSmallest(node.right)
            node.data = tempNode.data
            node.right = this.removeNode(node.right, tempNode.data)
            return node
        } else if (data < node.data) {
            node.left = this.removeNode(node.left, data)
            return node
        } else {
            node.right = this.removeNode(node.right, data)
            return node
        }
    }
}

let nums: BST = new BST()
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
console.log("Inorder traversal: ");
nums.inOrder();
// nums.preOrder();
// // nums.postOrder();
// console.log(nums.getMin())
// console.log(nums.getMax())
// console.log(nums.find(99))
// console.log(nums.find(2))
nums.remove(23)

nums.inOrder();