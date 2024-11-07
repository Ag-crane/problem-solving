n,m = map(int,input().split())
graph = [list(map(int,input())) for _ in range(n)]

# 아이디어 : 연결된 모든 노드(0) 탐색이 끝나면, 아이스크림 하나

# dx,dy 테크닉 활용
dx = [+1,-1,0,0]
dy = [0,0,+1,-1]
# 특정 노드와 연결된 모든 노드를 방문하는 dfs
def dfs(x,y):
 
    if graph[x][y] == 1:
        return False
    
    elif graph[x][y] == 0:
        graph[x][y] = 1 # 현재 노드 방문처리
        
        for i in range(4): # 상하좌우 인접한 모든 노드에 대해 재귀호출
            nx = x + dx[i]
            ny = y + dy[i]
            if nx<=-1 or nx>=n or ny<=-1 or ny>=m:
                continue
            dfs(nx, ny)
        
        return True

result = 0
for i in range(n):
    for j in range(m):
        if dfs(i,j):
            result += 1
            
print(result)