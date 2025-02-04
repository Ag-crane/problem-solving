const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split(/\r?\n/);

const T = +input[0];
let line = 1;
for (let t = 0; t < T; t++) {

    const [M, N, K] = input[line++].split(" ").map(Number);
    const ground = Array.from({ length: N }, (_) => Array(M).fill(0));
    for (let i = line; i < line + K; i++) {
        const [col, row] = input[i].split(" ").map(Number);
        ground[row][col] = 1;
    }
    line += K

    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];

    function dfs(x, y) {
        ground[x][y] = 0;

        for (let i = 0; i < 4; i++) {
            const [nx, ny] = [x + dx[i], y + dy[i]];
            if (nx >= N || nx < 0 || ny > M || ny < 0) continue;
            if (ground[nx][ny] === 1) dfs(nx, ny);
        }
    }

    let count = 0;
    for (let x = 0; x < N; x++) {
        for (let y = 0; y < M; y++) {
            if (ground[x][y] === 1) {
                count++;
                dfs(x, y);
            }
        }
    }

    console.log(count);
}
