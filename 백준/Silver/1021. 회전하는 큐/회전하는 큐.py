import sys
from collections import deque

input = sys.stdin.readline

n, m = map(int,input().split())
targets = list(map(int,input().split()))

queue = deque([i for i in range(1,n+1)])
count = 0

for target in targets:
    # print(queue, target)
    countL = 0      # 역방향 회전 수
    countR = 0      # 정방향 회전 수
    new = queue.copy()
    while queue[0] != target:
        queue.rotate(1)
        countR += 1
    
    while new[0] != target:
        new.rotate(-1)
        countL += 1
    
    count += min(countR,countL)
    
    if countL > countR:
        queue = new
    queue.popleft()

print(count)