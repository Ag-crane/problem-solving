const input = require("fs")
    .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
    .trim()
    .split(/\r?\n/);

const N = +input[0];
const arr = input[1].split(" ").map(Number);

const dp = Array.from({ length: N }, () => []);
dp[0].push(arr[0]);

for (let i = 1; i < N; i++) {
    let maxLength = 0;
    let maxIndex;
    for (let j = 0; j < i; j++) {
        if (arr[i] > arr[j] && maxLength < dp[j].length) {
            maxIndex = j;
            maxLength = dp[j].length;
        }
    }
    dp[i] = maxIndex === undefined ? [arr[i]] : [...dp[maxIndex], arr[i]];
}

let maxLength = 0;
let maxIndex;
dp.forEach((arr, i) => {
    if (arr.length > maxLength) {
        maxLength = arr.length;
        maxIndex = i;
    }
});

console.log(maxLength);
console.log(dp[maxIndex].join(" "));
