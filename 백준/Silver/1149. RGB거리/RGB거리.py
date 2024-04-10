n = int(input())
cost = [[0,0,0]] + [list(map(int,input().split())) for _ in range(n)]

d = [[0,0,0] for _ in range(n+1)]
d[1] = cost[1]

for i in range(2,n+1):
    d[i][0] = min(d[i-1][1], d[i-1][2]) + cost[i][0]
    d[i][1] = min(d[i-1][0], d[i-1][2]) + cost[i][1]
    d[i][2] = min(d[i-1][0], d[i-1][1]) + cost[i][2]

print(min(d[n]))