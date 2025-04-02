const input = require("fs")
    .readFileSync(process.platform === "linux" ? 0 : "./input.txt", "utf8")
    .trim()
    .split(/\r?\n/);

const N = +input[0];
const arr = input.slice(1).map(Number).sort((a, b) => a - b);

// O(N**2)
const twoSums = new Set()

function recurse(start, current) {
	if (current.length===2) {
		twoSums.add(current[0] + current[1])
		return
	}

	for (let i=start; i<N; i++) {
		current.push(arr[i])
		recurse(i, current)
		current.pop()
	}
}
recurse(0, [])
// console.log(twoSums)

// O(N**2)
let max = 0
for (const d of arr) {
	for (const num of arr) {
		if (twoSums.has(d - num)) {
			max = Math.max(max, d)
		}
	}
}

console.log(max)