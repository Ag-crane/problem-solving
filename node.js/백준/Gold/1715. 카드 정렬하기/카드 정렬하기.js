class Minheap {
	constructor() {
		this.heap = []
	}

	swap(i, j) {
		return [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
	}

	push(value) {
		this.heap.push(value)
		this.bubbleUp()
	}

	pop() {
		if (this.heap.length === 0) return
		if (this.heap.length === 1) return this.heap.pop()
		
		const root = this.heap[0]

		this.heap[0] = this.heap.pop()
		this.bubbleDown(0)

		return root
	}

	bubbleUp() {
		let index = this.heap.length - 1
		while (index > 0) {
			const parentIndex = Math.floor((index - 1) / 2)

			if (this.heap[parentIndex] > this.heap[index]) {
				this.swap(parentIndex, index)
			}

			index = parentIndex
		}
	}

	bubbleDown(index) {
		while (true) {
			const leftChildIndex = 2*index +1
			const rightChildIndex = 2*index + 2
			let smallestIndex = index

			if (leftChildIndex < this.heap.length &&this.heap[leftChildIndex] < this.heap[smallestIndex]) {
				smallestIndex = leftChildIndex
			}

			if (rightChildIndex < this.heap.length &&this.heap[rightChildIndex] < this.heap[smallestIndex]) {
				smallestIndex = rightChildIndex
			}

			if (smallestIndex === index) break

			this.swap(smallestIndex, index)

			index = smallestIndex
		}
	}

	isEmpty() {
		return this.heap.length === 0
	}
}

const input = require("fs")
    .readFileSync(process.platform === "linux" ? 0 : "./input.txt", "utf8")
    .trim()
    .split(/\r?\n/);

const N = +input[0]

const pq = new Minheap()

for (let i=1; i<=N; i++) {
	pq.push(+input[i])
}

let result = 0

while (pq.heap.length >= 2) {
	const minValue1 = pq.pop()
	const minValue2 = pq.pop()
	const sum = minValue1 + minValue2
	result += sum
	pq.push(sum)
}

console.log(result)

