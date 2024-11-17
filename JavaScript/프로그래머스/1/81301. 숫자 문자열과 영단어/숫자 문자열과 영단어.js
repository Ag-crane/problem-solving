function solution(s) {
    var answer = "";
    let dict = {zero:0,one:1,two:2,three:3,four:4,five:5,six:6,seven:7,eight:8,nine:9}
    let str = ''
    let arr = [...s]
    arr.forEach(e => {
        if (!isNaN(e)) {
            answer += e
        } else {
            str += e
            
            if (str in dict) {
            answer += String(dict[str])
            str = ''
            }
        } 
    })
    
    return Number(answer);
}