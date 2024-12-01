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
        return [...string].reduce((a,c) => a + dict[c] ,0) || -1
    })
    
    return answer
}