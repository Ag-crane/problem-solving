function solution(phone_number) {
    var answer = '';
    const l = phone_number.length
    for (let i=0; i<l-4; i++) answer += "*"
    answer += phone_number.slice(l-4, l)
    return answer;
}