import sys
from collections import deque

input = sys.stdin.readline

n, k = map(int,input().split())
graph = [0] * 100001

def bfs(x):   
    q = deque([x])
    if x==k:
        return 0
    while q:
        x = q.popleft()
        
        for i in [x-1,x+1,2*x]:
            if i<0 or i>100000:
                continue
            if i==k:
                return(graph[x]+1)
            if graph[i]==0:
                graph[i] = graph[x] + 1
                q.append(i)


print(bfs(n))