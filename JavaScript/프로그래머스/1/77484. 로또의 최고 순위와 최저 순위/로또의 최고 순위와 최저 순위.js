function solution(lottos, win_nums) {
    let zeroCount = 0
    let answerCount = 0
    lottos.forEach(e => {
        if (e===0) zeroCount++
        else if (win_nums.includes(e)) answerCount++
    })
    
    let low, high
    low = Math.min(6, 7 - answerCount)
    high = Math.min(6, 7 - (zeroCount + answerCount))
    
    return [high, low]
}