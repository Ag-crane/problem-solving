function solution(my_string, alp) {
    return my_string.split('').map(e => e === alp ? alp.toUpperCase() : e).join('')
}