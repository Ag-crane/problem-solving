from collections import deque
import sys

input = sys.stdin.readline
n = int(input())

q = deque([])

for _ in range(n):
    input_lst = input().split()
    if input_lst[0] == 'push':
        q.append(input_lst[1])
        continue
    elif input_lst[0] == 'pop':
        if q:
            print(q.popleft())
        else:
            print(-1)
        continue
    elif input_lst[0] == 'size':
        print(len(q))
        continue
    elif input_lst[0] == 'empty':
        if q:
            print(0)
        else:
            print(1)
        continue
    elif input_lst[0] == 'front':
        if q:
            print(q[0])
        else:
            print(-1)
        continue
    elif input_lst[0] == 'back':
        if q:
            print(q[-1])
        else:
            print(-1)