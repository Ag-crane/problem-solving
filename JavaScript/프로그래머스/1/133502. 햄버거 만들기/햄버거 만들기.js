function solution(ingredient) {
    let count = 0
    let stack = []
    for (const num of ingredient) {
        stack.push(num)
        
        if (
            stack.length >= 4 &&
            stack[stack.length-1] === 1 &&
            stack[stack.length-2] === 3 &&
            stack[stack.length-3] === 2 &&
            stack[stack.length-4] === 1
        ) {
            stack.length -= 4
            count++
        }
    }
    return count
        
}