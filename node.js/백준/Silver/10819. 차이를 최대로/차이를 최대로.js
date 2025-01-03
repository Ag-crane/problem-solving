const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt').toString().trim().split(/\r?\n/)

const N = +input[0]
const arr = input[1].split(' ').map(Number)

function getGapSum(arr) {
    let sum = 0
    for (let i=0; i<arr.length-1; i++) {
        sum += Math.abs(arr[i] - arr[i+1])
    }
    return sum
}

const result = []

function getPermutation(cur, visited) {
    
    if (cur.length===N) {
        result.push(getGapSum(cur))
        return
    }

    for (let i=0; i<N; i++) {     
        if (!visited[i]) {
            visited[i] = true
            cur.push(arr[i])

            getPermutation(cur, visited)

            cur.pop()
            visited[i] = false
        }  
        
    }
}

let visited = Array(N).fill(false)
getPermutation([], visited)

console.log(Math.max(...result))