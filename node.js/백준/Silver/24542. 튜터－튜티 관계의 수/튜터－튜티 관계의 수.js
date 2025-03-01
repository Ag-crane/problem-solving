const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
    .toString()
    .trim()
    .split(/\r?\n/);

const [N, M] = input[0].split(" ").map(Number);

const graph = Array.from({ length: N + 1 }, () => []);

for (let i = 1; i <= M; i++) {
    const [a, b] = input[i].split(" ").map(Number);
    graph[a].push(b);
    graph[b].push(a);
}

const visited = Array(N + 1).fill(false);

function countNode(start) {
    let count = 0;

    function dfs(current) {
        if (visited[current]) return;

        visited[current] = true;
        count++;

        for (const next of graph[current]) {
            if (!visited[next]) {
                dfs(next);
            }
        }
    }

    dfs(start);

    return count;
}

let result = 1;
for (let i = 1; i <= N; i++) {
    if (!visited[i]) result = (result * countNode(i)) % 1000000007;
}

console.log(result);
