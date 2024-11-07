from collections import deque

def bfs(graph, start, visited):
    queue = deque([start])
    visited[start] = True
    
    while queue:
        v = queue.popleft()
        print(v,end=' ')
        for i in graph[v]:
            if not visited[i]:
                queue.append(i)
                visited[i] = True
            
    
# 예시 그래프 : 8개의 노드, 노드 번호는 보통 1부터.
graph = [
    [], # 노드 번호와 인덱스를 일치시키기 위해 0번 인덱스를 비워둔다.
    [2,3,8],
    [1,7],
    [1,4,5],
    [3,5],
    [3,4],
    [7],
    [2,6,8],    
    [1,7]
]

visited = [False]*9

bfs(graph,1,visited)