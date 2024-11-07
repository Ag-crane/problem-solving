# 재귀함수를 이용한 dfs 구현
def dfs_recursive(graph,v,visited): # v : 정점(vertex) = 노드(node)
    visited[v] = True   # 시작 노드 방문 처리
    
    print(v,end=' ')
    for i in graph[v]:
        if visited[i]==False:
            dfs_recursive(graph,i,visited)

# 스택을 이용한 dfs 구현
def dfs_stack(graph,v,visited):
    stack = [v]     # 방문하지 않은 노드를 담을 스택

    while stack:
        v = stack.pop() # 방문하지 않은 최상단 노드 탐색
        # 방문 안했으면 방문처리
        if not visited[v]:  # 스택에 방문 안한 노드가 중복되어 담길 수 있으므로, 이미 방문한 노드에 대해 아래 과정을 생략
            visited[v] = True
            print(v,end=' ')
            # 연결된 노드 스택에 담는데, 작은 노드부터 탐색하기 위해 역순으로
            for i in reversed(graph[v]):
                if not visited[i] : # 방문 안한 노드만 담기
                    stack.append(i)

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

visited = [False]*9    # 각 노드의 방문 여부를 기록할 리스트
dfs_recursive(graph,1,visited)

print()

visited = [False]*9    # 초기화
dfs_stack(graph,1,visited)