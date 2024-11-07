function solution(myString) {
    var answer = '';
    answer = [...myString.toLowerCase()].map((c)=>{
        if (c==="a"){
            return "A"
        }
        else return c
    }).join("")
    return answer;
}