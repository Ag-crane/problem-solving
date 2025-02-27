function solution(info, edges) {
    const n = info.length
    const graph = Array.from({length : n}, () => [])
    
    for (const [parent, child] of edges) {
        graph[parent].push(child)
    }
    
    let result = 0
    
    function dfs(sheep, wolf, nextNodes) {
        result = Math.max(result, sheep)
        
        for (const next of nextNodes) {
            
            let newSheep = sheep
            let newWolf = wolf
            info[next] === 0 ? newSheep++ : newWolf++
            
            if (sheep <= wolf) continue
            
            const newNextNodes = new Set(nextNodes)
            newNextNodes.delete(next)
            graph[next].forEach(node => newNextNodes.add(node))
            
            dfs(newSheep, newWolf, newNextNodes)
        }
    }
    
    dfs(1, 0, new Set(graph[0]))
    
    return result
}