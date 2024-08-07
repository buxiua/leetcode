/*
 * @lc app=leetcode.cn id=13 lang=typescript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
// 由题可知，数字小的数字在大的数字右边，如果将字符串看成一个数组的话，
// 那么就应该是降序排列，但是会出现特殊情况，就是小的数字在大的数字右边，此时的大小就不是大数+小数，而是大数减小数。
// 整个过程中，只需要遍历字符串，将对应字符转换成对应数字，并对数字进行判断累加：如果当前数字小于等于前一个数字，那么就直接累加；如果当前数字大于前一个数字，则应该累加当前数字，减少 (前一个数字 * 2),因为多加了一次。循环起点，可以设置前一个数字为最大的数字1000。
function romanToInt(s: string): number {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let sum = 0,
    pre = 1000;
  for (let i = 0; i < s.length; i++) {
    const current = map[s[i]];
    if (pre < current) {
      sum = sum + current - pre * 2;
    } else {
      sum += current;
    }
    pre = current;
  }
  return sum;
}
// @lc code=end
