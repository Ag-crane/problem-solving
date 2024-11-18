function solution(food) {
    var answer = '';
    let str = ''
    for (let i=1; i<food.length; i++) {
        str += String(i).repeat(Math.floor(food[i] / 2)) 
    }
    answer = str + '0' + [...str].reverse().join('')
    return answer;
}