const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt').toString().trim().split(/\r?\n/);

const [N, M, V] = input[0].split(' ').map(Number)
const graph = {}
for (let i = 1; i <= N; i++) {
    graph[i] = []
}

input.slice(1).forEach(e => {
    let a, b
    [a, b] = e.split(' ').map(Number)
    if (graph[a]) {
        graph[a].push(b)
    } else {
        graph[a] = [b]
    }
    if (graph[b]) {
        graph[b].push(a)
    } else {
        graph[b] = [a]
    }
})

Object.values(graph).forEach(arr => arr.sort((a, b) => a - b))
// console.log(graph)

function dfs(cur, visited, result) {
    result.push(cur)
    visited.add(cur)
    if (!graph[cur]) return

    for (let next of graph[cur]) {
        if (visited.has(next)) continue
        dfs(next, visited, result)
    }

    return result.join(' ')
}

console.log(dfs(V, new Set(), []))

function bfs(start) {
    const q = [start]
    const visited = new Set()
    const result = []

    while (q.length > 0) {
        let now = q.shift()
        if (visited.has(now)) continue
        visited.add(now)
        result.push(now)

        for (let next of graph[now]) {
            q.push(next)
        }
    }

    return result.join(' ')
}

console.log(bfs(V))
