const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const [N, M, R] = input[0].split(" ").map(Number);
const arr = input.slice(1).map(line => line.split(" ").map(Number));

const rotate = (grid, n, m, r) => {
    const layers = Math.min(n, m) / 2;

    for (let layer = 0; layer < layers; layer++) {
        let elements = [];
        
        for (let i = layer; i < m - layer; i++) elements.push(grid[layer][i]); // 위쪽
        for (let i = layer + 1; i < n - layer; i++) elements.push(grid[i][m - layer - 1]); // 오른쪽
        for (let i = m - layer - 2; i >= layer; i--) elements.push(grid[n - layer - 1][i]); // 아래쪽
        for (let i = n - layer - 2; i > layer; i--) elements.push(grid[i][layer]); // 왼쪽

        const rotateCount = r % elements.length;
        for (let i = 0; i < rotateCount; i++) {
            elements.push(elements.shift());
        }

        let index = 0;
        for (let i = layer; i < m - layer; i++) grid[layer][i] = elements[index++]; // 위쪽
        for (let i = layer + 1; i < n - layer; i++) grid[i][m - layer - 1] = elements[index++]; // 오른쪽
        for (let i = m - layer - 2; i >= layer; i--) grid[n - layer - 1][i] = elements[index++]; // 아래쪽
        for (let i = n - layer - 2; i > layer; i--) grid[i][layer] = elements[index++]; // 왼쪽
    }
};

rotate(arr, N, M, R);

console.log(arr.map(row => row.join(" ")).join("\n"));
