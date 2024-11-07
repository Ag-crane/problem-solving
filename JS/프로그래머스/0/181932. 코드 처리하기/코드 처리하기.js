function solution(code) {
    var answer = '';
    let mode = 0;
    
    for (let i=0;i<code.length;i++){
        if ( (mode===0) && (code[i]!=="1") && (i%2===0) ){
            answer += code[i]
        }
        else if ( (mode===0) && (code[i]==="1") ){
            mode = 1;
        }
        else if ( (mode===1) && (code[i]!=="1") && (i%2===1) ){
            answer += code[i]
        }
        else if ( (mode===1) && (code[i]==="1") ){
            mode = 0;
        }
    }
    return answer.length===0 ? "EMPTY" : answer;
}