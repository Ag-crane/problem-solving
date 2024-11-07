function solution(num_list) {
    var answer = [...num_list]

    const diff = num_list.at(-1) - num_list.at(-2)
    const newNum = diff>0 ? diff : num_list.at(-1)*2
    answer.push(newNum)
    return answer;
}