import sys, heapq
input = sys.stdin.readline

T = int(input())
for _ in range(T):    
    n = int(input())
    graph = [list(map(int, input().split())) for _ in range(n)]

    INF = int(1e9)
    dx = [0, 0, 1, -1]
    dy = [1, -1, 0, 0]

    distance = [[INF for _ in range(n)] for _ in range(n)]
    distance[0][0] = graph[0][0]
    q = []
    heapq.heappush(q,(distance[0][0], (0, 0)))

    while(q):
        d, now = heapq.heappop(q)
        if distance[now[0]][now[1]] < d:
            continue

        for i in range(4):
            nx = now[0] + dx[i]
            ny = now[1] + dy[i]
            if nx < 0 or ny < 0 or nx >= n or ny >= n:
                continue
            
            if d + graph[nx][ny] < distance[nx][ny]:
                distance[nx][ny] = d + graph[nx][ny]
                heapq.heappush(q, (distance[nx][ny], (nx, ny)))

    print(distance[n-1][n-1])