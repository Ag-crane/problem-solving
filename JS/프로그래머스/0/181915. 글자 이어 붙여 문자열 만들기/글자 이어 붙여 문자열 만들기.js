function solution(my_string, index_list) {
    var answer = '';
    for (i of index_list){
        answer += my_string[i]
    }
    return answer;
}