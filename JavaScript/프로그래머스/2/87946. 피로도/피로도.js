

function solution(k, dungeons) {
    const visited = Array(dungeons.length).fill(false)
    const results = []
    function dfs(depth) {
        
        for (let i=0; i<dungeons.length; i++) {
            if (k >= dungeons[i][0] && !visited[i]) {
                visited[i] = true
                k -= dungeons[i][1]
                dfs(depth + 1)
                visited[i] = false
                k += dungeons[i][1]
            }
        }
        results.push(depth)
    }
    dfs(0)
    console.log(results)
    return Math.max(...results)
    
}