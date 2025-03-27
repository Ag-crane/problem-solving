const input = require("fs")
    .readFileSync(process.platform === "linux" ? 0 : "./input.txt", "utf8")
    .trim()
    .split(/\r?\n/)

const N = +input[0];
const arr = input[1].split(" ").map(Number).sort((a, b) => a - b)

function isGood(i) {
    for (let j = 0; j < N; j++) {
        const target = arr[i] - arr[j]; // 이분탐색으로 찾을 값
        if (i === j) continue;

        let left = 0;
        let right = arr.length - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (mid !== i && mid !== j && arr[mid] === target) {
                // console.log(`${arr[i]} = ${arr[j]} + ${target}`);
                return true;
            }

            if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return false;
}

let answer = 0;
for (let i = 0; i < N; i++) {
    if (isGood(i)) {
        answer++;
    }
}

console.log(answer);
