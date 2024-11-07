function solution(num_list) {
    var answer = 0;
    let odds = "";
    let evens = "";
    
    for (const num of num_list) {
        if (num%2===0){
            evens += `${num}`
        }else{
            odds += `${num}`
        }
    }
    return Number(evens)+Number(odds);
}