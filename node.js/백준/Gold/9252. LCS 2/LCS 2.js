const input = require("fs")
    .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
    .trim()
    .split(/\r?\n/);

const strA = input[0];
const strB = input[1];

const dp = Array.from({ length: strA.length + 1 }, () =>
    Array(strB.length + 1).fill("")
);

for (let i = 1; i <= strA.length; i++) {
    for (let j = 1; j <= strB.length; j++) {
        if (strA[i - 1] === strB[j - 1]) {
            dp[i][j] = dp[i - 1][j - 1] + strA[i - 1];
        } else {
            dp[i][j] =
                dp[i - 1][j].length > dp[i][j - 1].length
                    ? dp[i - 1][j]
                    : dp[i][j - 1];
        }
    }
}

const result = dp[strA.length][strB.length];
console.log(result.length);
if (result.length !== 0) console.log(result);
