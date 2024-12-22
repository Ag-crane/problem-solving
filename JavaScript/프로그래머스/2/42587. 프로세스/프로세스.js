function solution(priorities, location) {
    let q = priorities.map((e, i) => [e, i])
    let count = 0
    
    while (true) {
        let priorities = q.map(([p, i]) => p)
        let maxP = Math.max(...priorities)
        
        let cur = q.shift()
        
        if (cur[0]===maxP) { // 실행
            count++        
            if (cur[1]===location) {
                return count
            }
        } else { // 다시 큐에 넣기
            q.push(cur)
        }

    }
}