function solution(d, budget) {
    var answer = 0;
    d.sort((a,b) => a - b)
    let i = 0
    while (true) {
        if (budget - d[i] >= 0){
            budget -= d[i]
            answer ++
        } else {
            break
        }

        if (budget === 0) break
        i++
    }
    return answer;
}