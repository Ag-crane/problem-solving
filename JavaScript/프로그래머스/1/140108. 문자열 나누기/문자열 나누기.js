function solution(s) {
    var answer = 0;
    let i = 0
    let x = s[i]
    let x_count = 1
    let others = 0
    let cur = s[i]
    while (i<s.length) {
        i++
        
        if (s[i] === x) {
            x_count++
        } else {
            others++
        }
        
        cur += s[i]
        
        if (x_count === others) {
            cur = ''
            answer++
            i++
            x = s[i]
            x_count = 1
            others = 0
        }
    }
    if (cur) answer++
    
    return answer;
}