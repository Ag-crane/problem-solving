'''
우선순위 큐를 이용하여 '방문하지 않은 노드 중 가장 가까운 노드'를 찾는 과정을 대체한다.
시간 복잡도 : O(ElogV), E는 간선의 개수, V는 노드의 개수.
'''
import sys, heapq
input = sys.stdin.readline
INF = int(1e9)

### 세팅

# 노드의 개수, 간선의 개수
n, m = map(int,input().split())
# 시작 노드 번호
start = int(input())

# 각 노드에 연결되어 있는 노드에 대한 정보를 담을 리스트
graph = [[] for _ in range(n+1)]

# 최단 거리 테이블 초기화
distance = [INF] * (n + 1)

# 간선 정보
for _ in range(m):
    a, b, c = map(int,input().split())
    graph[a].append((b,c))


### 구현

# 방문하지 않은 노드 중 가장 가까운 노드를 반환하는 get_next_node()함수가 필요하지 않다.

# 다익스트라 알고리즘
def dijkstra(start):
    q = []  # 우선순위 큐로 사용할 리스트
    
    # 시작 노드에 대한 초기화
    distance[start] = 0
    heapq.heappush(q, (0,start))
    
    while q:    # 큐가 비어있으면 종료
        dist, now = heapq.heappop(q)
        # 방문여부 확인 : visited 리스트로 따로 관리할 필요 없다.
        if dist > distance[now]:    # 이미 더 짧은 거리가 저장되어 있다면, 방문한 노드임                               
            continue                # 방문한 노드는 무시한다
        
        # 현재 노드와 인접한 노드들 확인
        for next, d in graph[now]:
            cost = dist + d
            if cost < distance[next]:
                distance[next] = cost
                heapq.heappush(q, (cost, next)) # 거리가 갱신된 노드만 우선순위 큐에 넣는다.
                
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