function solution(enroll, referral, seller, amount) {
    

    
    let parent = {}
    let profit = {}
    
    for (let i=0; i<enroll.length; i++) {
        parent[enroll[i]] = referral[i]
        profit[enroll[i]] = 0
    }
    
    function nextLevel(person, money) {
        if (person === '-') return
        
        if (money < 10) {
            profit[person] += money
            return
        } else {
            const up = Math.floor(money / 10) // 위로 보낼 돈
            const remain = money - up // 가질 돈
            
            profit[person] += remain
            nextLevel(parent[person], up)
        }
    }
    
    for (let i=0; i<seller.length; i++) {
        nextLevel(seller[i], amount[i]*100)
    }

    const result = []
    
    for (let i=0; i<enroll.length; i++) {
        result.push(profit[enroll[i]])
    }

    return result
}