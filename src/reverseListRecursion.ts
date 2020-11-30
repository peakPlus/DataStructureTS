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
// Recursion LinkedList to reverse
function reverseListRecursion(head: ListNode | null): ListNode | null {
    if (head === null || head.next === null) return head
    let ret: ListNode | null = reverseListRecursion(head.next)
    head.next.next = head
    head.next = null
    return ret
};