function solution(nums) {
    let set = new Set(nums)
    return Math.min([...set].length, nums.length/2)
}