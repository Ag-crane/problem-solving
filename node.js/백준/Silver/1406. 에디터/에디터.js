const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 연결 리스트 풀이

class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = new Node(null);
        this.tail = new Node(null);
        this.head.next = this.tail;
        this.tail.prev = this.head;
        this.cursor = this.tail;
    }

    moveLeft() {
        if (this.cursor.prev !== this.head) this.cursor = this.cursor.prev;
    }

    moveright() {
        if (this.cursor !== this.tail) this.cursor = this.cursor.next;
    }

    insert(value) {
        const newNode = new Node(value);
        const prevNode = this.cursor.prev;

        this.cursor.prev = newNode;
        newNode.next = this.cursor;
        prevNode.next = newNode;
        newNode.prev = prevNode;
    }

    remove() {
        if (this.cursor.prev !== this.head) {
            const removedNode = this.cursor.prev;
            const prevNode = removedNode.prev;

            prevNode.next = this.cursor;
            this.cursor.prev = prevNode;
        }
    }

    print() {
        let current = this.head;
        let result = "";
        while (current.next !== this.tail) {
            result += current.next.value;
            current = current.next;
        }
        console.log(result);
    }
}

const list = input[0].split("");
const M = +input[1];

const editor = new LinkedList();

list.forEach((char) => editor.insert(char));

for (let i = 2; i < M + 2; i++) {
    const [command, char] = input[i].split(" ");
    if (command === "L") {
        editor.moveLeft();
    } else if (command === "D") {
        editor.moveright();
    } else if (command === "B") {
        editor.remove();
    } else if (command === "P") {
        editor.insert(char);
    }
}

editor.print();

// // 스택 풀이
// let leftStack = input[0].split("");
// let rightStack = [];
// let commands = input.slice(2);

// commands.forEach(command => {
//     let [cmd, char] = command.split(" ");

//     if (cmd === "L" && leftStack.length) {
//         rightStack.push(leftStack.pop());
//     } else if (cmd === "D" && rightStack.length) {
//         leftStack.push(rightStack.pop());
//     } else if (cmd === "B" && leftStack.length) {
//         leftStack.pop();
//     } else if (cmd === "P") {
//         leftStack.push(char);
//     }
// });

// console.log(leftStack.join("") + rightStack.reverse().join(""));
