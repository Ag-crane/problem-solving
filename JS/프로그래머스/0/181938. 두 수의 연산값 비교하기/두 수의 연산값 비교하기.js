function solution(a, b) {
    var answer = 0;
    
    answer = Math.max( Number(String(a)+String(b)), 2*a*b)
    return answer;
}