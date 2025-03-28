const input = require("fs")
    .readFileSync(process.platform === "linux" ? 0 : "./input.txt", "utf8")
    .trim()
    .split(/\r?\n/);

const T = +input[0];
const N = +input[1];
const A = input[2].split(" ").map(Number);
const M = +input[3];
const B = input[4].split(" ").map(Number);

const subA = [];
for (let length = 1; length <= N; length++) {
    for (let i = 0; i <= N - length; i++) {
        subA.push(A.slice(i, i + length).reduce((a, c) => a + c));
    }
}

const subB = [];
for (let length = 1; length <= M; length++) {
    for (let i = 0; i <= M - length; i++) {
        subB.push(B.slice(i, i + length).reduce((a, c) => a + c));
    }
}

subB.sort((a, b) => a - b);

let answer = 0;
for (let i = 0; i < subA.length; i++) {
    const target = T - subA[i];

    answer += countTarget(subB, target);
}

function findFirstTarget(arr, target) {
    let result = -1;
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        // 마지막 위치 저장하고 왼쪽 탐색
        if (arr[mid] === target) {
            result = mid;
            right = mid - 1;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return result;
}

function findLastTarget(arr, target) {
    let result = -1;
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        // 마지막 위치 저장하고 오른쪽 탐색
        if (arr[mid] === target) {
            result = mid;
            left = mid + 1;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return result;
}

function countTarget(arr, target) {
    const first = findFirstTarget(arr, target);
    const last = findLastTarget(arr, target);
    return first === -1 ? 0 : last - first + 1;
}

console.log(answer);
