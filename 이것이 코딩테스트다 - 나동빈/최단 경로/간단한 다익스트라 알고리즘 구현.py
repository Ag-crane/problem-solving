'''
구현이 쉽지만 느리게 동작하는 방법이다.
시간 복잡도 : O(V^2), V는 노드의 개수.
코딩 테스트에서 노드의 개수가 10000개 이상인 문제는 해결할 수 없다.
'''
import sys
input = sys.stdin.readline
INF = int(1e9)

### 세팅

# 노드의 개수, 간선의 개수
n, m = map(int,input().split())
# 시작 노드 번호
start = int(input())

# 각 노드에 연결되어 있는 노드에 대한 정보를 담을 리스트
graph = [[] for _ in range(n+1)]
# 각 노드 방문 여부 관리
visited = [False] * (n + 1)
# 최단 거리 테이블 초기화
distance = [INF] * (n + 1)

# 간선 정보
for _ in range(m):
    # a번 노드에서 b번 노드로 가능 비용이 c일 때
    a, b, c = map(int,input().split())
    graph[a].append((b,c))


### 구현

# 방문하지 않은 노드 중에서, 가장 최단 거리가 짧은 노드의 번호를 반환
def get_next_node():
    min_value = INF
    for i in range(1, n+1):
        if not visited[i] and distance[i] < min_value:
            min_value = distance[i]
            index = i
    return index

# 다익스트라 알고리즘
def dijkstra(start):
    # 시작 노드에 대한 초기화
    distance[start] = 0
    visited[start] = True
    for node, d in graph[start]:
        distance[node] = d
    
    for _ in range(n-1):  # 시작노드를 제외한 노드 개수만큼 반복 
        # 방문하지 않은 노드 중에서, 가장 최단 거리가 짧은 노드를 방문
        now = get_next_node() # 현재 노드
        visited[now] = True
        # 현재 노드와 인접한 노드들 확인
        for node, d in graph[now]:
            cost = distance[now] + d
            # 현재 노드를 거쳐서 다른 노드로 이동하는 거리가 지금까지 저장된 최단거리보다 더 짧은 경우
            if cost < distance[node] :
                distance[node] = cost

# 다익스트라 알고리즘 수행
dijkstra(start)

for i in range(1, n+1):
    # 도달할 수 없는 경우, INFINITY 출력
    if distance[i] == INF:
        print('INFINITY', end=' ')
    else:
        print(distance[i], end=' ')

'''
입력 예시
6 11
1
1 2 2
1 3 5
1 4 1
2 3 3
2 4 2
3 2 3
3 6 5
4 3 3
4 5 1
5 3 1
5 6 2
'''