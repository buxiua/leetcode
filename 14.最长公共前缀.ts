/*
 * @lc app=leetcode.cn id=14 lang=typescript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
  let result = "";
  for (let i = 0; ; i++) {
    const cur = strs[0][i];
    if (!cur || strs.some((item) => item[i] !== cur)) {
      return result;
    }
    result += cur;
  }
}
// @lc code=end
