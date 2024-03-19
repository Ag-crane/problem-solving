import sys
from collections import deque

input = sys.stdin.readline

n, k = map(int,input().split())
arr = [0] * 100001

def bfs(x):   
    q = deque([x])
    if x==k:
        return 0
    while q:
        x = q.popleft()
        if x == k:
            return arr[x]
        for i in [x-1,x+1,2*x]:
            if i<0 or i>100000:
                continue
            if arr[i]==0:
                arr[i] = arr[x] + 1
                q.append(i)


print(bfs(n))