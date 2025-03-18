function solution(triangle) {
    const dp = triangle.map(row => row.map(num => 0))
    dp[0] = triangle[0]
    
    for (let i=1; i<triangle.length; i++) {
        for (let j=0; j<triangle[i].length; j++) {
            dp[i][j] = Math.max(
                (dp[i-1][j] || 0) + triangle[i][j], 
                (dp[i-1][j-1] || 0) + triangle[i][j]
            )
        }
    }
    // console.log(dp)
    
    return Math.max(...dp.at(-1))
}