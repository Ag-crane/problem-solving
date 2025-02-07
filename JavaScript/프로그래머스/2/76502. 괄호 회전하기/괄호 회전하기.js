function isValid(arr) {
    const dict = {']':'[', '}':'{', ')':'('}
    const stack = []
    for (const char of arr) {
        if (['[', '{', '('].includes(char)) {
            stack.push(char)
        } else {
            if (dict[char]!==stack.pop()) return false
        }
    }
    return stack.length === 0 ? true : false
}

function solution(s) {
    let count = 0
    for (let x=0; x<s.length; x++) {
        const doubleS = [...s, ...s]
        if (isValid(doubleS.slice(x, x+s.length))) count++
    }
    
    return count
}