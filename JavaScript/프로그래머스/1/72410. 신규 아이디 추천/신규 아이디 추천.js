function solution(new_id) {
    // 1
    new_id = new_id.toLowerCase()
    // 2
    new_id = [...new_id].filter(char => 
                (char.charCodeAt() >= 48 && char.charCodeAt() <= 57) ||
                (char.charCodeAt() >= 97 && char.charCodeAt() <= 122) ||
                ['-', '_', '.'].includes(char)
            )
    // 3
    let new_new_id = [new_id[0]]
    for (let i=1; i<new_id.length; i++) {
        if (new_id[i-1] === '.' && new_id[i] === '.') continue
        new_new_id.push(new_id[i])
    }
    new_id = new_new_id
    
    // 4
    if (new_id[0]==='.') new_id.shift()
    if (new_id.at(-1)==='.') new_id.pop()
    
    // 5
    if (!new_id.length) new_id.push('a')
    
    // 6
    if (new_id.length>=16) {
        new_id.length = 15
        if (new_id.at(-1)==='.') new_id.pop()
    }
    
    // 7
    while (new_id.length<=2) {
        new_id.push(new_id.at(-1))
    }
    
    return new_id.join('')
}