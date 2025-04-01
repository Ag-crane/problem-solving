const input = require("fs")
    .readFileSync(process.platform === "linux" ? 0 : "./input.txt", "utf8")
    .trim()
    .split(/\r?\n/);

const N = +input[0];
const k = +input[1];

// k번째 수의 가능한 범위
let left = 1;
let right = k;
let answer;
while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    // mid보다 작거나 같은 수의 개수
    let count = 0;
    for (let i = 1; i <= N; i++) {
        count += Math.min(N, Math.floor(mid / i));
    }

    if (count >= k) {
        answer = mid;
        right = mid - 1;
    } else if (count < k) {
        left = mid + 1;
    }
}

console.log(answer);
