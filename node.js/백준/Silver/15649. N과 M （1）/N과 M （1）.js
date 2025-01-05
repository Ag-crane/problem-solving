const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt').toString().trim()
const [N, M] = input.split(' ').map(Number)

const selected = Array(N).fill(false)
const cur = []
let answer = ''

function dfs(depth) {
    if (cur.length===M) {
        answer += cur.join(' ').concat('\n')
        return
    }
    
    for (let i=0; i<N; i++) {
        if (!selected[i]) {
            cur.push(i+1)
            selected[i] = true
            
            dfs(depth+1)
            
            cur.pop()
            selected[i] = false
        }
    }
}

dfs(0)

console.log(answer)