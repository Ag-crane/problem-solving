function isSpeakable(str) {
    const words = ["aya", "ye", "woo", "ma"]
    let arr = [...str]
    let cur = ''
    let prev = ''
    for (char of arr) {
        cur += char
        if (words.includes(cur)) {
            if (cur === prev) {
                return false
            } else {
                prev = cur
                cur = ''
            }
        }
    }
    return cur===''
}

function solution(babbling) {
    var answer = 0;
    babbling.forEach(str => {
        if (isSpeakable(str)) answer++
    })
    return answer;
}