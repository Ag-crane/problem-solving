import sys
input = sys.stdin.readline
from collections import deque

n,m,v = map(int,input().split())
graph = [[] for _ in range(n+1)]

for i in range(m):
    a, b = map(int,input().split())
    graph[a].append(b)
    graph[b].append(a)

for i in range(1,n+1):
    graph[i].sort()

# print(graph)

def dfs(graph,v,visited):
    
    visited[v] = True
    print(v,end=' ')
    for i in graph[v]:
        if not visited[i]:
            dfs(graph,i,visited)


def bfs(graph,v):
    visited = [False]*(n+1)
    
    q = deque([v])
    visited[v] = True
    print(v, end=' ')
    
    while q:
        v = q.popleft()
        for i in graph[v]:
            if not visited[i]:
                q.append(i)
                visited[i] = True
                print(i,end=' ')

# dfs 수행
visited = [False]*(n+1)
dfs(graph,v,visited)

print()

# bfs 수행
bfs(graph,v)