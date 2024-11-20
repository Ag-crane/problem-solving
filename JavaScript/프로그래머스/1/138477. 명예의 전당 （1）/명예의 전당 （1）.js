function solution(k, score) {
    var answer = [];
    let lst = []
    score.forEach(e =>{
        lst.push(e)
        lst = lst.sort((a,b) => b - a).slice(0, k)
        answer.push(lst.at(-1))
    })
    return answer;
}