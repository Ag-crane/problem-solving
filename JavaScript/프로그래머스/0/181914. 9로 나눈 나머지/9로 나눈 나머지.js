function solution(number) {
    var answer = 0;
    answer = [...String(number)].reduce((a,c)=>Number(a)+Number(c)) % 9
    return answer;
}