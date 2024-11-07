import sys
from collections import deque

input = sys.stdin.readline
def print2DArr(arr):
    for i in range(len(arr)):
        for m in range(len(arr[0])):
            print(arr[i][j],end=' ')
        print()

n, m = map(int,input().split())
graph = [[] for _ in range(n)]
for i in range(n):
    row = input()
    for j in range(m):
        graph[i].append(int(row[j]))

x = 0
y = 0
q = deque([(0,0)])
dx = [1,-1,0,0]
dy = [0,0,1,-1]
while q:
    # print2DArr(graph)
    x,y = q.popleft()
    for i in range(4):
        nx = x+dx[i]
        ny = y+dy[i]
        if nx>=n or nx<=-1 or ny>=m or ny<=-1:
            continue
        if graph[nx][ny] == 1:
            graph[nx][ny] = graph[x][y] + 1
            q.append((nx,ny))
    
print(graph[n-1][m-1])
