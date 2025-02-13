const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let leftStack = input[0].split(""); 
let rightStack = [];                 
let commands = input.slice(2);    

commands.forEach(command => {
    let [cmd, char] = command.split(" ");
    
    if (cmd === "L" && leftStack.length) {
        rightStack.push(leftStack.pop());
    } else if (cmd === "D" && rightStack.length) {
        leftStack.push(rightStack.pop());
    } else if (cmd === "B" && leftStack.length) {
        leftStack.pop();
    } else if (cmd === "P") {
        leftStack.push(char);
    }
});

console.log(leftStack.join("") + rightStack.reverse().join(""));
