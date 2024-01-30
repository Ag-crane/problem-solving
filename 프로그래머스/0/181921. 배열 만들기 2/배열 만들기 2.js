function solution(l, r) {
    var answer = [];
    for (let i = l; i<=r; i++ ){
        let lst = [...String(i)]
        if ( lst.every((n) => (n==="0")||(n==="5")) ){
            answer.push(i)
        }
    }
    if (answer.length===0) answer.push(-1)
    return answer;
}