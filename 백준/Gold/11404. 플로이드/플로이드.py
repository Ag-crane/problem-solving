import sys

input = sys.stdin.readline
INF = int(1e9)

n = int(input())
m = int(input())

d = [[INF]*(n+1) for _ in range(n+1)]

for i in range(1,n+1):
    d[i][i] = 0

for _ in range(m):
    a, b, c = map(int, input().split())
    d[a][b] = min(d[a][b], c)

for k in range(1,n+1):
    for a in range(1,n+1):
        for b in range(1,n+1):
            if a==b:
                continue
            d[a][b] = min(d[a][b], d[a][k] + d[k][b])


for a in range(1,n+1):
    for b in range(1,n+1):
        if d[a][b] == INF:
            print(0, end=" ")
        else:
            print(d[a][b], end=" ")
    print("")