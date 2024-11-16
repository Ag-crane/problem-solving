function solution(t, p) {
    var answer = 0;
    for (let i=0; i<= t.length - p.length; i++) {
        if (t.slice(i, i+p.length) <= Number(p)) answer++
    }
    return answer;
}