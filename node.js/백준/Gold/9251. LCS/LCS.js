const input = require("fs")
    .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
    .split(/\r?\n/);

const strX = input[0];
const strY = input[1];

const dp = Array.from({ length: strX.length + 1 }, () =>
    Array(strY.length + 1).fill(0)
);

for (let i = 1; i <= strX.length; i++) {
    for (let j = 1; j <= strY.length; j++) {
        dp[i][j] =
            strX[i - 1] === strY[j - 1]
                ? dp[i - 1][j - 1] + 1
                : Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
}

console.log(dp[strX.length][strY.length]);
