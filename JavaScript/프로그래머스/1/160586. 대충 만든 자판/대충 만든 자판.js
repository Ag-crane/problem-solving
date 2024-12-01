function solution(keymap, targets) {
    var answer = [];
    let dict = {}
    keymap.forEach(string => {
        [...string].forEach((char, i) => {
            if (!dict[char]) dict[char] = i+1
            else dict[char] = Math.min(dict[char], i+1)
        })
    })
    answer = targets.map(string => {
        let sum = 0
        for (let char of string) {
            if (dict[char]) {
                sum += dict[char]
            } else {
                return -1
            }
        }
        return sum
    })
    
    return answer
}