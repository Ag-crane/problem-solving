function solution(my_string) {
    var answer = [];
    let word = ''
    let arr = [...my_string]

    arr.forEach(e => {
        if (e!==' ') {
            word += e
        }else if (word !== '') {
            answer.push(word)
            word = ''
        }
    })
    if (word !== '') answer.push(word)
    return answer;
}