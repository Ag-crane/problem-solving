const input = require("fs")
    .readFileSync(process.platform === "linux" ? 0 : "./input.txt", "utf8")
    .trim()
    .split(/\r?\n/);

const N = +input[0];
const arr = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

let min = Infinity;
let answer = [];
for (let i = 0; i < N; i++) {
    // arr[i] 고정, 합이 -arr[i]에 가까운 두 값 찾기

    let left = 0;
    let right = N - 1;
    while (left < right) {
		if (left === i) {
			left++
			continue
		}
		if (right === i) {
			right--
			continue
		}

        const sum = arr[left] + arr[right];

        if (min > Math.abs(sum + arr[i])) {
            min = Math.abs(sum + arr[i]);
            answer = [arr[i], arr[left], arr[right]];
        }

        if (sum === -arr[i]) {
            break;
        } else if (sum > -arr[i]) {
            right--;
        } else {
            left++;
        }
    }
}

console.log(answer.sort((a, b) => a - b).join(" "));
