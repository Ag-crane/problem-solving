const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
    .toString()
    .trim()
    .split(/\r?\n/);

const [N, M] = input[0].split(" ").map(Number);
const MOD = 1000000007;

// 유니온-파인드 풀이
const parent = Array(N + 1)
    .fill(0)
    .map((_, i) => i);

const rank = Array(N + 1).fill(0);

function find(x) {
    if (parent[x] === x) {
        return x;
    } else {
        parent[x] = find(parent[x]);
        return parent[x];
    }
}

function union(x, y) {
    const rootX = find(x);
    const rootY = find(y);

    if (rootX === rootY) return;

    if (rank[rootX] > rank[rootY]) {
        parent[rootY] = rootX;
    } else if (rank[rootX] < rank[rootY]) {
        parent[rootX] = rootY;
    } else {
        parent[rootX] = rootY;
        rank[rootY]++;
    }
}

for (let i = 1; i <= M; i++) {
    const [a, b] = input[i].split(" ").map(Number);
    union(a, b);
}

const countRoot = {};
for (let i = 1; i <= N; i++) {
    const root = find(i);
    countRoot[root] = (countRoot[root] || 0) + 1;
}

const result = Object.values(countRoot).reduce((a, c) => (a * c) % MOD);

console.log(result);
