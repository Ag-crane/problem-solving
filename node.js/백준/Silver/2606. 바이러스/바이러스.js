const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt').toString().trim().split(/\r?\n/);
const [N, M] = input.slice(0, 2).map(Number);
const graph = {};
for (let i = 1; i <= N; i++) graph[i] = [];

input.slice(2).forEach(line => {
    const [a, b] = line.split(' ').map(Number);
    graph[a].push(b);
    graph[b].push(a);
});

class Queue {
    constructor() {
        this.items = [];
        this.front = 0;
        this.rear = 0;
    }

    enqueue(e) {
        this.items[this.rear] = e;
        this.rear++;
    }

    dequeue() {
        if (this.isEmpty()) return null;
        const value = this.items[this.front];
        this.front++;
        return value;
    }

    isEmpty() {
        return this.rear === this.front;
    }
}

function bfs(start) {
    let queue = new Queue();
    let visited = new Set();

    queue.enqueue(start);
    visited.add(start);

    while (!queue.isEmpty()) {
        const now = queue.dequeue();
        
        for (const next of graph[now]) {
            if (!visited.has(next)) {
                visited.add(next);
                queue.enqueue(next);
            }
        }
    }
    
    return visited.size;
}

console.log(bfs(1) - 1);
