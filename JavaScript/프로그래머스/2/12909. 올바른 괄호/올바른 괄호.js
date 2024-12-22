function solution(s){
    let point = 0
    
    for (const char of s) {
        if (char==='(') point++
        else point--
        if (point < 0) return false
    }
    
    return point === 0 ? true : false
}