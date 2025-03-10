const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
    .toString()
    .trim()
    .split(/\r?\n/);

const [N, K] = input[0].split(" ").map(Number);

class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

const linkedList = Array.from({ length: N }, (_, i) => new Node(i + 1));

for (let i = 0; i < N; i++) {
    linkedList[i].prev = linkedList[(i - 1 + N) % N];
    linkedList[i].next = linkedList[(i + 1) % N];
}
const results = [];
let size = N;
let current = linkedList[0];
while (size > 0) {
    // K번째 노드로 이동
    let index = 1;
    while (index < K) {
        current = current.next;
        index++;
    }
    // 저장
    results.push(current.value);

    // 제거
    current.prev.next = current.next;
    current.next.prev = current.prev;
    current = current.next;

    size--;
}

console.log("<" + results.join(", ").trim() + ">");
