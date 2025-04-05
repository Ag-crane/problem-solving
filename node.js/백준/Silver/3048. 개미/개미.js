const input = require("fs")
    .readFileSync(process.platform === "linux" ? 0 : "./input.txt", "utf8")
    .trim()
    .split(/\r?\n/);

// 오른쪽 진행은 +1, 왼쪽 진행은 -1로 표시
const arr = [
    ...input[1]
        .split("")
        .reverse()
        .map((c) => [c, 1]),
    ...input[2].split("").map((c) => [c, -1]),
];
const T = +input[3];

for (let _ = 0; _ < T; _++) {
    for (let i = 0; i < arr.length - 1; i++) {
        // 앞 개미와 마주보면 swap
        if (arr[i][1] === 1 && arr[i + 1][1] === -1) {
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
            i++; // swap한 개미는 건너뛰기
        }
    }
}

console.log(arr.map((e) => e[0]).join(""));
