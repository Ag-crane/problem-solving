function solution(genres, plays) {
    
    let info = {}
    
    for (let i=0; i<genres.length; i++) {
        if (!info[genres[i]]) info[genres[i]] = []
        info[genres[i]].push(i)
    }
    // console.log(info)
    
    const sortedInfo = Object.entries(info).sort((a, b) => {
        const sumA = a[1].reduce((sum, num) => sum + plays[num], 0)
        const sumB = b[1].reduce((sum, num) => sum + plays[num], 0)
        if (sumA !== sumB) return sumB - sumA
    })
    
    // console.log(sortedInfo)
    
    const result = []
    sortedInfo.forEach(([genre, nums]) => {
        const sortedNums = nums.sort((a, b) => plays[b] - plays[a]).slice(0, 2)
        result.push(...sortedNums)
    })
    
    return result
}