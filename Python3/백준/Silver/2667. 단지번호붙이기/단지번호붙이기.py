import sys, copy
from collections import deque

input = sys.stdin.readline
def print2DArr(arr):
    print('------------')
    for i in range(len(arr)):
        for j in range(len(arr[0])):
            print(arr[i][j],end=' ')
        print()

n = int(input())
graph = [list(map(int,input().strip())) for _ in range(n)]
visited = copy.deepcopy(graph)
danji = []

def bfs(x,y):
    q = deque([(x,y)])
    visited[x][y] = 0
    dx = [1,-1,0,0]
    dy = [0,0,1,-1] 
    count = 1
    while q:
        x,y = q.popleft()
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if nx<=-1 or nx>=n or ny<=-1 or ny>=n:
                continue
            if visited[nx][ny]==1:
                q.append((nx,ny))
                visited[nx][ny] = 0
                count += 1
    danji.append(count)
    # print2DArr(visited)


for i in range(n):
    for j in range(n):
        if visited[i][j]==1:
            bfs(i,j)

danji.sort()
print(len(danji))
for i in range(len(danji)):
    print(danji[i])
# print(danji)