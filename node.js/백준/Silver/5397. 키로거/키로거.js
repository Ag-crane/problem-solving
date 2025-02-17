const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
    .toString()
    .trim()
    .split(/\r?\n/);

const T = +input[0];

for (let i = 1; i <= T; i++) {
    const str = input[i].split("");
    const leftStack = [];
    const rightStack = [];

    str.forEach((char) => {
        if (char === "<") {
            leftStack.length > 0 && rightStack.push(leftStack.pop());
        } else if (char === ">") {
            rightStack.length > 0 && leftStack.push(rightStack.pop());
        } else if (char === "-") {
            leftStack.pop(char);
        } else {
            leftStack.push(char);
        }
    });

    console.log([...leftStack, ...rightStack.reverse()].join(""));
}
