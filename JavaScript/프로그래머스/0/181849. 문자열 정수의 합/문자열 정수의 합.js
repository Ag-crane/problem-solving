function solution(num_str) {
    var answer = 0;
    num_str.split('').map(n => {
        answer += Number(n)
    })
    
    return answer;
}