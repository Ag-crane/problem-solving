const [N, M] = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt').toString().trim().split(' ').map(Number)

const result = []

function backtrack(cur, visited) {
    
    if (cur.length===M) {
        result.push([...cur])
        return
    }

    for (let i=1; i<N+1; i++) {
        if (!visited[i]) {
            if (cur.length!==0 && cur.at(-1) > i) continue
            visited[i] = true
            cur.push(i)

            backtrack(cur, visited)
            visited[i] = false
            cur.pop()
        }
    }
}

backtrack([], Array(M+1).fill(false))

console.log(result.map(arr => arr.join(' ')).join('\n'))