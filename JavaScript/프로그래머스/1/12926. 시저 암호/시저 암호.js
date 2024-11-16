function solution(s, n) {
    var answer = '';
    [...s].forEach( char => {
        if (char === ' ') answer += ' '
        else if (char.charCodeAt() <= 90) {
            answer += String.fromCharCode((char.charCodeAt() - 65 + n) % 26 + 65)
        } else {
            answer += String.fromCharCode((char.charCodeAt() - 97 + n) % 26 + 97)
        }
    })
    return answer;
}