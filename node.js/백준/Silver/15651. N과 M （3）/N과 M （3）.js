const [N, M] = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt').toString().trim().split(' ').map(Number)

let result = ''
function backtrack(cur) {

    if (cur.length===M) {
        result += [...cur].join(' ') + '\n'
        return
    }
    for (let i=1; i<N+1; i++) {
        cur.push(i)
        backtrack(cur)
        cur.pop()
    }
}

backtrack([])
console.log(result.trim())
