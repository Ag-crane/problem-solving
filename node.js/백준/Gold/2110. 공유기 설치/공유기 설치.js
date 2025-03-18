const input = require("fs")
    .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
    .trim()
    .split(/\r?\n/);

const [N, C] = input[0].split(" ").map(Number);
const arr = input.slice(1).map(Number).sort((a,b) => a - b);

// 가장 인접한 두 공유기 사이의 거리가 d일 때, 가능한 지를 return
function isPossible(d) {
	let count = C // 설치해야 할 공유기 수

	// 맨 앞 집에 하나 설치
	let lastLoc = arr[0]
	count-- 

	for (let i=1; i<N; i++) {
		if (arr[i] - lastLoc >= d) {
			// d보다 거리가 크면 공유기 설치
			lastLoc = arr[i]
			count--
		} 
	}
	
	// 공유기가 남아있으면 false, 모두 설치했으면 true
	return count > 0 ? false : true
}

const maxDistance = Math.max(...arr) - Math.min(...arr);

// 모든 가능한 거리(d) 후보에 대해 이분탐색 (1 ~ maxDistance)
let left = 1;
let right = maxDistance;
let mid;

let answer;
while (left <= right) {
	mid = Math.floor((right + left) / 2)

	if (isPossible(mid)){
		answer = mid
		left = mid + 1
	} else {
		right = mid - 1
	}
}

console.log(answer)
