/*
 * @lc app=leetcode.cn id=9 lang=typescript
 *
 * [9] 回文数
 */

// @lc code=start
function isPalindrome(x: number): boolean {
  if (x < 0 || (x % 10 === 0 && x != 0)) {
    return false;
  }
  let y = 0,
    z = x;
  while (y < z) {
    const i = Math.floor(z / 10);
    const j = z % 10;
    y = y * 10 + j;
    z = i;
  }
  return y === z || Math.floor(y / 10) == z;
}
// @lc code=end

// 先考虑特殊情况，如果是负数，肯定不是(因为符号),如果是x < 10,肯定是（因为只有一位）
// 将 x 转换为字符串，然后依次进行比较
function isPalindrome1(x: number): boolean {
  if (x < 0) {
    return false;
  } else if (x < 10) {
    return true;
  }
  const target = x + "";
  // liang'zh
  //   const length = target.length;
  //   const splitLength = Math.floor(length / 2);
  //   for (let i = 0; i < splitLength; i++) {
  //     if (target[i] !== target[length - i - 1]) {
  //       return false;
  //     }
  //   }
  let start = 0;
  let end = target.length - 1;
  while (start < end) {
    if (target[start] !== target[end]) {
      return false;
    }
    ++start;
    --end;
  }
  return true;
}

// 不转换为字符串
function isPalindrome2(x: number): boolean {
  if (x < 0) {
    return false;
  } else if (x < 10) {
    return true;
  }
  let length = 1;
  // 确定长度
  while (x >= 10 ** length) {
    ++length;
  }
  let i = 0; // 判断 i 位与length-1-i位是否相等
  while (i < Math.floor(length / 2)) {
    const start = Math.floor(x / 10 ** i) % 10;
    const end = Math.floor(x / 10 ** (length - 1 - i)) % 10;
    if (start !== end) {
      return false;
    }
    i++;
  }
  return true;
}

function isPalindrome3(x: number): boolean {
  if (x < 0 || (x % 10 === 0 && x != 0)) {
    return false;
  }
  let y = 0,
    z = x;
  while (y < z) {
    const i = Math.floor(z / 10);
    const j = z % 10;
    y = y * 10 + j;
    z = i;
  }
  return y === z || Math.floor(y / 10) == z;
}
