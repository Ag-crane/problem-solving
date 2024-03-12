from collections import deque

n, m = map(int,input().split())
graph = [list(map(int,input())) for _ in range(n)]

# BFS는 시작 지점으로부터의 거리가 가까운 노드부터 차례대로 탐색하므로, 최단거리 찾기 문제에 적합하다.
# 아이디어 : 값이 1인 인접한 노드를 모두 방문하고, 해당 노드 까지의 거리를 저장한다.
dx = [+1,-1,0,0]
dy = [0,0,+1,-1]
def bfs(x,y):
    queue = deque([(x,y)])
    
    while queue:
        x,y = queue.popleft()
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if nx <= -1 or nx >= n or ny <= -1 or ny >= m:
                continue
            elif graph[nx][ny] == 1:
                queue.append((nx,ny))
                graph[nx][ny] = graph[x][y] + 1
    
    return graph[n-1][m-1]

print(bfs(0,0))
