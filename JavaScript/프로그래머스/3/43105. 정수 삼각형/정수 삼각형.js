function solution(triangle) {
    const dp = [triangle[0]]
    
    for (let i=1; i<triangle.length; i++) {
        dp.push([])
        for (let j=0; j<=i; j++) {
            dp[i].push(Math.max(
                (dp[i-1][j] || 0) + triangle[i][j], 
                (dp[i-1][j-1] || 0) + triangle[i][j]
            ))
        }
    }
    // console.log(dp)
    
    return Math.max(...dp.at(-1))
}