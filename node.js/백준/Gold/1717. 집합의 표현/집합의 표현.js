const input = require("fs")
    .readFileSync(0, "utf8")
    .toString()
    .trim()
    .split(/\r?\n/);

const [n, m] = input[0].split(" ").map(Number);

const parent = Array.from({ length: n + 1 }, (_, i) => i);
const rank = Array(n + 1).fill(0);

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

function isConnected(x, y) {
    return find(x) === find(y);
}

for (let line = 1; line <= m; line++) {
    const [cmd, a, b] = input[line].split(" ").map(Number);
    if (cmd === 0) union(a, b);
    else if (cmd === 1) {
        console.log(isConnected(a, b) ? "YES" : "NO");
    }
}
