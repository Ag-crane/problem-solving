
class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(val) {
    this.heap.push(val);
    this.heapifyUp();
  }

  remove() {
    if (this.heap.length === 0) return 0;
    const min = this.heap[0];
    const end = this.heap.pop();
    if (this.heap.length) {
      this.heap[0] = end;
      this.heapifyDown();
    }
    return min[1]; // 실제 값을 리턴
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    const current = this.heap[index];

    while (index > 0) {
      let parentIdx = Math.floor((index - 1) / 2);
      let parent = this.heap[parentIdx];

      if (
        current[0] < parent[0] ||
        (current[0] === parent[0] && current[1] < parent[1])
      ) {
        [this.heap[parentIdx], this.heap[index]] = [this.heap[index], this.heap[parentIdx]];
        index = parentIdx;
      } else {
        break;
      }
    }
  }

  heapifyDown() {
    let index = 0;
    const length = this.heap.length;
    const current = this.heap[index];

    while (true) {
      let leftChildIdx = index * 2 + 1;
      let rightChildIdx = index * 2 + 2;
      let swapIdx = null;

      if (leftChildIdx < length) {
        if (
          this.heap[leftChildIdx][0] < current[0] ||
          (this.heap[leftChildIdx][0] === current[0] && this.heap[leftChildIdx][1] < current[1])
        ) {
          swapIdx = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        if (
          (swapIdx === null &&
            (this.heap[rightChildIdx][0] < current[0] ||
              (this.heap[rightChildIdx][0] === current[0] && this.heap[rightChildIdx][1] < current[1]))) ||
          (swapIdx !== null &&
            (this.heap[rightChildIdx][0] < this.heap[leftChildIdx][0] ||
              (this.heap[rightChildIdx][0] === this.heap[leftChildIdx][0] && this.heap[rightChildIdx][1] < this.heap[leftChildIdx][1])))
        ) {
          swapIdx = rightChildIdx;
        }
      }

      if (swapIdx === null) break;

      [this.heap[index], this.heap[swapIdx]] = [this.heap[swapIdx], this.heap[index]];
      index = swapIdx;
    }
  }

  size() {
    return this.heap.length;
  }
}

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const N = input.shift();

const heap = new MinHeap();
const output = [];

for (let x of input) {
  if (x === 0) {
    output.push(heap.remove());
  } else {
    heap.insert([Math.abs(x), x]);
  }
}

console.log(output.join('\n'));
