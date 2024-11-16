function solution(n, m) {
    var answer = [];
    if (n > m) {
        [n, m] = [m , n]
    }

    for (let i=n; i>=1; i--) {
        if (n%i===0 && m%i===0) {
            answer.push(i)
            break
        }
    }
    let i = 1
    while (true) {
        if (m*i % n === 0) {
            answer.push(m*i)
            break
        }
        i += 1
    }
    
    return answer;
}