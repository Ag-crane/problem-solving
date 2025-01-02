const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt').toString().trim().split(/\r?\n/)
const [N, S] = input[0].split(' ').map(Number)
let arr = input[1].split(' ').map(Number)

let count = 0

function dfs(index, sum) {
    if (index===N) {
        if (sum===S) count++
        return
    }

    dfs(index+1, sum)
    dfs(index+1, sum + arr[index])
}

dfs(0, 0)

if (S === 0) count --

console.log(count)