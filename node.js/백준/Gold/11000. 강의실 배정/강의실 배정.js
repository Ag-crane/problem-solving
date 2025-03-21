class PQ {
	constructor() {
		this.heap = []
	}

	push(value) {
		this.heap.push(value)
		this.heapifyUp()
	}

	pop() {
		if (this.heap.length === 0) return
		if (this.heap.length === 1) return this.heap.pop()

		const root = this.heap[0]

		this.heap[0] = this.heap.pop()
		this.heapifyDown(0)

		return root
	}

	heapifyUp() {
		let currentIndex = this.heap.length - 1
		const insertedValue = this.heap[currentIndex]

		while (currentIndex > 0) {
			const parentIndex = Math.floor((currentIndex-1) / 2)
			
			if (insertedValue < this.heap[parentIndex]) {
				this.heap[currentIndex] = this.heap[parentIndex]
				currentIndex = parentIndex
			} else {
				break;
			}
		}
		
		this.heap[currentIndex] = insertedValue
	}

	heapifyDown(currentIndex) {
		const size = this.heap.length

		while (true) {
			const leftChildIndex = 2*currentIndex + 1
			const rightChildIndex = 2*currentIndex + 2
			let smallestIndex = currentIndex

			if (leftChildIndex < size && this.heap[leftChildIndex] < this.heap[smallestIndex]) {
				smallestIndex = leftChildIndex
			}

			if (rightChildIndex < size && this.heap[rightChildIndex] < this.heap[smallestIndex]) {
				smallestIndex = rightChildIndex
			}

			if (smallestIndex === currentIndex) break;

			[this.heap[currentIndex], this.heap[smallestIndex]] = [this.heap[smallestIndex], this.heap[currentIndex]];
			currentIndex = smallestIndex;
		}
	}
}

const input = require("fs")
    .readFileSync(process.platform === "linux" ? 0 : "input.txt", "utf8")
    .trim()
    .split(/\r?\n/);

const N = +input[0];
const arr = input.slice(1).map(str => str.split(' ').map(Number))

// 시작 시간, 끝 시간 기준으로 오름차순 정렬
arr.sort((a, b) => a[0]!==b[0] ? a[0] - b[0] : a[1] - b[1])
// console.log(arr)

// 끝 시간을 우선순위 큐에 담는다
const pq = new PQ()
pq.push(arr[0][1])

for (const [start, end] of arr.slice(1)) {
	// 가장 빨리 끝나는 강의실
	let lastEnd = pq.pop()
	
	if (lastEnd <= start) { // 강의실 끝나는 시간 <= 새 강의 시작시간이면
		// 강의실 끝시간 업데이트하고 push
		lastEnd = end
		pq.push(lastEnd)
	} else {
		// 아니면 강의실 새로 개설
		pq.push(lastEnd)
		pq.push(end)
	}
}

console.log(pq.heap.length)
