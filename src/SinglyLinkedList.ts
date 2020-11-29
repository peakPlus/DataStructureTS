class SignlyListNode {
    val: number
    next: SignlyListNode | null
    constructor(val?: number, next?: SignlyListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}
class MyLinkedList {
    size: number
    head: SignlyListNode
    constructor() {
        this.size = 0
        this.head = new SignlyListNode(0, null)
    }

    get(index: number): number {
        // this.printList()
        if (index < 0 || index >= this.size) return -1
        let j: number = -1
        let cursor: SignlyListNode = this.head
        while (j < index) {
            cursor = cursor.next!
            j++
        }
        return cursor.val
    }

    addAtHead(val: number): void {
        // this.printList()
        let listedNode: SignlyListNode = new SignlyListNode(val, this.head.next)
        this.head.next = listedNode
        this.size++
    }

    addAtTail(val: number): void {
        // this.printList()
        let listedNode: SignlyListNode = new SignlyListNode(val, null)
        let cursor: SignlyListNode = this.head
        while (cursor.next != null) {
            cursor = cursor.next
        }
        cursor.next = listedNode
        this.size++
    }

    addAtIndex(index: number, val: number): void {
        // this.printList()
        if (index === 0) {
            this.addAtHead(val)
            return
        }
        if (index === this.size) {
            this.addAtTail(val)
            return
        }
        if (index < 0) {
            index += this.size
        }
        if (index > this.size) {
            index -= this.size
        }
        let j = -1;
        let cursor: SignlyListNode = this.head
        while (j < index - 1) {
            cursor = cursor.next!
            j++
        }
        let linkedList: SignlyListNode = new SignlyListNode(val, cursor.next)
        cursor.next = linkedList
        this.size++
        return
    }

    deleteAtIndex(index: number): void {
        // this.printList()
        if (this.size === 0 || index >= this.size) {
            return
        }
        if (index === 0 && this.size === 1) {
            this.head.next === null
            this.size--
            return
        }
        if (index === this.size - 1) {
            let j = -1;
            let cursor: SignlyListNode = this.head
            while (j < index - 1) {
                cursor = cursor.next!
                j++
            }
            cursor.next = null
            this.size--
        }
        if (index >= 0 && index < this.size - 1) {
            let j = -1;
            let cursor: SignlyListNode = this.head
            while (j < index - 1) {
                cursor = cursor.next
                j++
            }
            cursor.next = cursor.next!.next!
            this.size--
        }
    }
    printList() {
        let arr: number[] = []
        let cursor: SignlyListNode = this.head
        for (let j = -1; j < this.size - 1; j++) {
            cursor = cursor.next!
            arr.push(cursor.val)
        }
        console.log(arr, this.size)
    }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
let linkedList: MyLinkedList | null = new MyLinkedList();
linkedList.addAtHead(9);
linkedList.get(1);
linkedList.addAtIndex(1, 1);
linkedList.addAtIndex(1, 7);
linkedList.deleteAtIndex(1);
linkedList.addAtHead(7);
linkedList.addAtHead(4);
linkedList.deleteAtIndex(1);
linkedList.addAtIndex(1, 4);
linkedList.addAtHead(2);
linkedList.deleteAtIndex(5);