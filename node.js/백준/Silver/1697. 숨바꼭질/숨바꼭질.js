const input = require("fs")
    .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
    .split(/\r?\n/);

const [N, K] = input[0].split(" ").map(Number);

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if (this.tail === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.size++;
    }

    dequeue() {
        if (this.head === null) return null; // 큐가 비어있으면 null 반환
        const deletedNode = this.head;
        this.head = this.head.next;
        if (this.head === null) this.tail = null;
        this.size--;
        return deletedNode.value;
    }
}

function bfs(start) {
    const q = new Queue();
    q.enqueue([start, 0]);

    const visited = new Set([start]);

    while (q.size > 0) {
        // console.log(q);
        const [current, time] = q.dequeue();

        const nexts = [current - 1, current + 1, current * 2];

        for (const next of nexts) {
            if (next === K) {
                return time + 1;
            }

            if (!visited.has(next) && next >= 0 && next <= 100000) {
                visited.add(next);
                q.enqueue([next, time + 1]);
            }
        }
    }
}

console.log(N === K ? 0 : bfs(N));
