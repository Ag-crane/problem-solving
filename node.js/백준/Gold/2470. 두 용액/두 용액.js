const input = require("fs")
    .readFileSync(process.platform === "linux" ? 0 : "./input.txt", "utf8")
    .trim()
    .split(/\r?\n/);

const N = +input[0];
const arr = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

// 투 포인터 풀이

let left = 0;
let right = N - 1;
let min = 2e9;
let answer = [];
while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === 0) {
        answer = [arr[left], arr[right]];
        break;
    }

    if (min > Math.abs(sum)) {
        min = Math.abs(sum);
        answer = [arr[left], arr[right]];
    }

    if (sum > 0) {
        right--;
    } else {
        left++;
    }
}

console.log(answer.join(" "));
