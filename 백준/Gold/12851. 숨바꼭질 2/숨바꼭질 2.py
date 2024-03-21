import sys
from collections import deque

input = sys.stdin.readline

n, k = map(int,input().split())
visited = [0] * 100001
def bfs(x):
    if x==k:
        return 0,1
    q = deque()
    q.append((x,0))
    count = 0
    mintime = 0
    while q:
        x, time = q.popleft()

        if count>0 and time == mintime:
            break
    
        for i in [x-1,x+1,2*x]:
            if i<0 or i>100000:  # 장외처리
                continue
            if i==k and count==0:
                mintime = time + 1
                count = 1
            elif i==k and count>0:
                count += 1
            elif visited[i]==0 or visited[i]==time+1 :
                q.append((i,time+1))
                visited[i] = time+1
    return mintime, count
    
for i in bfs(n):
    print(i)