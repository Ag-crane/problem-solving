const input = require("fs")
    .readFileSync(process.platform === "linux" ? 0 : "./input.txt", "utf8")
    .trim()
    .split(/\r?\n/);

const N = +input[0];
const cards = input[1].split(" ").map(Number); // 같은 수는 없다
const M = +input[2];
const targets = input[3].split(" ").map(Number);

// 완전 탐색 O(NM)은 시간 초과 -> 이분 탐색(MlogN)

function searchTarget(target) {
    let left = 0;
    let right = N - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (cards[mid] === target) {
            return 1;
        } else if (cards[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return 0;
}

cards.sort((a, b) => a - b);

const results = [];
for (const target of targets) {
    results.push(searchTarget(target));
}

console.log(results.join(" "));
