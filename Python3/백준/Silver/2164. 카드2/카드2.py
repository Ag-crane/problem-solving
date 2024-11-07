import sys
from collections import deque
input = sys.stdin.readline

n = int(input())
dq = deque([i+1 for i in range(n)])

while len(dq)>1:
    dq.popleft()
    dq.append(dq.popleft())

print(dq[0])
