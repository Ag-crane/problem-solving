function solution(s) {
    var answer = [-1]
    let arr = []
    for (let i=1; i<s.length; i++) {
        let d = 0
        let found = false
        for (let j=i-1; j>=0; j--) {
            d++
            if (s[j]===s[i]) {
                answer.push(d)
                found = true
                break
            }
        }
        if (!found) {
            answer.push(-1)
        }
    }

    return answer;
}