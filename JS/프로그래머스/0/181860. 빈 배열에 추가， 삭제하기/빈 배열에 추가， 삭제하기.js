function solution(arr, flag) {
    var answer = [];
    flag.map((e,i)=>{
        if (e===true){
            let newArr = new Array(arr[i]*2).fill(arr[i])
            answer = [...answer,...newArr]
        }
        else {
            answer = answer.slice(0,answer.length-arr[i])
        }
    })
    return answer;
}