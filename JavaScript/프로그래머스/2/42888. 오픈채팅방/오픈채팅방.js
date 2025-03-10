function solution(record) {
    let userMap = {}
    
    for (const str of record) {
        const [cmd, id, nickname] = str.split(' ')
        if (cmd==='Enter' || cmd==='Change') userMap[id] = nickname
    }
    
    const result = []
    for (const str of record) {
        const [cmd, id, nickname] = str.split(' ')
        if (cmd==='Enter') {
            result.push(`${userMap[id]}님이 들어왔습니다.`)
        } else if (cmd==='Leave') {
            result.push(`${userMap[id]}님이 나갔습니다.`)
        }
    }
    
    return result
}