/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

// each LinkedList to reverse
// 双指针交换next方向
// null->1->2->3->4->5->null
// null<-1<-2<-3<-4<-5<-null
function reverseList(head: ListNode | null): ListNode | null {
    let prev: ListNode | null = null
    let curr: ListNode | null = head
    while (curr != null) {
        let nextTemp: ListNode | null = curr.next
        curr.next = prev
        prev = curr
        curr = nextTemp
    }
    return prev
};

