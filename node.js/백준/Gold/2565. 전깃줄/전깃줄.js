const input = require("fs")
    .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
    .trim()
    .split(/\r?\n/);

const N = +input[0];
// A 전봇대로 정렬했을 때 B 전봇대 배열
const arr = input
    .slice(1)
    .map((str) => str.split(" ").map(Number))
    .sort((a, b) => a[0] - b[0])
    .map((e) => e[1]);

// A 전봇대로 정렬했을 때 B 전봇대는 증가하는 수열이어야 함
// 가장 긴 증가하는 수열(LIS)의 길이 찾기
const dp = Array(N).fill(1);

for (let i = 1; i < N; i++) {
    let max = 0;
    for (let j = 0; j < i; j++) {
        if (arr[i] > arr[j]) {
            max = Math.max(max, dp[j]);
        }
    }
    dp[i] = max + 1;
}

console.log(N - Math.max(...dp));
