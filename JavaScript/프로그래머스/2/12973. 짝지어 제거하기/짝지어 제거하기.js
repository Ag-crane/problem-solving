function solution(s) {
    const stack = []
    for (const char of s) {
        if (stack.at(-1)===char) {
            stack.pop()
        } else {
            stack.push(char)
        }
    }
    return Number(stack.length===0)
}