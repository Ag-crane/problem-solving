function solution(s) {
    let answerLst = [];
    let lst = s.split(" ")
    for (let word of lst){
        let wordLst = [...word]
        for (let i=0; i<wordLst.length; i++) {
            if (i%2===0) wordLst[i] = wordLst[i].toUpperCase();
            else wordLst[i] = wordLst[i].toLowerCase();
        }
        answerLst.push(wordLst.join(""))
    }
    
    return answerLst.join(" ");
}