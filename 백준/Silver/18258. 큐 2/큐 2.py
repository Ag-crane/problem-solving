import sys
from collections import deque
input = sys.stdin.readline

n = int(input())

queue = deque()

for _ in range(n):
    order = list(input().split()) # 정수 처리 안함
    
    if order[0] == 'push':
        queue.append(order[1])
    elif order[0] == 'pop':
        if len(queue) == 0:
            print(-1)
        else:
            print(queue.popleft())
    elif order[0] == 'size':
        print(len(queue))
    elif order[0] == 'empty' :
        if len(queue)==0:
            print(1)
        else: print(0)
    elif order[0] == 'front' :
        if len(queue)==0 :
            print(-1)
        else: print(queue[0])
    elif order[0] == 'back' :
        if len(queue)==0 :
            print(-1)
        else: print(queue[-1])