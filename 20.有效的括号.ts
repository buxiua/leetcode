/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start
function isValid(s: string): boolean {
  if (s.length % 2) {
    return false; // 如果是奇数的话，直接返回false
  }
  const stack: string[] = [];
  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    if (element === "(" || element === "[" || element === "{") {
      stack.push(element);
    } else {
      const target = stack.pop();
      if (target === undefined) {
        return false;
      }
      if (target === "[" && element !== "]") {
        return false;
      } else if (target === "(" && element !== ")") {
        return false;
      } else if (target === "{" && element !== "}") {
        return false;
      }
    }
  }
  return !stack.length;
}
// @lc code=end
