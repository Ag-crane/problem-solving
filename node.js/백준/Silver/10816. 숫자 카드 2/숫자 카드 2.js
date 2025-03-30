const input = require("fs")
    .readFileSync(process.platform === "linux" ? 0 : "./input.txt", "utf8")
    .trim()
    .split(/\r?\n/);

const N = +input[0];
const cards = input[1].split(" ").map(Number);
const M = +input[2];
const targets = input[3].split(" ").map(Number);

function findFirst(target) {
	let result = -1
    let left = 0;
    let right = N - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (cards[mid] === target) {
            result = mid
			right = mid - 1;
        } else if (cards[mid] < target) {
			left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return result
}

function findLast(target) {
	let result = -1
    let left = 0;
    let right = N - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (cards[mid] === target) {
            result = mid
			left = mid + 1;
        } else if (cards[mid] < target) {
			left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return result
}

cards.sort((a, b) => a - b);

const results = [];
for (const target of targets) {
	const lastIndex = findLast(target)
	const firstIndex = findFirst(target)
	results.push(lastIndex === -1 ? 0 : lastIndex - firstIndex + 1)
}

console.log(results.join(" "));
