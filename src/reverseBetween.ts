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

function reverseBetween(head: ListNode | null, m: number, n: number): ListNode | null {
    // Empty list
    if (head == null) {
        return null;
    }
    let curr: ListNode | null = head
    let prev: ListNode | null = null
    while (curr != null && m > 1) {
        prev = curr;
        curr = curr.next;
        m--;
        n--;
    }
    let con: ListNode | null = prev
    let tail: ListNode | null = curr
    while (curr!= null && n > 0) {
        let nextTemp: ListNode | null = curr.next
        curr.next = prev
        prev = curr
        curr = nextTemp
        n--
    }
    if (con != null) {
        con.next = prev;
    } else {
        head = prev;
    }
    if(tail != null) {
        tail.next = curr;
    }
    return head;
};