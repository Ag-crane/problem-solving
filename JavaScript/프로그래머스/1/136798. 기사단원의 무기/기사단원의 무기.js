function countDivisor(num) {
    let count = 0
    for (let i=1; i<=num; i++) {
        if (num%i === 0) {
            if (num/i === i){
                count += 1
            } else if (num/i > i){
                count += 2
            } else break
        }
    }
    return count
}

function solution(number, limit, power) {
    var answer = 0;
    
    for (let num=1; num<=number; num++) {
        const count = countDivisor(num)
        const attackPoint = count > limit ? power : count
        answer += attackPoint
    }    
    
    return answer;
}