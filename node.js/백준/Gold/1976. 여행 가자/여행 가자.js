const input = require("fs")
    .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
    .trim()
    .split(/\r?\n/);

const N = +input[0];
const M = +input[1];

const parent = Array.from({ length: N + 1 }, (_, i) => i);
const rank = Array(N + 1).fill(0);

function find(x) {
    if (parent[x] === x) return x;
    parent[x] = find(parent[x]);
    return parent[x];
}

function union(x, y) {
    const [rootX, rootY] = [find(x), find(y)];

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

function isConnected(arr) {
    return new Set(arr.map((x) => find(x))).size === 1;
}

for (let line = 2; line < N + 2; line++) {
    const numbers = input[line].split(" ").map(Number);
    numbers.forEach((num, i) => {
        if (num === 1) union(line - 1, i + 1);
    });
}

const plan = input[N + 2].split(" ").map(Number);
const cities = new Set(plan);

console.log(isConnected([...cities]) ? "YES" : "NO");
