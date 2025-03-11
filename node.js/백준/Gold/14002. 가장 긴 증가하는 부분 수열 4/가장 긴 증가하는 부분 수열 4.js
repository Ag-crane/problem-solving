const input = require("fs")
    .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
    .trim()
    .split("\n");

const N = +input[0];
const arr = input[1].split(" ").map(Number);

// 각 인덱스 i에 대하여, arr[i]로 끝나는 최장 증가 부분 수열의 길이와 이전 인덱스를 저장함
const dp = Array(N).fill(1);
const prev = Array(N).fill(-1);

for (let i = 0; i < N; i++) {
    for (let j = 0; j < i; j++) {
        if (arr[j] < arr[i] && dp[i] < dp[j] + 1) {
            dp[i] = dp[j] + 1;
            prev[i] = j;
        }
    }
}

// dp 배열에서 최대 길이와 해당 인덱스를 찾음
let maxLen = 0, maxIndex = 0;
for (let i = 0; i < N; i++) {
    if (dp[i] > maxLen) {
        maxLen = dp[i];
        maxIndex = i;
    }
}

// prev 배열을 이용하여 최장 증가 부분 수열을 역추적한 후 순서를 뒤집음
const lis = [];
while (maxIndex !== -1) {
    lis.push(arr[maxIndex]);
    maxIndex = prev[maxIndex];
}
lis.reverse();

console.log(maxLen);
console.log(lis.join(" "));
