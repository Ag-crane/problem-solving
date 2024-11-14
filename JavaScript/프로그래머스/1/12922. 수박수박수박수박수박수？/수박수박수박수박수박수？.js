function solution(n) {
    var answer = '';
    let word = "수"
    for (let i=0; i<n; i++){
        answer += word
        word = word === "수" ? "박" : "수"
    }
    return answer;
}