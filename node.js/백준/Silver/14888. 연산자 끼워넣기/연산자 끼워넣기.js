const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt').toString().trim().split(/\r?\n/)
const N = +input[0]
const numbers = input[1].split(' ').map(Number)
const opCount = input[2].split(' ').map(Number)
const ops = ['+', '-', '*', '/']

const operations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => {
        const val = Math.trunc(a / b);
        return val === 0 ? 0 : val; // -0인 경우 0으로 바꿔주기 위함
    }
}

const results = []
function backtrack(cur, opCount) {
    if (cur.length === N - 1) {
        results.push(
            cur.reduce((acc, cur, i) => {
                return operations[cur](acc, numbers[i + 1])
            }, numbers[0])
        )

        return
    }

    for (let i = 0; i < 4; i++) {
        if (opCount[i] > 0) {
            opCount[i]--
            cur.push(ops[i])

            backtrack(cur, opCount)
            opCount[i]++
            cur.pop()
        }
    }
}

backtrack([], opCount)

console.log(Math.max(...results))
console.log(Math.min(...results))
