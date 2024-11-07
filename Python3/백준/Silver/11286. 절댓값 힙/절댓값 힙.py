import heapq
import sys
input = sys.stdin.readline

n = int(input())
data = [int(input()) for i in range(n)]
heap = []
for x in data:
    if x==0 and not heap:
        print(0)
    elif x==0:
        print(heapq.heappop(heap)[1])
    else:
        heapq.heappush(heap,((abs(x),x)))

