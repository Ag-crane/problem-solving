import sys
from collections import deque

input = sys.stdin.readline

n, w, L = map(int,input().split())
trucks = list(map(int,input().split()))

queue = deque([0 for _ in range(w)])
time = 0
i = 0
while i < n:
    queue.popleft()
    if sum(queue) + trucks[i] <= L:
        queue.append(trucks[i])
        i += 1
    else:
        queue.append(0)
    time += 1
    # print(time,queue)

print(time + w)