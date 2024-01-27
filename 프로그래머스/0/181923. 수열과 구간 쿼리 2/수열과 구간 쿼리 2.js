function find(arr, [s,e,k]) {
    let lst=[];
    for (let i=s;i<=e;i++){
        if (arr[i]>k){
            lst.push(arr[i])
        }
    }
    return lst.length===0 ? -1 : Math.min(...lst)
}

function solution(arr, queries) {
    var answer = [];
    queries.forEach((query)=>{
        answer.push( find(arr,query) )
    })
    
    return answer;
}