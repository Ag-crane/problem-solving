function solution(arr, queries) {
    var answer = [];
    queries.forEach(([s,e,k])=>{
        let lst=[];
        for (let i=s;i<=e;i++){
            if (arr[i]>k){
                lst.push(arr[i])
            }
        }
        answer.push( lst.length===0 ? -1 : Math.min(...lst) )
    })
    
    return answer;
}