function solution(my_string, is_prefix) {
    var answer = 0;
    
    let l = is_prefix.length
    if ( my_string.slice(0,l) === is_prefix ) {
        answer = 1
    }
    
    return answer;
}