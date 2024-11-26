function solution(k, m, score) {
    score.sort((a, b) => b - a)
    let min = k
    let result = 0
    score.forEach((e, i) => {
        if (e < min) {
            min = e
        }
        if (i%m === m-1) {
            result += min * m
        }
    })
    return result
}