import heapq
import sys

input = sys.stdin.readline
INF = int(1e9)

n, m, c = map(int, input().split())

graph = [[] for _ in range(n+1)]

for _ in range(m):
    x, y, z = map(int, input().split())
    graph[x].append((y,z))


distance = [INF] * (n+1)

q = []
    
distance[c] = 0
heapq.heappush(q,(0,c))

while q: 
    d, now = heapq.heappop(q)
    
    if d > distance[now]:
        continue
    for next, d in graph[now]:
        cost = distance[now] + d
        if cost < distance[next]:
            distance[next] = cost
            heapq.heappush(q, (cost, next))


count = n-1     # c 도시 제외한 도시 개수
max_time = 0    # 최장시간
for i in distance:
    if i==INF:  # 전보를 받을 수 없는 도시 개수 빼기
        n -= 1
    elif i > max_time:
        max_time = i

print(count, max_time)