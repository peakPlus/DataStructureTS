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

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let head: ListNode | null = new ListNode()
    let cursor: ListNode | null = head
    while (l1 != null || l2 != null) {
        if (l1.val <= l2.val) {
            cursor.next = l1
            l1 = l1.next
        } else {
            cursor.next = l2
            l2 = l2.next
        }
        cursor = cursor.next
    }
    cursor.next = l1 == null ? l2 : l1
    return head.next
};