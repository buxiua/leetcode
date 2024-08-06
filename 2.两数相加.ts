/*
 * @lc app=leetcode.cn id=2 lang=typescript
 *
 * [2] 两数相加
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// @lc code=start
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

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const result = new ListNode();
  let p1 = l1,
    p2 = l2,
    r = result,
    sum = 0,
    num = 0,
    flag = 0;

  while (p1 || p2) {
    sum = (p1?.val || 0) + (p2?.val || 0) + flag;
    [num, flag] = sum < 10 ? [sum, 0] : [sum - 10, 1];
    r.next = new ListNode(num);
    r = r.next;
    p1 = p1?.next || null;
    p2 = p2?.next || null;
  }
  if (flag) {
    r.next = new ListNode(flag);
  }

  return result.next;
}
// @lc code=end

// l1与l2分开考虑了
function addTwoNumbers1(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const result = new ListNode();
  let p1 = l1,
    p2 = l2,
    r = result,
    sum = 0,
    num = 0,
    flag = 0;
  while (p1 && p2) {
    sum = p1.val + p2.val + flag;
    [num, flag] = sum < 10 ? [sum, 0] : [sum - 10, 1];
    r.next = new ListNode(num);
    r = r.next;
    p1 = p1.next;
    p2 = p2.next;
  }

  while (p1) {
    sum = p1.val + flag;
    [num, flag] = sum < 10 ? [sum, 0] : [sum - 10, 1];
    r.next = new ListNode(num);
    r = r.next;
    p1 = p1.next;
  }

  while (p2) {
    sum = p2.val + flag;
    [num, flag] = sum < 10 ? [sum, 0] : [sum - 10, 1];
    r.next = new ListNode(num);
    r = r.next;
    p2 = p2.next;
  }
  if (flag) {
    r.next = new ListNode(flag);
  }

  return result.next;
}

// l1与l2合并起来考虑，更加的简洁，时间复杂度 O(n),空间复杂度O(1)
function addTwoNumbers2(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const result = new ListNode();
  let p1 = l1,
    p2 = l2,
    r = result,
    sum = 0,
    num = 0,
    flag = 0;

  while (p1 || p2) {
    sum = (p1?.val || 0) + (p2?.val || 0) + flag;
    [num, flag] = sum < 10 ? [sum, 0] : [sum - 10, 1];
    r.next = new ListNode(num);
    r = r.next;
    p1 = p1?.next || null;
    p2 = p2?.next || null;
  }
  if (flag) {
    r.next = new ListNode(flag);
  }

  return result.next;
}
