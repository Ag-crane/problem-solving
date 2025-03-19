const input = require("fs")
    .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
    .trim()
    .split(/\r?\n/);

const N = +input[0];
const arr = input[1].split(" ").map(Number);

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let mid;
    while (left <= right) {
        mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] > target) {
			right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
	
    return left;
}

const sequence = []; // 각 길이별 끝 값의 최소값 저장
sequence.push(arr[0]);

for (let i = 1; i < N; i++) {
    if (sequence.at(-1) < arr[i]) {
        sequence.push(arr[i]);
    } else {
        const index = binarySearch(sequence, arr[i]);
		sequence[index] = arr[i]
    }
}

console.log(sequence.length)
