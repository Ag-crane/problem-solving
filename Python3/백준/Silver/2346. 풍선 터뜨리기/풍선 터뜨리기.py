import sys
from collections import deque
input = sys.stdin.readline

n = int(input())
data = list(map(int,input().split()))

dq = deque([i for i in range(1,n+1)])

answer = []

while len(dq)!=0:
    target = dq[0] # 1
    move = data[target-1] 
    answer.append(str(dq.popleft()))
    if move > 0:
        dq.rotate(-(move-1))
    else:
        dq.rotate(-move)
#     print(dq)

# print(answer)
print(' '.join(answer))
