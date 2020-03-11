// https://leetcode.com/problems/add-two-numbers
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
  let head = new ListNode(-1), carry = 0;
  let curr = head;

  for (; l1 || l2; curr = curr.next) {
    const v1 = l1 ? l1.val : 0;
    const v2 = l2 ? l2.val : 0;

    const sum = (v1 + v2 + carry);
      
    if (sum >= 10) {
        curr.next = new ListNode(sum - 10);
        carry = 1
    } else {
        curr.next = new ListNode(sum);
        carry = 0;
    }

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  if (carry) curr.next = new ListNode(1);

  return head.next;
}

const createLinkedNumber = (num) => {
  const head = {
    next: null,
    val: -1
  };

  for (let curr = head; num; num = num/10 | 0, curr = curr.next) {
    const val = num % 10;

    curr.next = {
      next: null,
      val: val
    };
  }

  return head.next;
}