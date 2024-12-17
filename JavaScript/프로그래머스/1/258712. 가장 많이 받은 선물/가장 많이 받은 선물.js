function solution(friends, gifts) {
    const l = friends.length
    let index = {}
    for (let i=0; i<l; i++) {
        index[friends[i]] = i 
    }
    
    let table = Array.from({length: l}, () => Array(l).fill(0))
    
    for (const gift of gifts) {
        const [from, to] = gift.split(' ')
        table[index[from]][index[to]] += 1 
    }
    
    let points = []
    for (let i=0; i<l; i++) {
        const row = table[i]
        const col = table.map(row => row[i])
        
        let give = row.reduce((a,c) => a+c)
        let receive = col.reduce((a,c) => a+c)
        
        points.push(give - receive)
    }

    let nextMonth = Array(l).fill(0)
    for (let i=0; i<l; i++) {
        for (let j=0; j<l; j++) {
            if (i===j) continue
            
            if (table[i][j]!==table[j][i]) { // 주고받은 선물 수 비교
                if (table[i][j] > table[j][i]) nextMonth[i]++ // 더 많이 줬으면 받기
            } else { // 선물지수 비교
                if (points[i] === points[j]) continue
                else if (points[i] > points[j]) nextMonth[i]++ // 선물지수 큰 놈이 받기
            }
        }
    }
    
    return Math.max(...nextMonth)
}