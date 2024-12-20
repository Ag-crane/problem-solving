function solution(clothes) {
    let dict = {}
    
    clothes.forEach(([cloth, category]) => {
        if (dict[category]) dict[category]++
        else dict[category] = 1
    })
    
    return Object.values(dict).reduce((a,c) => (c+1)*a, 1) - 1
}