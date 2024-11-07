import sys
import heapq
input = sys.stdin.readline

INF = int(1e9)
n, m = map(int, input().split())
graph = [[] for _ in range(m+1)]
for _ in range(m):
    a, b = map(int, input().split())
    graph[a].append(b)
    graph[b].append(a)

distance = [INF for _ in range(n+1)]  # 1번 헛간부터의 거리
distance[1] = 0
q = [(0, 1)]

while q:
    d, now = heapq.heappop(q)
    if distance[now] < d:
        continue

    for next in graph[now]:
        if distance[next] > d:
            distance[next] = d + 1
            heapq.heappush(q, (distance[next], next))

max_value = 0
max_count = 0
for i in range(1, n+1):
    if distance[i] == max_value:
        max_count += 1
    if distance[i] > max_value:
        max_value = distance[i]
        max_index = i
        max_count = 1


print(max_index)
print(max_value)
print(max_count)