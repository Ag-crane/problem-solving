const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split(/\r?\n/);

let lineIndex = 0;
const T = +input[lineIndex++];

for (let _ = 0; _ < T; _++) {
    const [M, N, K] = input[lineIndex++].split(" ").map(Number);
    const ground = Array.from({ length: N }, (_) => Array(M).fill(0));

    for (let _ = 0; _ < K; _++) {
        const [y, x] = input[lineIndex++].split(" ").map(Number);
        ground[x][y] = 1;
    }

    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];

    function dfs(x, y) {
        if (x >= N || x < 0 || y >= M || y < 0 || ground[x][y] === 0) return;

        ground[x][y] = 0;

        for (let i = 0; i < 4; i++) {
            dfs(x + dx[i], y + dy[i]);
        }
    }

    let count = 0;
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (ground[i][j] === 1) {
                count++;
                dfs(i, j);
            }
        }
    }

    console.log(count);
}
