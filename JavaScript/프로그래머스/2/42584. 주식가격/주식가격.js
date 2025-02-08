function solution(prices) {
    const results = Array(prices.length).fill(0)
    const stack = []
    stack.push(0)
    for (let i=1; i<prices.length; i++) {
        let time = 1
        while (stack.length > 0 && prices[stack.at(-1)] > prices[i]) {
            const popIndex = stack.pop()
            results[popIndex] = i - popIndex
        }
        stack.push(i)
    }
    // console.log(results)
    while (stack.length>0) {
        const popIndex = stack.pop()
        results[popIndex] = prices.length - popIndex - 1
    }
    
    return results
}