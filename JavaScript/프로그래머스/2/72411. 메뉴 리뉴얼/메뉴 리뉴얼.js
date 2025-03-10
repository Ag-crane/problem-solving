function solution(orders, course) {
    // 문자열에서 n개 뽑는 함수
    function combinations(str, n) {
        str = [...str].sort()
        const combResults = []
        
        
        function recursion(current, index) {
            
            if (current.length === n) {
                combResults.push(current.join(''))
                return
            }
            
            if (index === str.length) return
            
            recursion([...current, str[index]], index+1)
            recursion(current, index+1)
            
        }
        recursion([], 0)
        
        return combResults
    }
    
    const result = []
    
    course.forEach(n => {
        const combCount = {}
        orders.forEach(order => {
            combinations(order, n).forEach(comb => {
                combCount[comb] = (combCount[comb] || 0) + 1
            })
        })

        const maxCount = Math.max(...Object.values(combCount))
        if (maxCount >= 2) {
            result.push(...Object.keys(combCount).filter(comb => combCount[comb]===maxCount))
        }
    })
    
    return result.sort()
}