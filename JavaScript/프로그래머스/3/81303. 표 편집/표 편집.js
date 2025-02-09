class Node {
    constructor(index) {
        this.index = index;
        this.prev = null;
        this.next = null;
    }
}

function solution(n, k, cmd) {
    const nodes = Array.from({ length: n }, (_, i) => new Node(i));

    for (let i = 1; i < n; i++) {
        nodes[i].prev = nodes[i - 1];
        nodes[i - 1].next = nodes[i];
    }

    let now = nodes[k];
    const removed = [];

    for (const command of cmd) {
        let num, prevNode, nextNode;
        let parts = command.split(" ");

        switch (parts[0]) {
            case "U":
                num = Number(parts[1]);
                while (num--) now = now.prev;
                break;
            case "D":
                num = Number(parts[1]);
                while (num--) now = now.next;
                break;
            case "C":
                // 삭제
                prevNode = now.prev;
                nextNode = now.next;
                if (prevNode) prevNode.next = nextNode;
                if (nextNode) nextNode.prev = prevNode;
                removed.push(now);

                // 선택
                now = nextNode ? nextNode : prevNode;
                break;
            case "Z":
                const restored = removed.pop();
                if (!restored) break;

                prevNode = restored.prev;
                nextNode = restored.next;

                if (prevNode) prevNode.next = restored;
                if (nextNode) nextNode.prev = restored;
                break;
        }
    }

    let result = Array(n).fill("O");
    for (let node of removed) result[node.index] = "X";
    return result.join("");
}
