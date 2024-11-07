function solution(picture, k) {
    var answer = [];
    
    picture.forEach(str=>{
        
        let originLst = [...str]
        let twiceLst = [];
        for (let i=0; i<originLst.length; i++) {
            for (let x=0;x<k;x++){
                twiceLst.push(originLst[i])
            }
        }
        for (let x=0;x<k;x++){
            answer.push(twiceLst.join(""))
        }
    })
    
    return answer;
}