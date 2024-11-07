function solution(todo_list, finished) {
    var answer = [];
    answer = todo_list.filter((e,i)=>finished[i]===false)
    return answer;
}