function solution(rank, attendance) {
    var answer = 0;
    
    let trueLst = [];
    for (let i=0; i<rank.length; i++) {
        if (attendance[i]){
            trueLst.push(rank[i])
        }
    }
    trueLst.sort((a,b)=>a-b)
    
    
    let a = rank.indexOf(trueLst[0])
    let b = rank.indexOf(trueLst[1])
    let c = rank.indexOf(trueLst[2])
    answer = 10000*a + 100*b + c
    return answer;
}