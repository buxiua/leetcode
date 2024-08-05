/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] | undefined {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const targetResult = target - nums[i];
    if (map.has(targetResult)) {
      return [map.get(targetResult)!, i];
    }
    map.set(nums[i], i);
  }
}
// @lc code=end

// 普通方法
function twoSum1(nums: number[], target: number): number[] | undefined {
  for (let i = 0; i < nums.length; i++) {
    const targetNum = target - nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === targetNum) return [i, j];
    }
  }
}

// 构建hash表，空间换时间；❌ 获取 targetResult的时候,没有排除自己本身
function twoSum2(nums: number[], target: number): number[] | undefined {
  const map = new Map<number, number>();
  nums.forEach((item, index) => {
    map.set(item, index);
  });
  // const map = new Map(nums.map((item, index) => [item, index]));
  for (let i = 0; i < nums.length; i++) {
    const targetNum = target - nums[i];
    const targetResult = map.get(targetNum);
    if (typeof targetResult !== "undefined") {
      return [i, targetResult];
    }
  }
}

// fix: twoSum2, 对于每一个元素,先判断map中是否存在targetResult,否则将其添加进map中。
function twoSum3(nums: number[], target: number): number[] | undefined {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const targetResult = target - nums[i];
    if (map.has(targetResult)) {
      return [map.get(targetResult)!, i];
    }
    map.set(nums[i], i);
  }
}
