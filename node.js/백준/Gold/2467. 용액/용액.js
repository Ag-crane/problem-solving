const input = require("fs")
    .readFileSync(process.platform === "linux" ? 0 : "./input.txt", "utf8")
    .trim()
    .split(/\r?\n/);

const N = +input[0];
const arr = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

let left = 0
let right = N - 1
let min = Infinity
let answer = []

while (left < right) {
	const sum = arr[left] + arr[right]

	if (Math.abs(sum) < min) {
		min = Math.abs(sum)
		answer = [arr[left], arr[right]]
	}

	if (sum === 0) {
		answer = [arr[left], arr[right]]
		break
	} else if (sum > 0) {
		right--
	} else {
		left++
	}
}

console.log(answer.join(' '))
