function solution(a, b) {
    var answer = 0;
    let A = Number( String(a)+String(b) )
    let B = Number( String(b)+String(a) )
    answer = Math.max(A,B)
    return answer;
}