import sys
from collections import deque
input = sys.stdin.readline

n = int(input())
a = list(map(int,input().split()))
queuestack = list(map(int,input().split()))
m = int(input())
c = list(map(int,input().split()))

dq = deque()
for i in range(n):
    if a[i] == 0:
        dq.append(queuestack[i])

for newItem in c:
    dq.appendleft(newItem)
    print(dq.pop(),end=' ')
    