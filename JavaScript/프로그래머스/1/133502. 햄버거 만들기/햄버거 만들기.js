function solution(ingredient) {
    let count = 0
    let stack = []
    for (const num of ingredient) {
        stack.push(num)
        if (stack.length >= 4) {
            let top4 = stack.slice(stack.length - 4, stack.length)
            if (top4.join('') === '1231'){
                stack.pop()
                stack.pop()
                stack.pop()
                stack.pop()
                count++
            }
        }
    }
    return count
        
}