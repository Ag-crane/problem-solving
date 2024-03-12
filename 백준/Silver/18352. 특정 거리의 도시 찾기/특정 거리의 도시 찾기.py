from collections import deque
import sys
input = sys.stdin.readline
n, m, k, x = map(int,input().split())

graph = [[] for _ in range(n+1)]
for i in range(m):
    a, b = map(int,input().split())
    graph[a].append(b)

distance = [0]*(n+1) # 각 노드까지의 거리를 담을 리스트 초기화

def bfs(graph,start):
    queue = deque([start])
    visited = [False]*(n+1)

    visited[start] = True

    while queue:
        v = queue.popleft()
        for i in graph[v]:
            if not visited[i]:
                queue.append(i)
                distance[i] = distance[v] + 1 # 이전 노드까지의 거리에 1 더하기
                visited[i] = True

count = 0
bfs(graph,x)
for i in range(1,n+1):
    if distance[i] == k:
        print(i)
        count += 1
if count == 0:
    print(-1)