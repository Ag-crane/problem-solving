import sys
from collections import deque
input = sys.stdin.readline

n = int(input())

dq = deque()

for _ in range(n):
    order = list(map(int,input().split())) # 정수 처리 안함
    
    if order[0] == 1:
        dq.appendleft(order[1])
    elif order[0] == 2:
        dq.append(order[1])
    elif order[0] == 3:
        if len(dq) == 0: print(-1)
        else: print(dq.popleft())
    elif order[0] == 4:
        if len(dq) == 0: print(-1)
        else: print(dq.pop())
    elif order[0] == 5:
        print(len(dq))
    elif order[0] == 6:
        print(1 if len(dq) == 0 else 0)
    elif order[0] == 7:
        print(dq[0] if len(dq) != 0 else -1)
    elif order[0] == 8:
        print(dq[-1] if len(dq) != 0 else -1)
