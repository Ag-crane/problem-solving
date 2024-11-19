function solution(a, b, n) {
    let answer = 0
    while (n>=a){
        let receive = Math.floor(n/a)*b
        n = n%a + receive
        answer += receive
    }

    return answer
}