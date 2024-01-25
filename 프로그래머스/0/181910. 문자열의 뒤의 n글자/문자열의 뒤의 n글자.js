function solution(my_string, n) {
    var answer = '';
    // let reverse_string = my_string.split("").reverse().join("")
    // answer = reverse_string.slice(0,n).split("").reverse().join("")
    let startNum = my_string.length - n
    answer = my_string.slice(startNum)
    return answer;
}