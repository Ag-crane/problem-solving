from collections import deque

n, k = map(int,input().split())

def bfs(x):
    time = 0
    arr = [-1]*100001   # 위치 별 최단 도착시간
    q = deque([(x,0)])
    
    while q:
        x, time = q.popleft()
        
        if x==k:
            return time
        
        nx = 2*x
        if nx<=100000:
            if arr[nx] == -1:
                arr[nx] = time
                q.append((nx,time))
        
        for nx in [x-1,x+1]:
            if nx<0 or nx>100000:
                continue
            if arr[nx] == -1:
                arr[nx] = time+1
                q.append((nx,time+1))

    
    return time

print(bfs(n))