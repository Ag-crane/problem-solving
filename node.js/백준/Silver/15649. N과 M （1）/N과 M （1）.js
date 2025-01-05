const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt').toString().trim()
const [N, M] = input.split(' ').map(Number)


function dfs(cur, selected) {
    if (cur.length===M) {
        console.log(...cur)
        return
    }
    
    for (let i=0; i<N; i++) {
        if (!selected[i]) {
            cur.push(i+1)
            selected[i] = true
            
            dfs(cur, selected)
            
            cur.pop()
            selected[i] = false
        }
    }
}

dfs([], Array(N).fill(false))