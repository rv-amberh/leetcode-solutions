/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let holder = new Set();

    if(!head) return head

    let curr = head.next;
    let prev = head;
    holder.add(head.val)

    while(curr) {
        if(holder.has(curr.val)) {
            let nodeToRemove = curr;
            let conn = nodeToRemove.next;
            prev.next = conn;
            curr = prev.next
        } else {
            holder.add(curr.val);
            prev = prev.next;
            curr = curr.next;
        }
    }

    return head;
};