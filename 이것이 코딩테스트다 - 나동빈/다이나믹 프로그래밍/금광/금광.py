T = int(input())
for _ in range(T):
    n, m = map(int,input().split())
    data = list(map(int,input().split()))
    index = 0
    dp = []
    for i in range(n):
        dp.append(data[index:index+m])
        index += m

    for j in range(1,m):
        
        dp[0][j] += max(dp[0][j-1],dp[1][j-1])      # 맨 위
        dp[n-1][j] += max(dp[n-2][j-1],dp[n-1][j-1])    # 맨 아래
        
        for i in range(1,n-1):
            dp[i][j] += max(dp[i-1][j-1],dp[i][j-1],dp[i+1][j-1])

    print( max( [dp[i][m-1] for i in range(n) ]) )