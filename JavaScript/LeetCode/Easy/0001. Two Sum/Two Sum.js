/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let sorted = nums.map((val, idx) => [val, idx])  // 값과 인덱스를 묶어서 저장
                     .sort((a, b) => a[0] - b[0]);   // 값 기준으로 정렬

    let left = 0, right = nums.length - 1;

    while (left < right) {
        let sum = sorted[left][0] + sorted[right][0];

        if (sum === target) {
            return [sorted[left][1], sorted[right][1]];  // 원래 인덱스 반환
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
};