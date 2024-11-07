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
        print(heapq.heappop(heap))
    else:
        heapq.heappush(heap,x)


# # 힙을 이용하지 않을 경우 시간복잡도 : O(n^2*logn)
# arr = []
# for x in data:
#     if x !=0:
#         arr.append(x)
#     else:
#         if arr:
#             arr.sort(reverse=True)
#             print(arr.pop())
#         else:
#             print(0)
