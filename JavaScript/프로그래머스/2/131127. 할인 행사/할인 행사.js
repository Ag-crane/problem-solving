

function solution(want, number, discount) {
    let result = 0;
    
    let wantTable = {}
    for (let i=0; i<want.length; i++) {
        wantTable[want[i]] = number[i]
    }
    
    function check(products, wantTable) {
        for (const product of products) {
            if (wantTable[product]===undefined) return false
            else wantTable[product]--
        }
        
        return Object.values(wantTable).every(value => value<=0) ? true : false
    }
    
    for (let i=0; i<=discount.length - 10; i++) {
        if (check(discount.slice(i, i+10), {...wantTable})) result++
    }
    
    return result;
}