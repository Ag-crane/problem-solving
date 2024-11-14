function solution(s) {
    let bool1 = [4, 6].includes(s.length)
    for (let i=0; i<s.length; i++) {
        if (isNaN(Number(s[i]))) return false
    }
    
    return bool1;
}