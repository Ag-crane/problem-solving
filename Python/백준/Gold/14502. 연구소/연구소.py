from collections import deque
from itertools import combinations
import sys
import copy
input = sys.stdin.readline

# 디버깅용
def print2DArr(arr):
    for i in range(len(arr)):
        for j in range(len(arr[0])):
            print(arr[i][j],end=' ')
        print()

# 특정 위치부터 탐색하는 bfs
def bfs(graph,x,y):
    q = deque([(x,y)])
    while q:
        x, y = q.popleft()
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if nx <= -1 or nx >= n or ny <= -1 or ny >= m:
                continue
            elif graph[nx][ny] == 1:    # 1이면 방문x
                continue
            elif graph[nx][ny] == 0:    # 0이면 방문 후 2로 바꾸기
                graph[nx][ny] = 2
                q.append((nx,ny))

def dfs(graph,x,y):
    graph[x][y] = 2
    
    for i in range(4):
        nx = x + dx[i]
        ny = y + dy[i]
        if nx <= -1 or nx >= n or ny <= -1 or ny >= m:
            continue
        elif graph[nx][ny] == 0:    # 0이면 방문 후 2로 바꾸기
            dfs(graph,nx,ny)
            
n, m = map(int,input().split())
graph = [list(map(int,input().split())) for _ in range(n)]

dx = [+1,-1,0,0]
dy = [0,0,+1,-1]
# 0 좌표, 2 좌표 저장
zeros = []
twos = []
for i in range(n):
    for j in range(m):
        if graph[i][j] == 0:
            zeros.append((i,j))
        if graph[i][j] == 2:
            twos.append((i,j))
            
# 가능한 벽 위치 조합
selectThree = list(combinations(zeros,3))
count = []

for i in range(len(selectThree)):   # 모든 가능한 벽 위치의 조합에 대해
    new = copy.deepcopy(graph)     # 임시 그래프 생성
    for j in range(3):      # 벽 3개 세우기
        x, y = selectThree[i][j]
        new[x][y] = 1
        
    # 바이러스 퍼뜨리기
    for a,b in twos:    # 모든 2에 대해서, 2부터 탐색
        # bfs(new,a,b)
        dfs(new,a,b)

    # 0 안전 지역 개수 저장
    count.append(0)
    for j in range(n):
        for k in range(m):
            if new[j][k] == 0:
                count[i] += 1

print(max(count))
