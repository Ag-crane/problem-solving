function solution(num_list) {
    var answer = 0;
    let product = 1;
    let sum = 0;
    for (let i=0;i<num_list.length;i++){
        product *= num_list[i]
        sum += num_list[i]
    }
    if ( product < sum**2) answer = 1
    
    return answer;
}