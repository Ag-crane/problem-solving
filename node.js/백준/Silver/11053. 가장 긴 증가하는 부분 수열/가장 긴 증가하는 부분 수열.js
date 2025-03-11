const input = require("fs")
    .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
    .split(/\r?\n/);

const N = +input[0];
const arr = input[1].split(" ").map(Number);

// dp 테이블 : [최댓값, 수열 길이]
const dp = Array(N + 1).fill(1);

for (let i = 2; i <= arr.length; i++) {
    let max = 0;
    // i 이전의 원소들에 대하여
    for (let j = 1; j < i; j++) {
        if (arr[j - 1] < arr[i - 1]) {
            max = Math.max(max, dp[j]);
        }
    }
    dp[i] = max + 1;
}
// console.log(dp);
console.log(Math.max(...dp));
