from collections import deque
import sys
input = sys.stdin.readline
n, m, k, x = map(int,input().split())

graph = [[] for _ in range(n+1)]
for i in range(m):
    a, b = map(int,input().split())
    graph[a].append(b)
distance = [-1]*(n+1) # 각 노드까지의 거리를 담을 리스트 초기화
distance[x] = 0 # 출발 도시 x에서 x까지의 거리는 0이라고 문제에서 제시했으므로
                # 미방문 도시는 구분할 수 있게 -1로 초기화한다. 모두 0으로 초기화 시 반례 있음
def bfs(graph,start):
    queue = deque([start])

    while queue:
        v = queue.popleft()
        for i in graph[v]:
            if distance[i]==-1 : # 방문한 노드 리스트를 따로 만들지 않고 distance를 이용하여 방문여부 체크
                queue.append(i)
                distance[i] = distance[v] + 1 # 이전 노드까지의 거리에 1 더하기

count = 0
bfs(graph,x)
for i in range(1,n+1):
    if distance[i] == k:
        print(i)
        count += 1
if count == 0:
    print(-1)