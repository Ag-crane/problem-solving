const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const [N, W, L] = input[0].split(" ").map(Number);
const trucks = input[1].split(" ").map(Number);

const bridgeQueue = Array(W).fill(0);
let time = 0;
let bridgeWeight = 0;

while (trucks.length > 0 || bridgeWeight > 0) {
    time++;
    bridgeWeight -= bridgeQueue.shift();

    if (trucks.length > 0) {
        if (bridgeWeight + trucks[0] <= L) {
            let truck = trucks.shift();
            bridgeQueue.push(truck);
            bridgeWeight += truck;
        } else {
            bridgeQueue.push(0);
        }
    }
}

console.log(time);
